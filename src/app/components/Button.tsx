import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success";
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = "primary", 
  onClick, 
  className = "",
  fullWidth = false 
}: ButtonProps) {
  const baseStyles = "py-4 rounded-2xl font-semibold transition-all";
  
  const variants = {
    primary: "text-white",
    secondary: "border-2",
    success: "text-white",
  };

  const backgrounds = {
    primary: { background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 50%, #7C3AED 100%)" },
    secondary: { borderColor: "#4F46E5", color: "#4F46E5", backgroundColor: "white" },
    success: { background: "linear-gradient(135deg, #10B981 0%, #059669 100%)" },
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      style={backgrounds[variant]}
    >
      {children}
    </button>
  );
}
