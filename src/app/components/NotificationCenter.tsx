import { useState } from "react";
import { Bell, X, Calendar, Video, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";

const BG_IMAGE = "https://i.pinimg.com/736x/31/64/ec/3164ec5cae289fa56665b2f358ae996b.jpg";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "booking" | "session" | "system";
  link?: string;
  isRead: boolean;
}

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "New Slot Booked! 🚀",
      message: "Your session with Dr. Priya Sharma is confirmed. Join the meeting using the link below.",
      time: "Just now",
      type: "session",
      link: "/student/session/1",
      isRead: false,
    },
    {
      id: "2",
      title: "Profile Verified",
      message: "Your academic credentials have been successfully verified by our faculty board.",
      time: "2 hours ago",
      type: "system",
      isRead: true,
    }
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center relative hover:scale-105 active:scale-95 transition-all shadow-inner group"
      >
        <Bell className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
        {unreadCount > 0 && (
          <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-destructive border-2 border-white animate-bounce" />
        )}
      </button>

      {/* Luxury Notification Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex justify-end animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="relative w-full max-w-[400px] bg-white h-full shadow-[-20px_0_80px_rgba(0,0,0,0.1)] flex flex-col animate-in slide-in-from-right duration-500">
            {/* Drawer Header */}
            <div className="px-8 pt-16 pb-8 border-b border-border/40 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url(${BG_IMAGE})`, backgroundSize: 'cover' }} />
                
                <div className="relative z-10 flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-extrabold text-foreground font-heading italic tracking-tighter">Insights Hub</h2>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary active:rotate-90 transition-transform"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="relative z-10 flex gap-3">
                    <div className="px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                        <span className="text-[9px] font-black text-primary uppercase tracking-widest">{unreadCount} New Alerts</span>
                    </div>
                    <button 
                        onClick={() => setNotifications(notifications.map(n => ({...n, isRead: true})))}
                        className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest hover:text-primary transition-colors"
                    >
                        Mark all as read
                    </button>
                </div>
            </div>

            {/* Notification List */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-4 bg-[#FBFCFF]">
                {notifications.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full opacity-20">
                        <Sparkles className="w-12 h-12 mb-4" />
                        <p className="text-[10px] font-black uppercase tracking-[0.3em]">All Caught Up</p>
                    </div>
                ) : (
                    notifications.map((notif) => (
                        <div 
                            key={notif.id}
                            className={`p-6 rounded-[2rem] border transition-all relative overflow-hidden group hover:-translate-y-1 ${!notif.isRead ? "bg-white border-primary/20 shadow-xl shadow-primary/5" : "bg-white/50 border-border/40 opacity-60"}`}
                        >
                            {!notif.isRead && <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />}
                            
                            <div className="flex justify-between items-start mb-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${notif.type === 'session' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'}`}>
                                    {notif.type === 'session' ? <Video className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                                </div>
                                <span className="text-[9px] font-bold text-muted-foreground/40 uppercase">{notif.time}</span>
                            </div>

                            <h3 className="text-base font-extrabold text-foreground font-heading mb-1">{notif.title}</h3>
                            <p className="text-sm font-medium text-muted-foreground leading-relaxed mb-6 italic">"{notif.message}"</p>

                            {notif.link && (
                                <button 
                                    onClick={() => {
                                        setIsOpen(false);
                                        navigate(notif.link!);
                                    }}
                                    className="w-full py-4 bg-primary text-white rounded-xl text-[9px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                                >
                                    Join Meeting Now
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* Drawer Footer */}
            <div className="p-8 border-t border-border/40 bg-white">
                <p className="text-[8px] font-black text-muted-foreground/30 uppercase tracking-[0.4em] text-center italic leading-relaxed">
                    Personalized academic intelligence <br/> delivered by TutorHub Artificial Engine
                </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
