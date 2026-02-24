import { Home, Search, MessageCircle, Calendar, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

interface BottomNavProps {
  role?: "student" | "teacher";
}

export function BottomNav({ role = "student" }: BottomNavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const studentItems = [
    { icon: Home, label: "Home", path: "/student/dashboard" },
    { icon: Search, label: "Explore", path: "/student/select-subject" },
    { icon: Calendar, label: "Sessions", path: "/student/booking/1" },
    { icon: MessageCircle, label: "Chat", path: "/student/chat/1" },
    { icon: User, label: "Profile", path: "/student/profile" },
  ];

  const teacherItems = [
    { icon: Home, label: "Hub", path: "/teacher/dashboard" },
    { icon: Calendar, label: "Schedule", path: "/teacher/dashboard" }, // Placeholder
    { icon: MessageCircle, label: "DMs", path: "/teacher/dashboard" }, // Placeholder
    { icon: User, label: "Identity", path: "/teacher/profile" },
  ];

  const items = role === "student" ? studentItems : teacherItems;

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto z-[100]">
      <div className="mx-6 mb-6 px-4 py-4 bg-white/95 backdrop-blur-3xl border border-border/40 rounded-[2.2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex justify-around items-center">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="group relative flex flex-col items-center gap-1.5"
            >
              <div 
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${isActive ? "bg-primary shadow-lg shadow-primary/30 rotate-[8deg]" : "hover:bg-secondary"}`}
              >
                <Icon 
                  className={`w-5 h-5 transition-colors ${isActive ? "text-white" : "text-muted-foreground group-hover:text-primary"}`} 
                  strokeWidth={isActive ? 3 : 2}
                />
              </div>
              <span 
                className={`text-[8px] font-black uppercase tracking-widest transition-colors ${isActive ? "text-primary opacity-100" : "text-muted-foreground/60 opacity-0 group-hover:opacity-100"}`}
              >
                {item.label}
              </span>
              {isActive && (
                <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
