import { Outlet, useLocation, Link } from "react-router";
import { Sparkles, ArrowRight, Zap, Target, BookOpen } from "lucide-react";

export function Root() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[#FBFCFF]">
      {isHome && (
        <div className="max-w-[430px] mx-auto p-12 text-center min-vh-screen flex flex-col justify-center py-20">
          <div className="mb-16">
            <div 
              className="w-24 h-24 rounded-[2.5rem] bg-primary flex items-center justify-center mx-auto mb-10 shadow-3xl shadow-primary/30 rotate-12"
            >
              <span className="text-5xl font-extrabold text-white font-heading italic tracking-tighter">T</span>
            </div>
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 italic">The Future of Mentorship</p>
            <h1 className="text-5xl font-extrabold mb-2 font-heading tracking-tighter italic leading-none text-foreground">
              Tutor<span className="text-primary italic">Hub</span>
            </h1>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40 mt-4 leading-relaxed">
              Global Standards • Individual Excellence <br/> Verified Faculty Network
            </p>
          </div>
          
          <div className="space-y-4 mb-16 relative">
            <div className="absolute -left-12 -top-12 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            
            <Link 
              to="/student/dashboard"
              className="group flex items-center justify-between w-full py-6 px-10 rounded-[2rem] bg-primary text-white font-extrabold uppercase tracking-[0.2em] text-[10px] shadow-3xl shadow-primary/30 hover:scale-[1.02] transition-all relative z-10 overflow-hidden"
            >
              <div className="flex items-center gap-4">
                  <Zap className="w-4 h-4 text-sky-300 fill-sky-300" />
                  <span>Student Gateway</span>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/teacher/dashboard"
              className="group flex items-center justify-between w-full py-6 px-10 rounded-[2rem] bg-white border border-border/60 text-foreground font-extrabold uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-black/[0.03] hover:border-primary/50 hover:bg-secondary/30 hover:scale-[1.02] transition-all relative z-10"
            >
              <div className="flex items-center gap-4">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Faculty Terminal</span>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div 
            className="p-10 rounded-[2.8rem] text-[10px] text-left bg-white border border-border/40 shadow-2xl shadow-black/[0.02]"
          >
            <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-4 h-4 text-primary/40" />
                <h3 className="font-extrabold uppercase tracking-[0.4em] text-primary italic">Discovery Matrix</h3>
            </div>
            
            <ul className="grid grid-cols-1 gap-y-6 font-bold text-muted-foreground/60">
              <li>
                <Link to="/onboarding" className="hover:text-primary transition-colors flex items-center gap-3 group">
                   <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                   Onboarding Experience
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-primary transition-colors flex items-center gap-3 group">
                   <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                   Authentication Protocol
                </Link>
              </li>
              <li>
                <Link to="/student/select-subject" className="hover:text-primary transition-colors flex items-center gap-3 group">
                   <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                   Curriculum Discovery
                </Link>
              </li>
              <li>
                <Link to="/student/map" className="hover:text-primary transition-colors flex items-center gap-3 group">
                   <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                   Geospatial Discovery
                </Link>
              </li>
              <li>
                <Link to="/teacher/onboarding" className="hover:text-primary transition-colors flex items-center gap-3 group">
                   <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                   Join Global Faculty
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}