import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-6"></div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Quotation Maker</h1>

      {/* Message */}
      <p className="text-gray-600 mb-4">
        We are deploying soon. Please wait...
      </p>

      {/* Optional Subtext */}
      <p className="text-gray-400 text-sm mb-8">Thank you for your patience.</p>

      {/* Powered by */}
      <footer className="text-gray-500 text-xs">
        Powered by <span className="font-semibold">JPC</span>
      </footer>
    </div>
  );
}
