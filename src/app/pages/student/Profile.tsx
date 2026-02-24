import { MobileContainer } from "../../components/MobileContainer";
import { BottomNav } from "../../components/BottomNav";
import { ChevronRight, User, Bell, HelpCircle, LogOut, Shield, CreditCard, Languages, ShieldCheck, ArrowRight } from "lucide-react";

const settingsOptions = [
  { icon: User, label: "Identity & Bio", path: "#" },
  { icon: Bell, label: "Alert Preferences", path: "#", badge: "2" },
  { icon: CreditCard, label: "Luxury Subscriptions", path: "#" },
  { icon: Languages, label: "Interface Language", path: "#", badge: "English" },
  { icon: Shield, label: "Global Privacy", path: "#" },
  { icon: HelpCircle, label: "Concierge Support", path: "#" },
];

export function Profile() {
  return (
    <MobileContainer hasBottomNav>
      <div className="h-full bg-[#FBFCFF] overflow-y-auto pb-40">
        {/* Luxury Header Banner */}
        <div className="bg-white border-b border-border/40 px-8 pt-16 pb-12 relative overflow-hidden rounded-b-[3rem] shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />
          
          <div className="relative flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-28 h-28 rounded-[2.5rem] bg-secondary flex items-center justify-center text-5xl shadow-inner border-2 border-white rotate-6">
                👨‍🎓
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-2xl flex items-center justify-center border-4 border-white shadow-xl shadow-primary/20 animate-bounce">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic mb-2">Academic Elite</p>
            <h1 className="text-3xl font-extrabold text-foreground font-heading italic tracking-tighter mb-1">Vijay Kumar</h1>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-60">vijay.k@premium.edu</p>
            
            <div className="mt-8 flex gap-6">
                <div className="text-center">
                    <p className="text-xl font-extrabold text-primary font-heading">12</p>
                    <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground/60">Sessions</p>
                </div>
                <div className="w-[1px] h-8 bg-border/50 self-center" />
                <div className="text-center">
                    <p className="text-xl font-extrabold text-primary font-heading">03</p>
                    <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground/60">Courses</p>
                </div>
                <div className="w-[1px] h-8 bg-border/50 self-center" />
                <div className="text-center">
                    <p className="text-xl font-extrabold text-primary font-heading">4.9</p>
                    <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground/60">Rating</p>
                </div>
            </div>
          </div>
        </div>

        {/* Settings Matrix */}
        <div className="px-6 py-10 space-y-10">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/50 mb-6 px-4">Account Portfolio</h3>
            
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/[0.03] border border-border/40">
                {settingsOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                    <button
                    key={index}
                    className="w-full flex items-center gap-5 px-8 py-6 hover:bg-[#F8FAFC] transition-all border-b border-border/20 last:border-0 group"
                    >
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                        <Icon className="w-5 h-5" />
                    </div>
                    <span className="flex-1 text-left text-foreground font-bold text-sm tracking-tight">{option.label}</span>
                    {option.badge ? (
                        <span className="px-3 py-1 bg-primary text-white text-[9px] font-black rounded-full shadow-lg shadow-primary/20">{option.badge}</span>
                    ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    )}
                    </button>
                );
                })}
            </div>
          </div>

          {/* Secure Logout */}
          <button className="group w-full bg-white border border-destructive/20 text-destructive py-6 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-xl shadow-destructive/5 hover:bg-destructive hover:text-white transition-all active:scale-95">
            <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Sign Out Securely
          </button>

          {/* Editorial Footer */}
          <div className="text-center space-y-4 py-10">
            <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-8 bg-border/50" />
                <p className="text-[8px] font-black uppercase tracking-[0.6em] text-muted-foreground/20">System ID: 8829-TH</p>
                <div className="h-[1px] w-8 bg-border/50" />
            </div>
            <p className="text-[10px] font-extrabold text-muted-foreground/40 italic">Designed for Global Excellence</p>
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileContainer>
  );
}
