"use client";

import { useEffect, useMemo, useRef, useState, type SVGProps } from "react";

function IconSpinner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
    </svg>
  );
}

function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconSave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
      <path d="M17 21v-8H7v8" />
      <path d="M7 3v5h8" />
    </svg>
  );
}

function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function IconUpload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M17 8 12 3 7 8" />
      <path d="M12 3v12" />
    </svg>
  );
}

function IconDownload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

function IconPrinter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 9V2h12v7" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 14h12v8H6z" />
    </svg>
  );
}

function IconPlus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function IconX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function IconArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function IconPencil(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}

function IconCopy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function IconTrash(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 6h18" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  );
}

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

  const computeDefaultHistoryName = (data: QuoteData) =>
    `${data.quoteNo || "Quote"} — ${data.to?.name || "Client"}`.trim();

  const persistHistory = (next: QuoteHistoryEntry[]) => {
    setHistory(next);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  };

  const saveToHistory = (mode: "update" | "new" = "update"): string | null => {
    const now = new Date().toISOString();
    const data = buildQuoteData();
    const defaultName = computeDefaultHistoryName(data);

    if (mode === "update" && activeHistoryId) {
      const next = history.map((h) =>
        h.id === activeHistoryId
          ? (() => {
              const prevDefault = computeDefaultHistoryName(h.data);
              const nextName =
                !h.name || h.name === prevDefault ? defaultName : h.name;
              return { ...h, updatedAt: now, name: nextName, data };
            })()
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

  const renameHistoryEntry = (id: string) => {
    const entry = history.find((h) => h.id === id);
    if (!entry) return;

    const suggested = entry.name || computeDefaultHistoryName(entry.data);
    const next = window.prompt("Rename quote", suggested);
    if (next == null) return;

    const trimmed = next.trim();
    const finalName = trimmed || computeDefaultHistoryName(entry.data);
    const now = new Date().toISOString();

    persistHistory(
      history.map((h) =>
        h.id === id ? { ...h, name: finalName, updatedAt: now } : h
      )
    );
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

  const btnBase =
    "inline-flex items-center justify-center gap-1.5 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60";
  const btnSecondary = `${btnBase} border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 active:bg-zinc-100 focus-visible:ring-blue-500`;
  const btnPrimary = `${btnBase} bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-500`;
  const btnSuccess = `${btnBase} bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 focus-visible:ring-emerald-500`;
  const btnDanger = `${btnBase} border border-red-200 bg-white text-red-700 hover:bg-red-50 active:bg-red-100 focus-visible:ring-red-500`;
  const btnTextDanger =
    "rounded text-xs text-red-600 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  const btnSizeHeader = "px-2.5 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm";
  const btnSizeSm = "px-3 py-1.5 text-sm";

  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-zinc-50 text-sm text-zinc-900">
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <h1 className="mb-2 inline-block w-20 rounded-[5px] bg-black p-[5px] text-base font-semibold leading-tight text-white">
              Qtnator
            </h1>
            <p className="text-xs text-zinc-500">
              Quotation Maker - Build a quote and print to PDF.
            </p>
          </div>
          <div className="-mx-4 flex w-full items-center justify-start gap-2 overflow-x-auto overscroll-x-contain px-4 pb-1 sm:mx-0 sm:w-auto sm:flex-wrap sm:justify-end sm:overflow-visible sm:px-0 sm:pb-0">
            <button
              type="button"
              onClick={handleSaveClick}
              disabled={saveState === "saving"}
              className={`${
                saveState === "saved" ? btnSuccess : btnSecondary
              } ${btnSizeHeader} shrink-0`}
            >
              {saveState === "saving" ? (
                <IconSpinner className="h-4 w-4 animate-spin" />
              ) : saveState === "saved" ? (
                <IconCheck className="h-4 w-4" />
              ) : (
                <IconSave className="h-4 w-4" />
              )}
              <span>
                {saveState === "saving"
                  ? "Saving…"
                  : saveState === "saved"
                  ? "Saved"
                  : "Save"}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setShowHistory((p) => !p)}
              className={`${btnSecondary} ${btnSizeHeader} shrink-0`}
            >
              <IconClock className="h-4 w-4" />
              <span>History</span>
            </button>
            <button
              type="button"
              onClick={() =>
                downloadJson(
                  `quote-${quoteNo || "export"}.json`,
                  buildQuoteData()
                )
              }
              className={`${btnSecondary} ${btnSizeHeader} shrink-0`}
            >
              <IconDownload className="h-4 w-4" />
              <span>Export JSON</span>
            </button>
            <button
              type="button"
              onClick={() => importInputRef.current?.click()}
              className={`${btnSecondary} ${btnSizeHeader} shrink-0`}
            >
              <IconUpload className="h-4 w-4" />
              <span>Import JSON</span>
            </button>
            <button
              type="button"
              onClick={printAndTrack}
              className={`${btnPrimary} ${btnSizeHeader} shrink-0`}
            >
              <IconPrinter className="h-4 w-4" />
              <span>Print / Save PDF</span>
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
                    className={`shrink-0 whitespace-nowrap ${btnSecondary} ${btnSizeSm}`}
                  >
                    <IconPlus className="h-4 w-4" />
                    <span>New quote</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowHistory(false)}
                    className={`shrink-0 whitespace-nowrap ${btnDanger} ${btnSizeSm}`}
                  >
                    <IconX className="h-4 w-4" />
                    <span>Close</span>
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
                            className={`${btnSecondary} ${btnSizeSm}`}
                          >
                            <IconArrowRight className="h-4 w-4" />
                            <span>Load</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => renameHistoryEntry(h.id)}
                            className={`${btnSecondary} ${btnSizeSm}`}
                          >
                            <IconPencil className="h-4 w-4" />
                            <span>Rename</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => duplicateFromHistory(h.id)}
                            className={`${btnSecondary} ${btnSizeSm}`}
                          >
                            <IconCopy className="h-4 w-4" />
                            <span>Duplicate</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => printFromHistory(h.id)}
                            className={`${btnSecondary} ${btnSizeSm}`}
                          >
                            <IconPrinter className="h-4 w-4" />
                            <span>Print</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteFromHistory(h.id)}
                            className={`${btnDanger} ${btnSizeSm}`}
                          >
                            <IconTrash className="h-4 w-4" />
                            <span>Delete</span>
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
                  className={`${btnDanger} ${btnSizeSm}`}
                >
                  <IconTrash className="h-4 w-4" />
                  <span>Remove logo</span>
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
                className={`${btnSecondary} ${btnSizeSm}`}
              >
                <IconPlus className="h-4 w-4" />
                <span>Add item</span>
              </button>
            </div>

            {/* Mobile: cards (no horizontal scrolling) */}
            <div className="mt-3 grid gap-3 sm:hidden print:hidden">
              {items.map((it) => {
                const lineTotal = (it.quantity || 0) * (it.unitPrice || 0);
                return (
                  <div
                    key={it.id}
                    className="rounded-xl border border-zinc-200 bg-white p-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex gap-3">
                          {it.imageDataUrl ? (
                            <img
                              src={it.imageDataUrl}
                              alt=""
                              className="h-14 w-14 shrink-0 rounded-lg border border-zinc-200 object-cover"
                            />
                          ) : null}

                          <div className="min-w-0 flex-1">
                            <textarea
                              value={it.description}
                              onChange={(e) =>
                                updateItem(it.id, {
                                  description: e.target.value,
                                })
                              }
                              placeholder="Description"
                              rows={1}
                              className="h-10 w-full  overflow-y-auto rounded-lg border border-zinc-200 px-3 py-2 text-sm leading-6"
                            />
                            <div className="mt-2 flex flex-wrap items-center gap-3">
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
                                  className={btnTextDanger}
                                >
                                  Remove photo
                                </button>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-3">
                          <label className="grid gap-1">
                            <span className="text-xs font-medium text-zinc-700">
                              Qty
                            </span>
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
                          </label>
                          <label className="grid gap-1">
                            <span className="text-xs font-medium text-zinc-700">
                              Unit price
                            </span>
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
                          </label>
                        </div>

                        <div className="mt-3 flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
                          <span className="text-xs text-zinc-500">Total</span>
                          <span className="font-medium">
                            {formatMoney(lineTotal, currency)}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(it.id)}
                        className={`${btnDanger} px-2 py-2 text-sm leading-none`}
                        title="Remove"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop/print: table */}
            <div className="mt-3 hidden overflow-x-auto sm:block print:block">
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
                              <textarea
                                value={it.description}
                                onChange={(e) =>
                                  updateItem(it.id, {
                                    description: e.target.value,
                                  })
                                }
                                rows={1}
                                className="h-10 w-full  overflow-y-auto rounded-lg border border-zinc-200 px-3 py-2 text-sm leading-6"
                              />
                              <div className="mt-1 flex w-full flex-wrap items-center gap-3 sm:w-[200px]">
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
                            className={`${btnDanger} px-2 py-2 text-sm leading-none`}
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
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                {logoDataUrl && (
                  <img
                    src={logoDataUrl}
                    alt="Company logo"
                    className="mb-3 h-12 w-auto max-w-[220px] object-contain"
                  />
                )}
                <h2 className="text-lg font-semibold">
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
              <div className="text-left sm:text-right">
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
                <div className="mt-3 flex items-center justify-between text-sm font-semibold">
                  <span>Total</span>
                  <span>{formatMoney(totals.total, currency)}</span>
                </div>
              </div>
            </div>

            {/* Mobile: cards */}
            <div className="mt-8 grid gap-3 sm:hidden print:hidden">
              {items.map((it) => {
                const amount = (it.quantity || 0) * (it.unitPrice || 0);
                return (
                  <div
                    key={it.id}
                    className="rounded-xl border border-zinc-200 bg-white p-4"
                  >
                    <div className="flex gap-3">
                      {it.imageDataUrl ? (
                        <img
                          src={it.imageDataUrl}
                          alt=""
                          className="h-12 w-12 shrink-0 rounded-lg border border-zinc-200 object-cover"
                        />
                      ) : null}
                      <div className="min-w-0 flex-1">
                        <div className="whitespace-pre-wrap break-words text-sm font-medium text-zinc-900">
                          {it.description || "—"}
                        </div>
                        <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-zinc-600">
                          <div>
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                              Qty
                            </div>
                            <div className="mt-0.5 text-zinc-900">
                              {it.quantity}
                            </div>
                          </div>
                          <div>
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                              Unit
                            </div>
                            <div className="mt-0.5 text-zinc-900">
                              {formatMoney(it.unitPrice, currency)}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                              Amount
                            </div>
                            <div className="mt-0.5 font-semibold text-zinc-900">
                              {formatMoney(amount, currency)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop/print: table */}
            <div className="mt-8 hidden overflow-hidden rounded-xl border border-zinc-200 sm:block print:block">
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
                      <td className="px-4 py-3 w-full">
                        <div className="flex min-w-0 items-center gap-3">
                          {it.imageDataUrl ? (
                            <img
                              src={it.imageDataUrl}
                              alt=""
                              className="h-10 w-10 shrink-0 rounded-lg border border-zinc-200 object-cover"
                            />
                          ) : null}
                          <div className="min-w-0 whitespace-pre-wrap break-words text-xs">
                            {it.description || "—"}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-right">
                        {it.quantity}
                      </td>
                      <td className="px-4 py-3 text-xs text-right">
                        {formatMoney(it.unitPrice, currency)}
                      </td>
                      <td className="px-4 py-3 text-xs text-right">
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
                <div className="mt-2 whitespace-pre-line text-xs text-zinc-700">
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
