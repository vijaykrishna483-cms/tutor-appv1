import { useState } from "react";
import { useNavigate } from "react-router";
import { MobileContainer } from "../../components/MobileContainer";
import { Search, MapPin, Star, ChevronUp, Bell, Map as MapIcon, Layers } from "lucide-react";

const tutors = [
  { id: 1, name: "Dr. Priya Sharma", rating: 4.9, subject: "Physics", price: 800, type: "online", lat: 28.6, lng: 77.2, avatar: "PS" },
  { id: 2, name: "Rahul Verma", rating: 4.8, subject: "Mathematics", price: 750, type: "offline", lat: 28.62, lng: 77.22, avatar: "RV" },
  { id: 3, name: "Anita Desai", rating: 4.7, subject: "Chemistry", price: 700, type: "online", lat: 28.58, lng: 77.18, avatar: "AD" },
];

export function MapView() {
  const [mode, setMode] = useState<"online" | "offline">("online");
  const [selectedTutor, setSelectedTutor] = useState(tutors[0]);
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="min-h-screen relative bg-[#F8FAFC]">
        {/* Map Background - Styled as a Premium Mockup */}
        <div className="absolute inset-0 bg-[#E0E7FF]/20">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0066FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="relative h-full w-full">
            {tutors
              .filter(t => mode === "online" ? t.type === "online" : t.type === "offline")
              .map((tutor, index) => (
                <button
                  key={tutor.id}
                  onClick={() => setSelectedTutor(tutor)}
                  className={`absolute w-14 h-14 rounded-[1.2rem] flex items-center justify-center shadow-2xl transition-all duration-500 scale-100 hover:scale-110 ${selectedTutor.id === tutor.id ? "bg-primary ring-4 ring-primary/20 scale-110 z-30" : "bg-white z-20"}`}
                  style={{
                    left: `${30 + index * 20}%`,
                    top: `${40 + index * 10}%`,
                  }}
                >
                  <MapPin className={`w-6 h-6 ${selectedTutor.id === tutor.id ? "text-white" : "text-primary"}`} />
                  <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-lg border-2 border-white flex items-center justify-center text-[8px] font-extrabold ${selectedTutor.id === tutor.id ? "bg-white text-primary" : "bg-primary text-white shadow-lg"}`}>
                    {tutor.rating}
                  </div>
                </button>
              ))}
          </div>
        </div>

        {/* Floating Controls */}
        <div className="relative z-10 px-6 pt-12 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-2xl bg-white shadow-xl shadow-black/[0.03] flex items-center justify-center border border-border/40 active:scale-90 transition-transform"
            >
              <ChevronUp className="w-5 h-5 text-foreground rotate-[270deg]" />
            </button>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-2xl bg-white shadow-xl shadow-black/[0.03] flex items-center justify-center border border-border/40">
                <Layers className="w-5 h-5 text-primary" />
              </button>
              <button className="w-12 h-12 rounded-2xl bg-white shadow-xl shadow-black/[0.03] flex items-center justify-center border border-border/40">
                <Bell className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[1.5rem] px-5 py-4 flex items-center gap-4 shadow-2xl shadow-black/[0.05] border border-border/40 focus-within:ring-2 ring-primary/10 transition-all">
            <Search className="w-5 h-5 text-muted-foreground/50" />
            <input
              type="text"
              placeholder="Search geography or expertise..."
              className="flex-1 outline-none bg-transparent text-sm font-bold text-foreground"
            />
          </div>

          {/* Luxury Mode Toggle */}
          <div className="flex bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-2xl border border-white w-fit mx-auto self-center">
            <button
              onClick={() => setMode("online")}
              className={`px-8 py-2.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest transition-all ${mode === "online" ? "bg-primary text-white shadow-xl shadow-primary/20" : "text-muted-foreground hover:text-primary"}`}
            >
              Virtual
            </button>
            <button
              onClick={() => setMode("offline")}
              className={`px-8 py-2.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest transition-all ${mode === "offline" ? "bg-primary text-white shadow-xl shadow-primary/20" : "text-muted-foreground hover:text-primary"}`}
            >
              On-Site
            </button>
          </div>
        </div>

        {/* Premium Detail Card */}
        <div className="absolute bottom-10 left-6 right-6 z-40">
          <div className="bg-white rounded-[2.8rem] p-6 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.12)] border border-border/30">
            <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-6 opacity-40" />
            
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-[1.8rem] bg-secondary flex items-center justify-center text-primary text-2xl font-extrabold font-heading shadow-inner border border-primary/5">
                {selectedTutor.avatar}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="px-2 py-0.5 bg-success/10 text-success text-[8px] font-extrabold uppercase tracking-widest rounded-md">Active Selection</div>
                  <div className="flex items-center gap-1 text-[10px] font-extrabold text-foreground">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    {selectedTutor.rating}
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-foreground font-heading italic tracking-tighter leading-none mb-1">
                  {selectedTutor.name}
                </h3>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.1em] leading-none mb-4 opacity-60">
                  {selectedTutor.subject} Specialist
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-xl font-extrabold text-primary font-heading italic tracking-tighter leading-none">₹{selectedTutor.price}</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-40">/hr</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate(`/student/tutor/${selectedTutor.id}`)}
              className="w-full mt-8 py-5 bg-primary text-white rounded-[1.8rem] text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_15px_40px_-5px_rgba(0,102,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
            >
              Explore Portfolio
              <ChevronUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
