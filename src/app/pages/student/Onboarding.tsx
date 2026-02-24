import { useState } from "react";
import { useNavigate } from "react-router";
import { MobileContainer } from "../../components/MobileContainer";
import { BookOpen, Globe, MessageSquare, ChevronRight, Sparkles } from "lucide-react";

const screens = [
  {
    icon: BookOpen,
    tag: "CURATED EXCELLENCE",
    title: "Master Every <br/> <span className='text-sky-300 italic'>Conceptual</span> Layer",
    subtitle: "Highly selective 1-to-1 mentorship for students who refuse to settle for average.",
  },
  {
    icon: Globe,
    tag: "HYBRID DISCOVERY",
    title: "Global Reach, <br/> <span className='text-sky-300 italic'>Local</span> Presence",
    subtitle: "Locate elite local tutors near you or connect with world-class remote experts.",
  },
  {
    icon: MessageSquare,
    tag: "SEAMLESS SYNC",
    title: "Book & Learn <br/> <span className='text-sky-300 italic'>Instantly</span>",
    subtitle: "A frictionless architecture designed to bridge the gap between curiosity and mastery.",
  },
];

export function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      navigate("/student/dashboard");
    }
  };

  const current = screens[currentScreen];
  const Icon = current.icon;

  return (
    <MobileContainer>
      <div className="min-h-screen flex flex-col justify-between p-10 bg-primary relative overflow-hidden">
        {/* Luxury Background Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[100px] -ml-32 -mb-32" />
        
        {/* Navigation Bar */}
        <div className="relative flex justify-between items-center z-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">TutorHub</span>
          </div>
          <button 
            onClick={() => navigate("/login")}
            className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors"
          >
            Skip Intro
          </button>
        </div>

        {/* Content Section */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-center z-20">
          <div className="w-40 h-40 rounded-[3rem] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-16 shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-1000">
            <Icon className="w-20 h-20 text-white" strokeWidth={1} />
          </div>
          
          <p className="text-[10px] font-black text-sky-300 uppercase tracking-[0.5em] mb-4 leading-none">{current.tag}</p>
          <h1 
            className="text-4xl font-extrabold text-white mb-6 leading-[1.1] font-heading tracking-tighter"
            dangerouslySetInnerHTML={{ __html: current.title }}
          />
          
          <p className="text-sm font-medium text-white/70 mb-12 max-w-sm leading-relaxed px-4">
            {current.subtitle}
          </p>

          {/* Elite Progress Indicator */}
          <div className="flex gap-3 mb-12">
            {screens.map((_, index) => (
              <div
                key={index}
                className="h-1.5 rounded-full transition-all duration-700 bg-white"
                style={{
                  width: currentScreen === index ? "48px" : "8px",
                  opacity: currentScreen === index ? "1" : "0.2",
                }}
              />
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="relative z-20">
            <button
            onClick={handleNext}
            className="w-full py-6 rounded-[2rem] bg-white text-primary font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 shadow-3xl hover:bg-sky-50 transition-all active:scale-95 group"
            >
            {currentScreen === screens.length - 1 ? "Experience Hub" : "Proceed"}
            <ChevronRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${currentScreen === screens.length - 1 ? "animate-pulse" : ""}`} />
            </button>
        </div>
      </div>
    </MobileContainer>
  );
}