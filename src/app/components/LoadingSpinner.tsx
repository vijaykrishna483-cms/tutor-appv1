export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: "#F8FAFC" }}>
      <div className="text-center">
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse"
          style={{ background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)" }}
        >
          <span className="text-2xl font-bold text-white">T</span>
        </div>
        <div className="text-lg font-semibold" style={{ color: "#0F172A" }}>
          Loading...
        </div>
      </div>
    </div>
  );
}
