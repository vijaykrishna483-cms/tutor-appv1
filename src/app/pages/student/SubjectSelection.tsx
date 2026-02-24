import { useState } from "react";
import { useNavigate } from "react-router";
import { MobileContainer } from "../../components/MobileContainer";
import { ChevronLeft, Check, Sparkles } from "lucide-react";

const steps = [
  {
    tag: "ACADEMIC LEVEL",
    title: "Define Your <br/> <span className='text-primary italic'>Standard</span>",
    options: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
  },
  {
    tag: "CURRICULUM",
    title: "Select Your <br/> <span className='text-primary italic'>Board</span>",
    options: ["CBSE", "ICSE", "State Board", "IB", "IGCSE"],
  },
  {
    tag: "DISCIPLINE",
    title: "Choose Core <br/> <span className='text-primary italic'>Expertise</span>",
    options: ["Mathematics", "Physics", "Chemistry", "Biology", "English"],
  },
  {
    tag: "SPECIFIC TRACK",
    title: "Identify Focus <br/> <span className='text-primary italic'>Chapters</span>",
    options: [
      "Quadratic Equations",
      "Triangles",
      "Coordinate Geometry",
      "Trigonometry",
      "Circles",
      "Statistics",
    ],
  },
];

export function SubjectSelection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSelect = (option: string) => {
    const newSelections = [...selectedOptions];
    newSelections[currentStep] = option;
    setSelectedOptions(newSelections);

    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => navigate("/student/map"), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate(-1);
    }
  };

  return (
    <MobileContainer>
      <div className="min-h-screen bg-[#FBFCFF]">
        {/* Luxury Selection Header */}
        <div className="px-8 pt-16 pb-12 bg-white border-b border-border/40 rounded-b-[2.5rem] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />
          
          <button 
            onClick={handleBack} 
            className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-10 active:scale-90 transition-transform shadow-inner text-primary"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Progress Architecture */}
          <div className="flex gap-4 mb-10">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-700 ${index <= currentStep ? "flex-[2] bg-primary shadow-lg shadow-primary/20" : "flex-1 bg-border/40"}`}
              />
            ))}
          </div>

          <p className="text-[10px] font-black text-primary uppercase tracking-[0.6em] mb-3 italic">{steps[currentStep].tag}</p>
          <h1 
            className="text-4xl font-extrabold text-foreground font-heading tracking-tighter leading-none mb-4"
            dangerouslySetInnerHTML={{ __html: steps[currentStep].title }}
          />
          <div className="flex items-center gap-2">
             <div className="w-1 h-1 rounded-full bg-primary" />
             <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">
                Configuration Phase {currentStep + 1} / {steps.length}
             </p>
          </div>
        </div>

        {/* Global Options Grid */}
        <div className="px-6 py-10">
          <div className="grid grid-cols-2 gap-4">
            {steps[currentStep].options.map((option) => {
              const isSelected = selectedOptions[currentStep] === option;
              
              return (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`relative p-8 rounded-[2rem] border-2 transition-all duration-500 overflow-hidden group shadow-sm ${isSelected ? "border-primary bg-white shadow-xl shadow-primary/10 -translate-y-1" : "border-border/30 bg-white hover:border-primary/30"}`}
                >
                  {isSelected && (
                    <div className="absolute -top-1 -right-1 w-10 h-10 bg-primary rounded-bl-3xl flex items-center justify-center shadow-lg animate-in fade-in zoom-in duration-300">
                      <Check className="w-4 h-4 text-white" strokeWidth={4} />
                    </div>
                  )}
                  
                  <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center transition-all ${isSelected ? "bg-primary text-white" : "bg-secondary text-primary group-hover:bg-primary group-hover:text-white"}`}>
                    <Sparkles className="w-5 h-5" />
                  </div>
                  
                  <span 
                    className={`block font-extrabold text-sm tracking-tight transition-colors ${isSelected ? "text-primary italic" : "text-foreground group-hover:text-primary"}`}
                  >
                    {option}
                  </span>

                  {/* Aesthetic Background Decoration */}
                  <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl transition-all duration-700 ${isSelected ? "bg-primary/10 opacity-100" : "bg-primary/5 opacity-0 group-hover:opacity-100"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Footer */}
        <div className="px-10 py-10 text-center opacity-40">
           <p className="text-[9px] font-black uppercase tracking-[0.8em] text-muted-foreground">TutorHub Recommendation Engine</p>
        </div>
      </div>
    </MobileContainer>
  );
}
