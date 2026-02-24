import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { MobileContainer } from "../../components/MobileContainer";
import { ChevronLeft, Send, Calendar, ShieldCheck, MoreVertical } from "lucide-react";

const messages = [
  { id: 1, text: "Hi! I need help with Quadratic Equations", sender: "user", time: "2:30 PM" },
  { id: 2, text: "Hello! I'd be happy to help. What specific topic are you struggling with?", sender: "tutor", time: "2:31 PM" },
  { id: 3, text: "I don't understand how to solve using the discriminant method", sender: "user", time: "2:32 PM" },
  { id: 4, text: "No problem! We can cover that in detail. Would you like to schedule a session?", sender: "tutor", time: "2:33 PM" },
];

const BG_IMAGE = "https://i.pinimg.com/736x/31/64/ec/3164ec5cae289fa56665b2f358ae996b.jpg";

export function Chat() {
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  return (
    <MobileContainer>
      <div className="min-h-screen bg-[#FBFCFF] flex flex-col relative overflow-hidden">
        {/* Luxury Chat Header */}
        <div className="px-6 pt-12 pb-6 flex items-center gap-4 bg-white border-b border-border/40 shadow-sm relative overflow-hidden">
          {/* Subtle Background Texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url(${BG_IMAGE})`, backgroundSize: 'cover' }} />
          <div className="relative z-10 flex items-center gap-4 w-full">
            <button 
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary active:scale-90 transition-transform shadow-inner"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary font-extrabold font-heading text-lg shadow-inner border border-primary/5">
                    PS
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-lg bg-success border-2 border-white flex items-center justify-center">
                    <ShieldCheck className="w-2.5 h-2.5 text-white" />
                </div>
            </div>
            
            <div className="flex-1">
                <h2 className="text-base font-extrabold text-foreground font-heading italic tracking-tight leading-none mb-1">
                Dr. Priya Sharma
                </h2>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-success/10 rounded-md w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                <span className="text-[8px] font-black uppercase tracking-widest text-success">Verified Active</span>
                </div>
            </div>

            <button className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground/40">
                <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Message Matrix */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 hide-scrollbar relative z-10">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[80%] ${message.sender === "user" ? "items-end" : "items-start"} flex flex-col`}>
                <div
                  className={`px-5 py-4 shadow-2xl shadow-black/[0.02] border border-border/20 ${message.sender === "user" 
                    ? "bg-primary text-white rounded-[1.8rem] rounded-tr-none shadow-primary/20" 
                    : "bg-white text-foreground rounded-[1.8rem] rounded-tl-none border-border/40"}`}
                >
                  <p className="text-sm font-semibold leading-relaxed tracking-tight">{message.text}</p>
                </div>
                <div className={`flex items-center gap-2 mt-2 px-2 ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                  <span className="text-[9px] font-bold text-muted-foreground uppercase opacity-40">Sent at {message.time}</span>
                  {message.sender === "user" && <div className="w-2.2 h-2.2 flex items-center justify-center bg-primary/20 text-primary text-[6px] font-black rounded-full">✓</div>}
                </div>
              </div>
            </div>
          ))}

          {/* Luxury Action Offer */}
          <div className="py-6">
            <div className="p-8 rounded-[2.5rem] bg-white border border-border/40 shadow-2xl shadow-black/[0.03] space-y-6 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-1000" style={{ backgroundImage: `url(${BG_IMAGE})`, backgroundSize: 'cover' }} />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-[2s]" />
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary shadow-inner">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-foreground font-heading tracking-tight italic">Initiate Session?</h3>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-1">
                    Book an elite masterclass now
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate(`/student/booking/${params.id}`)}
                className="w-full py-5 bg-primary text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 relative z-10"
              >
                Schedule Now
                <ChevronRight className="w-4 h-4 animate-pulse rotate-90" />
              </button>
            </div>
          </div>
        </div>

        {/* Premium Input Console */}
        <div className="p-6 pb-12 bg-white border-t border-border/40 relative z-10">
          <div className="flex gap-4 items-center bg-secondary/80 p-2 rounded-[2rem] border border-border/20 shadow-inner">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Inquire about a topic..."
              className="flex-1 px-5 py-3 bg-transparent outline-none text-sm font-bold text-foreground placeholder:text-muted-foreground/30"
            />
            <button
              className="w-14 h-14 rounded-[1.4rem] bg-primary flex items-center justify-center shadow-2xl shadow-primary/30 active:scale-90 transition-transform"
            >
              <Send className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </MobileContainer>
  );
}
