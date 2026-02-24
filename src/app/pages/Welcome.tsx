import { MobileContainer } from "../components/MobileContainer";
import { BookOpen, GraduationCap, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function Welcome() {
  return (
    <MobileContainer>
      <div className="h-full bg-[#FBFCFF] relative overflow-hidden flex flex-col">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full -mr-64 -mt-64 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full -ml-48 -mb-48 blur-[100px]" />
        
        <div className="relative flex-1 flex flex-col items-center justify-between px-8 py-20 pb-12">
          {/* Brand Identity - Refined Scale */}
          <div className="text-center">
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-primary rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-primary/30 mb-10 rotate-[12deg] group-hover:rotate-0 transition-transform duration-700">
                <span className="text-5xl font-extrabold text-white font-heading">T</span>
              </div>
              <h1 className="text-5xl font-extrabold tracking-tighter text-foreground font-heading italic leading-none">
                Tutor<span className="text-primary italic">Hub</span>
              </h1>
              <p className="max-w-[240px] mx-auto text-[10px] font-extrabold text-muted-foreground uppercase tracking-[0.4em] mt-6 leading-relaxed opacity-60">
                The Gold Standard in <br/>Digital Mentorship
              </p>
            </div>
          </div>

          {/* Persona Selection Matrix */}
          <div className="w-full space-y-6">
            <Link
              to="/student/onboarding"
              className="block w-full bg-white border border-border/40 rounded-[2.5rem] p-8 shadow-2xl shadow-black/[0.03] hover:shadow-primary/10 hover:border-primary/20 transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center gap-6 mb-5">
                <div className="w-16 h-16 bg-secondary/80 rounded-[1.2rem] flex items-center justify-center group-hover:bg-primary transition-colors shadow-inner">
                  <BookOpen className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-extrabold text-foreground font-heading italic tracking-tighter">For Students</h2>
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] opacity-60">Seek Excellence</p>
                </div>
                <ChevronRight className="w-5 h-5 text-border group-hover:text-primary transition-colors" />
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed font-semibold opacity-80">
                Connect with elite academic mentors for highly personalized, 1-to-1 learning journeys.
              </p>
            </Link>

            <Link
              to="/teacher/onboarding"
              className="block w-full bg-primary rounded-[2.5rem] p-8 shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center gap-6 mb-5 text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-[1.2rem] flex items-center justify-center border border-white/20 shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-extrabold font-heading italic tracking-tighter">For Educators</h2>
                  <p className="text-[9px] font-black text-white/50 uppercase tracking-[0.2em]">Scale Your Impact</p>
                </div>
                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
              </div>
              <p className="text-[13px] text-white/80 leading-relaxed font-semibold">
                Monetize your expertise and shape the next generation of global leaders on your schedule.
              </p>
            </Link>
          </div>

          {/* Luxury Footer Actions */}
          <div className="text-center w-full space-y-10">
            <div className="flex items-center justify-center gap-3">
               <div className="h-[1px] w-8 bg-border" />
               <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest leading-none">
                Returning user?{" "}
                <Link to="/login" className="text-primary italic hover:underline underline-offset-4 ml-1">
                  Secure Access
                </Link>
              </p>
              <div className="h-[1px] w-8 bg-border" />
            </div>
            
            <div className="flex gap-12 justify-center text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground/30">
              <a href="#" className="hover:text-primary transition-colors">Legal</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Global</a>
            </div>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
