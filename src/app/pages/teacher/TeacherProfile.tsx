import { MobileContainer } from "../../components/MobileContainer";
import { BottomNav } from "../../components/BottomNav";
import { ChevronRight, User, Star, DollarSign, Calendar, Settings, LogOut, ShieldCheck, TrendingUp } from "lucide-react";

const profileOptions = [
  { icon: User, label: "Curriculum & Bio", path: "#" },
  { icon: Star, label: "Academic Reviews", path: "#", badge: "4.9" },
  { icon: DollarSign, label: "Revenue Portfolios", path: "#" },
  { icon: Calendar, label: "Availability Matrix", path: "#" },
  { icon: Settings, label: "System Config", path: "#" },
];

export function TeacherProfile() {
  return (
    <MobileContainer hasBottomNav>
      <div className="h-full bg-[#FBFCFF] overflow-y-auto pb-40">
        {/* Elite Faculty Header */}
        <div className="bg-white border-b border-border/40 px-8 pt-16 pb-12 relative overflow-hidden rounded-b-[3.5rem] shadow-sm">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -mr-40 -mt-40" />
          
          <div className="relative flex flex-col items-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-[3rem] bg-secondary flex items-center justify-center text-6xl shadow-inner border-4 border-white rotate-[10deg] hover:rotate-0 transition-transform duration-700">
                👨‍🏫
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center border-4 border-white shadow-2xl shadow-primary/30">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary italic mb-3">Distinguished Professor</p>
            <h1 className="text-4xl font-extrabold text-foreground font-heading italic tracking-tighter mb-2">Dr. Rajesh Kumar</h1>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest opacity-60">Pure Mathematics Expert</p>
            
            <div className="mt-10 flex gap-10 bg-secondary/30 p-8 rounded-[2.5rem] w-full justify-center">
              <div className="text-center group">
                <p className="text-2xl font-extrabold text-primary font-heading group-hover:scale-110 transition-transform">45</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 mt-1">Cohorts</p>
              </div>
              <div className="w-[1px] h-10 bg-border/40 self-center" />
              <div className="text-center group">
                <p className="text-2xl font-extrabold text-primary font-heading group-hover:scale-110 transition-transform">4.9⭐</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 mt-1">Rating</p>
              </div>
              <div className="w-[1px] h-10 bg-border/40 self-center" />
              <div className="text-center group">
                <div className="flex items-center justify-center gap-1.5 font-extrabold text-2xl text-primary font-heading group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5" />
                    250+
                </div>
                <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 mt-1">Sessions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Management Console */}
        <div className="px-6 py-12 space-y-12">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 mb-8 px-4">Faculty Management</h3>
            
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-black/[0.03] border border-border/40">
              {profileOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <button
                    key={index}
                    className="w-full flex items-center gap-6 px-10 py-7 hover:bg-[#F8FAFC] transition-all border-b border-border/20 last:border-0 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="flex-1 text-left text-foreground font-bold text-base tracking-tight">{option.label}</span>
                    {option.badge ? (
                      <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black rounded-full shadow-sm">{option.badge}</span>
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secure Logout */}
          <button className="group w-full bg-white border border-destructive/20 text-destructive py-7 rounded-[2.5rem] text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 shadow-xl shadow-destructive/5 hover:bg-destructive hover:text-white transition-all active:scale-95">
            <LogOut className="w-6 h-6 group-hover:rotate-[-12deg] transition-transform" />
            Terminate Session
          </button>

          {/* Editorial Footer */}
          <div className="text-center space-y-4 py-10 opacity-40">
             <p className="text-[10px] font-black uppercase tracking-[0.8em] text-muted-foreground">Premium Faculty V1.2</p>
             <p className="text-[9px] font-bold text-muted-foreground italic">Powered by TutorHub Global Network</p>
          </div>
        </div>
      </div>
      <BottomNav role="teacher" />
    </MobileContainer>
  );
}
