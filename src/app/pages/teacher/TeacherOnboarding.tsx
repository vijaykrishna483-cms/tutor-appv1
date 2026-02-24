import { useNavigate } from "react-router";
import { MobileContainer } from "../../components/MobileContainer";
import { GraduationCap, TrendingUp, Clock, ChevronRight, ShieldCheck, Zap } from "lucide-react";

export function TeacherOnboarding() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div 
        className="min-h-screen p-10 flex flex-col bg-primary relative overflow-hidden"
      >
        {/* Luxury Background Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -ml-40 -mt-40" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[100px] -mr-32 -mb-32" />

        {/* Navigation Bar */}
        <div className="relative flex justify-between items-center z-20 mb-12">
            <button 
                onClick={() => navigate("/login")}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 active:scale-90 transition-transform"
            >
                <ChevronRight className="w-5 h-5 text-white rotate-180" />
            </button>
            <div className="flex items-center gap-2">
                <Zap className="w-3 h-3 text-sky-400 fill-sky-400" />
                <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">Faculty Portals</span>
            </div>
        </div>

        {/* Faculty Branding Section */}
        <div className="relative flex-1 flex flex-col justify-center text-center z-20">
          <div className="w-36 h-36 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-12 shadow-3xl -rotate-6 transition-transform hover:rotate-0 duration-700">
            <GraduationCap className="w-16 h-16 text-white" strokeWidth={1} />
          </div>

          <p className="text-[10px] font-black text-sky-300 uppercase tracking-[0.6em] mb-4 leading-none">Global Educators Program</p>
          <h1 className="text-4xl font-extrabold text-white mb-6 leading-[1.1] font-heading tracking-tighter italic">
            Monetize Your <br/> <span className="text-sky-300 italic">Intellectual</span> Capital
          </h1>
          
          <p className="text-sm font-medium text-white/70 mb-16 max-w-sm mx-auto leading-relaxed">
            Join a highly selective network of elite academic mentors earning premium income on their own terms.
          </p>

          {/* Value Matrix */}
          <div className="space-y-6 mb-16 text-left max-w-sm mx-auto">
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-500">
                <TrendingUp className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-sky-300 mb-1">Yield Optimization</h3>
                <p className="text-sm font-bold text-white tracking-tight">Command premium rates for your expertise.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-500">
                <Clock className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-sky-300 mb-1">Time Sovereignty</h3>
                <p className="text-sm font-bold text-white tracking-tight">A architecture built for schedule autonomy.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-500">
                <ShieldCheck className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-sky-300 mb-1">Elite Verification</h3>
                <p className="text-sm font-bold text-white tracking-tight">Trust layers vetted by academic standards.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty CTA */}
        <div className="relative z-20">
            <button
            onClick={() => navigate("/teacher/create-profile")}
            className="w-full py-6 rounded-[2rem] bg-white text-primary font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 shadow-3xl hover:bg-sky-50 transition-all active:scale-95 group"
            >
            Initiate Profile Creation
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform animate-pulse" />
            </button>
            <p className="text-center text-white/40 text-[9px] font-black uppercase tracking-widest mt-8">
                Onboarding cycle: Approx. 5 minutes
            </p>
        </div>
      </div>
    </MobileContainer>
  );
}
