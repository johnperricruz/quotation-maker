"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type LineItem = {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  imageDataUrl?: string | null;
};

type Party = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

type QuoteData = {
  version: 1;
  currency: "PHP" | "USD" | "AUD";
  logoDataUrl: string | null;
  from: Party;
  to: Party;
  quoteNo: string;
  issueDate: string;
  validUntil: string;
  notes: string;
  taxRate: number;
  discount: number;
  shippingFee: number;
  customerHandlesShippingFee: boolean;
  items: LineItem[];
};

type QuoteHistoryEntry = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  lastPrintedAt?: string;
  data: QuoteData;
};

const HISTORY_KEY = "qm:history:v1";
const HISTORY_MAX = 25;

function formatMoney(amount: number, currency: string) {
  const safe = Number.isFinite(amount) ? amount : 0;
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(safe);
}

function todayISO() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.onload = () => resolve(String(reader.result));
    reader.readAsDataURL(file);
  });
}

function safeJsonParse<T>(text: string): T | null {
  try {
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

function downloadJson(filename: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export default function Home() {
  const [currency, setCurrency] = useState<"USD" | "AUD" | "PHP">("PHP");
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const importInputRef = useRef<HTMLInputElement | null>(null);

  const [from, setFrom] = useState<Party>({
    name: "Your Company Pty Ltd",
    email: "hello@company.com",
    phone: "+1 (555) 123-4567",
    address: "123 Example Street\nCity, State ZIP\nCountry",
  });

  const [to, setTo] = useState<Party>({
    name: "Client Name",
    email: "client@email.com",
    phone: "",
    address: "Client Address\nCity, State ZIP\nCountry",
  });

  const [quoteNo, setQuoteNo] = useState("Q-0001");
  const [issueDate, setIssueDate] = useState(todayISO());
  const [validUntil, setValidUntil] = useState("");
  const [notes, setNotes] = useState(
    "Thank you for the opportunity. Please let us know if you have any questions."
  );

  const [taxRate, setTaxRate] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [shippingFee, setShippingFee] = useState<number>(0);
  const [customerHandlesShippingFee, setCustomerHandlesShippingFee] =
    useState<boolean>(false);

  const [items, setItems] = useState<LineItem[]>([
    {
      id: crypto.randomUUID(),
      description: "Service / Item description",
      quantity: 1,
      unitPrice: 100,
      imageDataUrl: null,
    },
  ]);

  const [history, setHistory] = useState<QuoteHistoryEntry[]>([]);
  const [activeHistoryId, setActiveHistoryId] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved">(
    "idle"
  );

  useEffect(() => {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return;
    const parsed = safeJsonParse<QuoteHistoryEntry[]>(raw);
    if (Array.isArray(parsed)) setHistory(parsed);
  }, []);

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, it) =>
        sum + (Number(it.quantity) || 0) * (Number(it.unitPrice) || 0),
      0
    );
    const safeDiscount = Math.max(0, Number(discount) || 0);
    const taxable = Math.max(0, subtotal - safeDiscount);
    const safeTaxRate = Math.max(0, Number(taxRate) || 0) / 100;
    const tax = taxable * safeTaxRate;
    const safeShippingFee = customerHandlesShippingFee
      ? 0
      : Math.max(0, Math.trunc(Number(shippingFee) || 0));
    const total = taxable + tax + safeShippingFee;
    return {
      subtotal,
      discount: safeDiscount,
      taxable,
      tax,
      shippingFee: safeShippingFee,
      total,
    };
  }, [items, discount, taxRate, shippingFee, customerHandlesShippingFee]);

  const validityDays = useMemo(() => {
    // If "Valid until" is set, compute day difference; otherwise default to 30 days.
    if (!validUntil) return 30;
    const issued = new Date(issueDate);
    const until = new Date(validUntil);
    if (Number.isNaN(issued.getTime()) || Number.isNaN(until.getTime()))
      return 30;

    const msPerDay = 24 * 60 * 60 * 1000;
    const diff = Math.ceil((until.getTime() - issued.getTime()) / msPerDay);
    return diff > 0 ? diff : 0;
  }, [issueDate, validUntil]);

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        description: "",
        quantity: 1,
        unitPrice: 0,
        imageDataUrl: null,
      },
    ]);
  };

  const removeItem = (id: string) => {
    setItems((prev) =>
      prev.length <= 1 ? prev : prev.filter((i) => i.id !== id)
    );
  };

  const updateItem = (id: string, patch: Partial<LineItem>) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, ...patch } : it))
    );
  };

  const buildQuoteData = (): QuoteData => ({
    version: 1,
    currency,
    logoDataUrl,
    from,
    to,
    quoteNo,
    issueDate,
    validUntil,
    notes,
    taxRate,
    discount,
    shippingFee,
    customerHandlesShippingFee,
    items,
  });

  const applyQuoteData = (data: QuoteData) => {
    setCurrency(data.currency);
    setLogoDataUrl(data.logoDataUrl ?? null);
    setFrom(data.from);
    setTo(data.to);
    setQuoteNo(data.quoteNo);
    setIssueDate(data.issueDate);
    setValidUntil(data.validUntil);
    setNotes(data.notes);
    setTaxRate(Number(data.taxRate) || 0);
    setDiscount(Number(data.discount) || 0);
    setShippingFee(Math.max(0, Math.trunc(Number(data.shippingFee) || 0)));
    setCustomerHandlesShippingFee(!!data.customerHandlesShippingFee);
    setItems(
      (data.items || []).map((it) => ({
        id: it.id || crypto.randomUUID(),
        description: it.description ?? "",
        quantity: Number(it.quantity) || 0,
        unitPrice: Number(it.unitPrice) || 0,
        imageDataUrl: it.imageDataUrl ?? null,
      }))
    );
  };

  const newQuote = () => {
    setActiveHistoryId(null);
    setLogoDataUrl(null);
    setCurrency("PHP");
    setFrom({
      name: "Your Company Pty Ltd",
      email: "hello@company.com",
      phone: "+1 (555) 123-4567",
      address: "123 Example Street\nCity, State ZIP\nCountry",
    });
    setTo({
      name: "Client Name",
      email: "client@email.com",
      phone: "",
      address: "Client Address\nCity, State ZIP\nCountry",
    });
    setQuoteNo("Q-0001");
    setIssueDate(todayISO());
    setValidUntil("");
    setNotes(
      "Thank you for the opportunity. Please let us know if you have any questions."
    );
    setTaxRate(0);
    setDiscount(0);
    setShippingFee(0);
    setCustomerHandlesShippingFee(false);
    setItems([
      {
        id: crypto.randomUUID(),
        description: "Service / Item description",
        quantity: 1,
        unitPrice: 100,
        imageDataUrl: null,
      },
    ]);
  };

  const persistHistory = (next: QuoteHistoryEntry[]) => {
    setHistory(next);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  };

  const saveToHistory = (mode: "update" | "new" = "update"): string | null => {
    const now = new Date().toISOString();
    const data = buildQuoteData();
    const defaultName = `${data.quoteNo || "Quote"} — ${
      data.to?.name || "Client"
    }`;

    if (mode === "update" && activeHistoryId) {
      const next = history.map((h) =>
        h.id === activeHistoryId
          ? { ...h, updatedAt: now, name: h.name || defaultName, data }
          : h
      );
      persistHistory(next);
      return activeHistoryId;
    }

    const entry: QuoteHistoryEntry = {
      id: crypto.randomUUID(),
      name: defaultName,
      createdAt: now,
      updatedAt: now,
      data,
    };
    const next = [entry, ...history].slice(0, HISTORY_MAX);
    setActiveHistoryId(entry.id);
    persistHistory(next);
    return entry.id;
  };

  const handleSaveClick = () => {
    // localStorage is synchronous; this is UX feedback only
    setSaveState("saving");
    saveToHistory(activeHistoryId ? "update" : "new");
    // allow UI to paint "Saving..."
    setTimeout(() => setSaveState("saved"), 150);
    setTimeout(() => setSaveState("idle"), 1200);
  };

  const loadFromHistory = (id: string) => {
    const entry = history.find((h) => h.id === id);
    if (!entry) return;
    applyQuoteData(entry.data);
    setActiveHistoryId(entry.id);
  };

  const deleteFromHistory = (id: string) => {
    const next = history.filter((h) => h.id !== id);
    if (activeHistoryId === id) setActiveHistoryId(null);
    persistHistory(next);
  };

  const duplicateFromHistory = (id: string) => {
    const src = history.find((h) => h.id === id);
    if (!src) return;
    const now = new Date().toISOString();
    const entry: QuoteHistoryEntry = {
      id: crypto.randomUUID(),
      name: `${src.name} (copy)`,
      createdAt: now,
      updatedAt: now,
      data: src.data,
    };
    const next = [entry, ...history].slice(0, HISTORY_MAX);
    setActiveHistoryId(entry.id);
    persistHistory(next);
    applyQuoteData(entry.data);
  };

  const printFromHistory = (id: string) => {
    const src = history.find((h) => h.id === id);
    if (!src) return;
    applyQuoteData(src.data);
    setActiveHistoryId(src.id);
    const now = new Date().toISOString();
    const next = history.map((h) =>
      h.id === id ? { ...h, lastPrintedAt: now } : h
    );
    persistHistory(next);
    // Let state apply before printing
    setTimeout(() => window.print(), 0);
  };

  const printAndTrack = () => {
    // Ensure it exists in history so it can be reloaded/edited later
    const id = activeHistoryId ?? saveToHistory("new");
    const now = new Date().toISOString();
    if (id) {
      const next = history.map((h) =>
        h.id === id ? { ...h, lastPrintedAt: now } : h
      );
      persistHistory(next);
    }
    window.print();
  };

  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold leading-tight">
              Quotation Maker
            </h1>
            <p className="text-xs text-zinc-500">
              Build a quote and print to PDF.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSaveClick}
              disabled={saveState === "saving"}
              className={`cursor-pointer rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50 ${
                saveState === "saving" ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {saveState === "saving"
                ? "Saving…"
                : saveState === "saved"
                ? "Saved"
                : "Save"}
            </button>
            <button
              type="button"
              onClick={() => setShowHistory((p) => !p)}
              className="cursor-pointer  rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
            >
              History
            </button>
            <button
              type="button"
              onClick={() =>
                downloadJson(
                  `quote-${quoteNo || "export"}.json`,
                  buildQuoteData()
                )
              }
              className="cursor-pointer rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
            >
              Export JSON
            </button>
            <button
              type="button"
              onClick={() => importInputRef.current?.click()}
              className="cursor-pointer rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
            >
              Import JSON
            </button>
            <button
              type="button"
              onClick={printAndTrack}
              className="cursor-pointer rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </header>

      <input
        ref={importInputRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const text = await file.text();
          const parsed = safeJsonParse<QuoteData>(text);
          if (!parsed || parsed.version !== 1) {
            alert("Invalid quote JSON file.");
            e.target.value = "";
            return;
          }
          applyQuoteData(parsed);
          setActiveHistoryId(null);
          e.target.value = "";
        }}
      />

      <main className="mx-auto grid max-w-6xl gap-4 px-4 py-6 lg:grid-cols-2 print:block">
        {/* Form */}
        <section className="qm-no-print rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm print:hidden">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-semibold">Quote details</h2>
            <div className="flex items-center gap-2">
              <label className="text-xs text-zinc-500">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as any)}
                className="rounded-lg border border-zinc-200 bg-white px-2 py-1 text-sm"
              >
                <option value="PHP">PHP</option>
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
              </select>
            </div>
          </div>

          {showHistory && (
            <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-zinc-700">
                    History
                  </h3>
                  <p className="mt-0.5 text-xs text-zinc-500">
                    Saved locally in this browser (localStorage). Large images
                    may reduce how many you can save.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={newQuote}
                    className="shrink-0 whitespace-nowrap rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm hover:bg-zinc-50"
                  >
                    New quote
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowHistory(false)}
                    className="shrink-0 whitespace-nowrap rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm hover:bg-zinc-50"
                  >
                    Close
                  </button>
                </div>
              </div>

              {history.length === 0 ? (
                <div className="mt-3 rounded-lg border border-dashed border-zinc-300 bg-white p-3 text-sm text-zinc-600">
                  No saved quotes yet. Click{" "}
                  <span className="font-medium">Save</span> in the header.
                </div>
              ) : (
                <div className="mt-3 grid gap-2">
                  {history.map((h) => (
                    <div
                      key={h.id}
                      className={`rounded-lg border border-zinc-200 bg-white p-3 ${
                        h.id === activeHistoryId
                          ? "ring-2 ring-zinc-900/10"
                          : ""
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium text-zinc-900">
                            {h.name}
                          </div>
                          <div className="mt-0.5 text-xs text-zinc-500">
                            Saved {new Date(h.updatedAt).toLocaleString()}
                            {h.lastPrintedAt
                              ? ` • Printed ${new Date(
                                  h.lastPrintedAt
                                ).toLocaleString()}`
                              : ""}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => loadFromHistory(h.id)}
                            className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm hover:bg-zinc-50"
                          >
                            Load
                          </button>
                          <button
                            type="button"
                            onClick={() => duplicateFromHistory(h.id)}
                            className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm hover:bg-zinc-50"
                          >
                            Duplicate
                          </button>
                          <button
                            type="button"
                            onClick={() => printFromHistory(h.id)}
                            className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm hover:bg-zinc-50"
                          >
                            Print
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteFromHistory(h.id)}
                            className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-red-600 hover:bg-zinc-50"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <label className="grid gap-1">
              <span className="text-xs font-medium text-zinc-700">Quote #</span>
              <input
                value={quoteNo}
                onChange={(e) => setQuoteNo(e.target.value)}
                className="rounded-lg border border-zinc-200 px-3 py-2 text-sm"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-xs font-medium text-zinc-700">
                Issue date
              </span>
              <input
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                className="rounded-lg border border-zinc-200 px-3 py-2 text-sm"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-xs font-medium text-zinc-700">
                Valid until
              </span>
              <input
                type="date"
                value={validUntil}
                onChange={(e) => setValidUntil(e.target.value)}
                className="rounded-lg border border-zinc-200 px-3 py-2 text-sm"
              />
            </label>
          </div>

          <div className="mt-4 rounded-xl border border-zinc-200 p-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xs font-semibold text-zinc-700">Branding</h3>
              {logoDataUrl && (
                <button
                  type="button"
                  onClick={() => setLogoDataUrl(null)}
                  className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm hover:bg-zinc-50"
                >
                  Remove logo
                </button>
              )}
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <div className="h-12 w-44 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 p-2">
                {logoDataUrl ? (
                  <img
                    src={logoDataUrl}
                    alt="Company logo"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-zinc-400">
                    No logo
                  </div>
                )}
              </div>

              <label className="inline-flex cursor-pointer items-center rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm hover:bg-zinc-50">
                {logoDataUrl ? "Replace logo" : "Upload logo"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const dataUrl = await readFileAsDataUrl(file);
                    setLogoDataUrl(dataUrl);
                    e.target.value = "";
                  }}
                />
              </label>
              <p className="text-xs text-zinc-500">
                Tip: use a transparent PNG or a wide logo.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-3">
              <h3 className="text-xs font-semibold text-zinc-700">From</h3>
              <div className="mt-2 grid gap-2">
                <input
                  value={from.name}
                  onChange={(e) =>
                    setFrom((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Company name"
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                />
                <div className="grid gap-2 sm:grid-cols-2">
                  <input
                    value={from.email}
                    onChange={(e) =>
                      setFrom((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="Email"
                    className="rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  />
                  <input
                    value={from.phone}
                    onChange={(e) =>
                      setFrom((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="Phone"
                    className="rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  />
                </div>
                <textarea
                  value={from.address}
                  onChange={(e) =>
                    setFrom((p) => ({ ...p, address: e.target.value }))
                  }
                  placeholder="Address"
                  rows={3}
                  className="rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 p-3">
              <h3 className="text-xs font-semibold text-zinc-700">To</h3>
              <div className="mt-2 grid gap-2">
                <input
                  value={to.name}
                  onChange={(e) =>
                    setTo((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Client name"
                  className="rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                />
                <div className="grid gap-2 sm:grid-cols-2">
                  <input
                    value={to.email}
                    onChange={(e) =>
                      setTo((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="Email"
                    className="rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  />
                  <input
                    value={to.phone}
                    onChange={(e) =>
                      setTo((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="Phone"
                    className="rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  />
                </div>
                <textarea
                  value={to.address}
                  onChange={(e) =>
                    setTo((p) => ({ ...p, address: e.target.value }))
                  }
                  placeholder="Address"
                  rows={3}
                  className="rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">Line items</h2>
              <button
                type="button"
                onClick={addItem}
                className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm hover:bg-zinc-50"
              >
                Add item
              </button>
            </div>

            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[540px] border-separate border-spacing-0">
                <thead>
                  <tr className="text-left text-xs text-zinc-500">
                    <th className="pb-2 pr-2">Description</th>
                    <th className="pb-2 pr-2 w-[90px]">Qty</th>
                    <th className="pb-2 pr-2 w-[140px]">Unit</th>
                    <th className="pb-2 w-[120px] text-right">Total</th>
                    <th className="pb-2 w-[44px]"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((it) => {
                    const lineTotal = (it.quantity || 0) * (it.unitPrice || 0);
                    return (
                      <tr key={it.id} className="align-top">
                        <td className="pr-2 pb-2">
                          <div className="flex gap-3">
                            {it.imageDataUrl ? (
                              <div className="h-[44px] w-[44px] shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50">
                                <img
                                  src={it.imageDataUrl}
                                  alt=""
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            ) : null}

                            <div className="min-w-0 flex-1">
                              <input
                                value={it.description}
                                onChange={(e) =>
                                  updateItem(it.id, {
                                    description: e.target.value,
                                  })
                                }
                                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                              />
                              <div className="mt-1 flex items-center gap-3">
                                <label className="inline-flex cursor-pointer items-center text-xs text-zinc-600 hover:text-zinc-900">
                                  {it.imageDataUrl
                                    ? "Replace photo"
                                    : "Add photo (optional)"}
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={async (e) => {
                                      const file = e.target.files?.[0];
                                      if (!file) return;
                                      const dataUrl = await readFileAsDataUrl(
                                        file
                                      );
                                      updateItem(it.id, {
                                        imageDataUrl: dataUrl,
                                      });
                                      e.target.value = "";
                                    }}
                                  />
                                </label>
                                {it.imageDataUrl && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      updateItem(it.id, { imageDataUrl: null })
                                    }
                                    className="text-xs text-zinc-500 hover:text-zinc-900"
                                  >
                                    Remove photo
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="pr-2 pb-2">
                          <input
                            type="number"
                            min={0}
                            value={it.quantity}
                            onChange={(e) =>
                              updateItem(it.id, {
                                quantity: Math.max(
                                  0,
                                  Number(e.target.value) || 0
                                ),
                              })
                            }
                            className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                          />
                        </td>
                        <td className="pr-2 pb-2">
                          <input
                            type="number"
                            min={0}
                            step="0.01"
                            value={it.unitPrice}
                            onChange={(e) =>
                              updateItem(it.id, {
                                unitPrice: Math.max(
                                  0,
                                  Number(e.target.value) || 0
                                ),
                              })
                            }
                            className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                          />
                        </td>
                        <td className="pb-2 text-right text-sm text-zinc-700">
                          <div className="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2">
                            {formatMoney(lineTotal, currency)}
                          </div>
                        </td>
                        <td className="pb-2 pl-2">
                          <button
                            type="button"
                            onClick={() => removeItem(it.id)}
                            className="rounded-lg border border-zinc-200 bg-white px-2 py-2 text-sm hover:bg-zinc-50"
                            title="Remove"
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="grid gap-3">
                <label className="grid gap-1">
                  <span className="text-xs font-medium text-zinc-700">
                    Discount
                  </span>
                  <input
                    type="number"
                    min={0}
                    step="0.01"
                    value={discount}
                    onChange={(e) =>
                      setDiscount(Math.max(0, Number(e.target.value) || 0))
                    }
                    className="rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  />
                </label>

                <div className="grid gap-1">
                  <span className="text-xs font-medium text-zinc-700">
                    Shipping fee
                  </span>
                  <input
                    type="number"
                    min={0}
                    step={1}
                    inputMode="numeric"
                    value={shippingFee}
                    disabled={customerHandlesShippingFee}
                    onChange={(e) =>
                      setShippingFee(
                        Math.max(0, Math.trunc(Number(e.target.value) || 0))
                      )
                    }
                    className="rounded-lg border border-zinc-200 px-3 py-2 text-sm disabled:bg-zinc-50 disabled:text-zinc-500"
                  />
                  <label className="mt-1 inline-flex items-start gap-2 text-xs text-zinc-700">
                    <input
                      type="checkbox"
                      className="mt-0.5"
                      checked={customerHandlesShippingFee}
                      onChange={(e) =>
                        setCustomerHandlesShippingFee(e.target.checked)
                      }
                    />
                    <span>Customer will handle shipping fee</span>
                  </label>
                </div>

                <label className="grid gap-1">
                  <span className="text-xs font-medium text-zinc-700">
                    Tax rate (%)
                  </span>
                  <input
                    type="number"
                    min={0}
                    step="0.01"
                    value={taxRate}
                    onChange={(e) =>
                      setTaxRate(Math.max(0, Number(e.target.value) || 0))
                    }
                    className="rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  />
                </label>
              </div>

              <div className="rounded-xl border border-zinc-200 p-3 w-full">
                <div className="flex items-center justify-between text-xs text-zinc-600">
                  <span>Subtotal</span>
                  <span>{formatMoney(totals.subtotal, currency)}</span>
                </div>
                {totals.discount > 0 && (
                  <div className="mt-1 flex items-center justify-between text-xs text-zinc-600">
                    <span>Discount</span>
                    <span>- {formatMoney(totals.discount, currency)}</span>
                  </div>
                )}
                {(totals.shippingFee > 0 || customerHandlesShippingFee) && (
                  <div className="mt-1 flex items-center justify-between text-xs text-zinc-600">
                    <span>Shipping</span>
                    <span>
                      {customerHandlesShippingFee
                        ? "N/A"
                        : formatMoney(totals.shippingFee, currency)}
                    </span>
                  </div>
                )}
                {totals.tax > 0 && (
                  <div className="mt-1 flex items-center justify-between text-xs text-zinc-600">
                    <span>Tax</span>
                    <span>{formatMoney(totals.tax, currency)}</span>
                  </div>
                )}
                <div className="mt-2 flex items-center justify-between text-sm font-semibold">
                  <span>Total</span>
                  <span>{formatMoney(totals.total, currency)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-semibold">Notes</h2>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
            />
          </div>
        </section>

        {/* Preview */}
        <section className="rounded-2xl border border-zinc-200 bg-white p-0 shadow-sm print:border-0 print:shadow-none">
          <article className="quotation-preview p-6 print:p-0">
            <div className="flex items-start justify-between gap-6">
              <div>
                {logoDataUrl && (
                  <img
                    src={logoDataUrl}
                    alt="Company logo"
                    className="mb-3 h-12 w-auto max-w-[220px] object-contain"
                  />
                )}
                <h2 className="text-xl font-semibold">
                  {from.name || "Quotation"}
                </h2>
                <div className="mt-2 whitespace-pre-line text-sm text-zinc-600">
                  {from.address}
                </div>
                <div className="mt-2 text-sm text-zinc-600">
                  {from.email && <div>{from.email}</div>}
                  {from.phone && <div>{from.phone}</div>}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Quotation
                </div>
                <div className="mt-1 text-sm">
                  <span className="text-zinc-500">Quote # </span>
                  <span className="font-semibold">{quoteNo}</span>
                </div>
                <div className="mt-1 text-sm text-zinc-600">
                  <div>
                    <span className="text-zinc-500">Issue: </span>
                    {issueDate || "—"}
                  </div>
                  <div>
                    <span className="text-zinc-500">Valid until: </span>
                    {validUntil || "—"}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Bill To
                </div>
                <div className="mt-2 text-sm font-semibold">{to.name}</div>
                <div className="mt-1 whitespace-pre-line text-sm text-zinc-600">
                  {to.address}
                </div>
                <div className="mt-2 text-sm text-zinc-600">
                  {to.email && <div>{to.email}</div>}
                  {to.phone && <div>{to.phone}</div>}
                </div>
              </div>
              <div className="rounded-xl border border-zinc-200 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Summary
                </div>
                <div className="mt-2 flex items-center justify-between text-sm text-zinc-700">
                  <span>Subtotal</span>
                  <span>{formatMoney(totals.subtotal, currency)}</span>
                </div>
                {totals.discount > 0 && (
                  <div className="mt-1 flex items-center justify-between text-sm text-zinc-700">
                    <span>Discount</span>
                    <span>- {formatMoney(totals.discount, currency)}</span>
                  </div>
                )}
                {(totals.shippingFee > 0 || customerHandlesShippingFee) && (
                  <div className="mt-1 flex items-center justify-between text-sm text-zinc-700">
                    <span>Shipping</span>
                    <span>
                      {customerHandlesShippingFee
                        ? "N/A"
                        : formatMoney(totals.shippingFee, currency)}
                    </span>
                  </div>
                )}
                {totals.tax > 0 && (
                  <div className="mt-1 flex items-center justify-between text-sm text-zinc-700">
                    <span>Tax</span>
                    <span>{formatMoney(totals.tax, currency)}</span>
                  </div>
                )}
                <div className="mt-3 flex items-center justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>{formatMoney(totals.total, currency)}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-zinc-200">
              <table className="w-full">
                <thead className="bg-zinc-50 text-left text-xs text-zinc-500">
                  <tr>
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3 w-[90px] text-right">Qty</th>
                    <th className="px-4 py-3 w-[140px] text-right">Unit</th>
                    <th className="px-4 py-3 w-[140px] text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {items.map((it) => (
                    <tr key={it.id} className="border-t border-zinc-200">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {it.imageDataUrl ? (
                            <img
                              src={it.imageDataUrl}
                              alt=""
                              className="h-10 w-10 shrink-0 rounded-lg border border-zinc-200 object-cover"
                            />
                          ) : null}
                          <div className="min-w-0">{it.description || "—"}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">{it.quantity}</td>
                      <td className="px-4 py-3 text-right">
                        {formatMoney(it.unitPrice, currency)}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {formatMoney(it.quantity * it.unitPrice, currency)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {notes?.trim() && (
              <div className="mt-8 rounded-xl border border-zinc-200 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Notes
                </div>
                <div className="mt-2 whitespace-pre-line text-sm text-zinc-700">
                  {notes}
                </div>
              </div>
            )}

            <div className="mt-10 text-xs text-zinc-500">
              <i>
                This quotation is valid for {validityDays}{" "}
                {validityDays === 1 ? "day" : "days"} from the date of issue and
                is subject to change thereafter without prior notice.
              </i>
            </div>
          </article>
        </section>
      </main>
      <footer className="max-w-6xl text-xs text-zinc-500 py-6 text-center mx-auto print:hidden">
        Made with ❤️ &copy; 2026 JPC.
      </footer>
    </div>
  );
}
