import { useNavigate } from "react-router";
import { MobileContainer } from "../../components/MobileContainer";
import { BottomNav } from "../../components/BottomNav";
import { Search, Star, Video, ChevronRight, MapPin, Bell, IndianRupee, ArrowRight } from "lucide-react";

export function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <MobileContainer hasBottomNav>
      <div className="min-h-screen bg-[#FBFCFF]">
        {/* Header - Refined Typography */}
        <div className="px-6 pt-12 pb-10 bg-white border-b border-border/40">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform active:scale-90">
                <span className="text-white font-bold font-heading text-xl">V</span>
              </div>
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground/60 leading-none mb-1">Current Discovery</p>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm font-bold text-foreground">Mumbai, India</span>
                </div>
              </div>
            </div>
            <button className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center relative hover:scale-105 transition-all">
              <Bell className="w-5 h-5 text-primary" />
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-destructive border-2 border-white" />
            </button>
          </div>

          <h1 className="text-4xl font-extrabold text-foreground mb-1 font-heading tracking-tighter leading-[1.1]">
            Where will you<br/><span className="text-primary italic">learn</span> today?
          </h1>

          {/* Luxury Search Bar */}
          <div className="relative mt-8 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search subjects, exams or mentors..."
              className="w-full pl-14 pr-16 py-5 bg-secondary/80 rounded-[1.5rem] border-2 border-transparent focus:border-primary/10 focus:bg-white transition-all text-sm font-semibold text-foreground outline-none shadow-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-xl shadow-md border border-border/30 flex items-center justify-center group-active:scale-95 transition-transform">
              <ChevronRight className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>

        {/* Discovery Chips */}
        <div className="px-6 py-10 overflow-x-auto flex gap-3 hide-scrollbar">
          {["Yachting", "Physics", "Chemistry", "Mathematics", "Biology", "JEE Elite"].map((tag, i) => (
            <button 
              key={i}
              className={`px-6 py-3.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest whitespace-nowrap transition-all ${i === 1 ? "bg-primary text-white shadow-xl shadow-primary/30 scale-105" : "bg-white border border-border/60 text-muted-foreground hover:border-primary/40"}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured Educator Card - Refined Overlay */}
        <div className="px-6 mb-12">
          <div className="flex justify-between items-end mb-6 px-1">
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-muted-foreground font-heading">
              Premium Faculty 🔥
            </h2>
            <button className="text-[9px] font-black text-primary uppercase tracking-[0.2em] border-b-2 border-primary/10">Browse All</button>
          </div>
          
          <div 
            onClick={() => navigate("/student/tutor/1")}
            className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-primary/5 cursor-pointer"
          >
            <div className="aspect-[16/10] bg-[url('https://images.unsplash.com/photo-1544717297-fa95b3697628?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-xl">
              <Star className="w-3.5 h-3.5 fill-primary text-primary" />
              <span className="text-[10px] font-black text-primary">4.9 TOP TIER</span>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[9px] font-black text-white/60 uppercase tracking-[0.2em] mb-2 leading-none">Senior Research Fellow • IIT Delhi</p>
              <h3 className="text-3xl font-extrabold text-white font-heading tracking-tight italic leading-none mb-4">Dr. Priya Sharma</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-white font-heading italic leading-none">₹800</span>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">/ Hour</span>
                </div>
                <button className="px-8 py-4 bg-primary text-white text-[10px] font-black rounded-2xl shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all uppercase tracking-widest leading-none">
                  Reserve 
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended List - Balanced Weights */}
        <div className="px-6 mb-12">
          <div className="flex justify-between items-center mb-6 px-1">
             <h2 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-muted-foreground font-heading">
              Recommended Mentors ⚓
            </h2>
          </div>
          <div className="space-y-6">
            {[
              { name: "Rahul Verma", sub: "Calculus & Algebra", rate: "800", rating: "4.9" },
              { name: "Anita Desai", sub: "Inorganic Chemistry", rate: "750", rating: "4.8" }
            ].map((tutor, i) => (
              <div 
                key={i}
                className="bg-white border border-border/40 rounded-[2.2rem] p-5 flex items-center gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-16 h-16 rounded-[1.2rem] bg-secondary flex items-center justify-center text-primary text-xl font-bold font-heading group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                  {tutor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground font-heading mb-1 leading-none">{tutor.name}</h3>
                  <p className="text-[10px] font-extrabold text-muted-foreground/60 uppercase tracking-widest leading-none">{tutor.sub}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                      <span className="text-[10px] text-foreground">{tutor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1.5 uppercase font-bold text-[9px] text-primary bg-secondary px-2.5 py-1 rounded-md">
                      <IndianRupee className="w-3 h-3" />
                      {tutor.rate}/Hr
                    </div>
                  </div>
                </div>
                <button className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-all">
                  <ChevronRight className="w-5 h-5 text-primary group-hover:text-white group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Live Session Banner - Premium */}
        <div className="px-6 mb-32">
          <div className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-primary/30 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-[80px] group-hover:scale-150 transition-transform duration-[2s]" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 bg-white/10 w-fit px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                <Video className="w-4 h-4 text-white" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Interactive Masterclass</span>
              </div>
              <h2 className="text-4xl font-extrabold font-heading tracking-tight italic uppercase mb-2 leading-[0.9]">JEE Elite <br/><span className="text-sky-300 italic">Strategy Vault</span></h2>
              <p className="text-sm font-medium text-white/70 mb-10 leading-relaxed max-w-[240px]">Access the secret methodologies of top IIT rankers and board toppers.</p>
              <button className="w-full py-5 bg-white text-primary rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl hover:bg-sky-50 transition-colors flex items-center justify-center gap-3">
                Unlock Access
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </MobileContainer>
  );
}
