import { useNavigate } from "react-router";
import { MobileContainer } from "../../components/MobileContainer";
import { Mail, Smartphone, ArrowRight, ShieldCheck } from "lucide-react";

export function Login() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="min-h-screen p-10 flex flex-col bg-[#FBFCFF]">
        {/* Logo/Brand Section */}
        <div className="pt-12 pb-10">
          <div 
            className="w-20 h-20 rounded-[2.5rem] bg-primary flex items-center justify-center mb-10 shadow-2xl shadow-primary/30 rotate-12"
          >
            <span className="text-4xl font-extrabold text-white font-heading">T</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-3 italic">Secure Access</p>
          <h1 className="text-5xl font-extrabold text-foreground font-heading tracking-tighter italic leading-none mb-4">
            Welcome <br/> <span className="text-primary italic">Back</span>
          </h1>
          <p className="text-base font-medium text-muted-foreground/60 leading-relaxed max-w-[240px]">
            Enter your credentials to access your global learning dashboard.
          </p>
        </div>

        {/* Exclusive Login Form */}
        <div className="space-y-8 pt-10">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 px-4">
              Academic ID / Phone
            </label>
            <div className="relative group">
              <input
                type="text"
                placeholder="email@tutorhub.premium"
                className="w-full px-8 py-5 rounded-[1.8rem] bg-white border border-border/40 outline-none focus:border-primary/40 focus:ring-4 ring-primary/5 transition-all text-sm font-bold text-foreground shadow-sm"
              />
              <ShieldCheck className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-success/30 group-focus-within:text-success/100 transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 px-4">
              Private Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-8 py-5 rounded-[1.8rem] bg-white border border-border/40 outline-none focus:border-primary/40 focus:ring-4 ring-primary/5 transition-all text-sm font-bold text-foreground shadow-sm"
            />
          </div>

          <div className="flex justify-end px-2">
            <button className="text-[10px] font-black uppercase tracking-widest text-primary border-b-2 border-primary/10">
              Recover Access?
            </button>
          </div>

          <button
            onClick={() => navigate("/student/dashboard")}
            className="w-full py-6 rounded-[1.8rem] bg-primary text-white font-extrabold uppercase tracking-[0.3em] text-[10px] shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 mt-6"
          >
            Authenticate
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Luxury Divider */}
          <div className="flex items-center gap-6 my-10 opacity-30">
            <div className="flex-1 h-[1px] bg-border" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em]">Social Sync</span>
            <div className="flex-1 h-[1px] bg-border" />
          </div>

          {/* Social Access Matrix */}
          <div className="grid grid-cols-2 gap-5">
            <button className="py-4 rounded-[1.5rem] border border-border/40 flex items-center justify-center gap-3 bg-white shadow-sm hover:shadow-xl transition-all group">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                <Mail className="w-4 h-4 text-primary group-hover:text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Google</span>
            </button>
            <button className="py-4 rounded-[1.5rem] border border-border/40 flex items-center justify-center gap-3 bg-white shadow-sm hover:shadow-xl transition-all group">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                <Smartphone className="w-4 h-4 text-primary group-hover:text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Mobile</span>
            </button>
          </div>

          {/* Tertiary Links */}
          <div className="text-center pt-10 pb-8 space-y-6">
            <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
              New to the platform?{" "}
              <button className="text-primary font-black ml-1 hover:underline">Apply for Entry</button>
            </p>
            <button 
              onClick={() => navigate("/teacher/onboarding")}
              className="px-6 py-2.5 rounded-full bg-secondary text-primary text-[9px] font-black uppercase tracking-widest border border-primary/10 hover:bg-primary hover:text-white transition-all"
            >
              Faculty Onboarding →
            </button>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
