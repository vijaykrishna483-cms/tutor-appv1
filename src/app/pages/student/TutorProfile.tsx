import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { MobileContainer } from "../../components/MobileContainer";
import { ChevronLeft, Star, Award, BookOpen, MapPin, Play, MessageCircle, Heart, Share2, ShieldCheck, IndianRupee, ArrowRight } from "lucide-react";

const tutor = {
  name: "Dr. Priya Sharma",
  rating: 4.8,
  reviews: 120,
  experience: 8,
  price: 800,
  subjects: ["Physics", "Mathematics"],
  boards: ["CBSE", "ICSE", "IB"],
  about: "PhD in Physics from IIT Delhi. Specialized in JEE/NEET preparation with 100+ students qualified. Patient teaching style with focus on conceptual clarity.",
  location: "South Delhi",
  avatar: "PS",
};

const reviews = [
  { name: "Rahul K.", rating: 5, text: "Excellent teacher! Helped me crack JEE Advanced.", date: "2 weeks ago" },
  { name: "Priya M.", rating: 5, text: "Very clear explanations and patient with doubts.", date: "1 month ago" },
];

export function TutorProfile() {
  const [activeTab, setActiveTab] = useState<"about" | "subjects" | "reviews" | "demo">("about");
  const navigate = useNavigate();
  const params = useParams();

  const tabs = [
    { id: "about", label: "Insights" },
    { id: "subjects", label: "Expertise" },
    { id: "reviews", label: "Praise" },
    { id: "demo", label: "Clips" },
  ] as const;

  return (
    <MobileContainer>
      <div className="min-h-screen bg-[#FBFCFF] pb-40">
        {/* Editorial Header */}
        <div className="h-[45vh] relative group overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544717297-fa95b3697628?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[3s]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBFCFF] via-[#FBFCFF]/20 to-black/40" />
          
          <div className="absolute top-12 left-6 right-6 flex justify-between items-center z-20">
            <button 
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-3xl border border-white/30 flex items-center justify-center hover:bg-white/40 shadow-2xl transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-3xl border border-white/30 flex items-center justify-center hover:bg-white/40 transition-all">
                <Share2 className="w-5 h-5 text-white" />
              </button>
              <button className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-3xl border border-white/30 flex items-center justify-center group active:scale-90 transition-all">
                <Heart className="w-5 h-5 text-white group-hover:fill-destructive group-hover:text-destructive transition-all" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-14 left-8 right-8 z-20">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1.5 bg-primary px-4 py-1.5 rounded-full shadow-xl shadow-primary/20">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span className="text-[9px] font-extrabold text-white uppercase tracking-[0.2em]">Verified Elite</span>
              </div>
            </div>
            <h1 className="text-5xl font-extrabold text-foreground font-heading italic tracking-tighter leading-none mb-4">{tutor.name}</h1>
            <div className="flex items-center gap-4">
              <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-[0.2em] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Located in {tutor.location}
              </p>
              <div className="w-1 h-1 rounded-full bg-border" />
              <p className="text-[10px] font-extrabold text-primary uppercase tracking-[0.2em]">
                {tutor.experience}Y EXPERIENCE
              </p>
            </div>
          </div>
        </div>

        {/* Floating Detail Matrix */}
        <div className="px-6 -mt-10 relative z-30">
          <div className="bg-white rounded-[2.8rem] p-8 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] border border-border/30 mb-10">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">Instructional Rate</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-primary font-heading italic leading-none tracking-tighter">₹{tutor.price}</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">/hr</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-right">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">Student Rating</p>
                <div className="flex items-center justify-end gap-2.5">
                  <Star className="w-6 h-6 fill-primary text-primary" />
                  <span className="text-3xl font-extrabold text-foreground font-heading leading-none">4.8</span>
                </div>
              </div>
            </div>

            <div className="h-[1px] w-full bg-border/40 my-8" />

            <div className="flex justify-between items-center bg-secondary/30 p-5 rounded-[1.8rem]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                   <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40 mb-0.5">Focus</p>
                   <p className="text-xs font-bold text-foreground uppercase tracking-tighter">{tutor.subjects.join(" & ")}</p>
                </div>
              </div>
              <div className="h-6 w-[1px] bg-border/50" />
              <div className="text-right">
                 <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40 mb-0.5">Global Boards</p>
                 <p className="text-xs font-bold text-foreground">CBSE, ICSE, IB</p>
              </div>
            </div>
          </div>

          {/* Luxury Tab Switcher */}
          <div className="flex gap-2 mb-10 bg-white shadow-xl shadow-black/[0.03] p-2 rounded-full border border-border/30">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all ${activeTab === tab.id ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105" : "text-muted-foreground/60 hover:text-primary"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Segmented Content */}
          <div className="pb-20">
            {activeTab === "about" && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
                <div className="relative">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Educator's Bio</h3>
                  <p className="text-base font-medium text-foreground leading-[1.7] tracking-tight border-l-4 border-primary/10 pl-8 py-2 relative italic">
                    <span className="absolute -top-4 -left-2 text-6xl text-primary/5 font-serif">"</span>
                    {tutor.about}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-white p-7 rounded-[2.2rem] border border-border/30 shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-foreground mb-2">Improvement</h4>
                    <p className="text-[10px] font-bold text-muted-foreground/60 leading-relaxed uppercase tracking-widest">Guaranteed score upliftment or partial refund.</p>
                  </div>
                  <div className="bg-white p-7 rounded-[2.2rem] border border-border/30 shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Award className="w-5 h-5" />
                    </div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-foreground mb-2">Curriculum</h4>
                    <p className="text-[10px] font-bold text-muted-foreground/60 leading-relaxed uppercase tracking-widest">Access to proprietary digital notes & ppts.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "subjects" && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 underline underline-offset-[12px] decoration-primary/20">Specialized Tracks</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {tutor.subjects.map(tag => (
                      <div key={tag} className="p-6 bg-white border border-border/40 rounded-[1.8rem] flex items-center justify-between group hover:border-primary/50 transition-all cursor-default shadow-sm hover:shadow-xl">
                        <div className="flex items-center gap-5">
                          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                          <span className="text-sm font-extrabold text-foreground uppercase tracking-tight">{tag}</span>
                        </div>
                        <ChevronLeft className="w-4 h-4 text-muted-foreground/30 rotate-180" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
                {reviews.map((rev, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-border/40 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-primary/20" />
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary font-black text-sm uppercase">
                          {rev.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-extrabold text-foreground leading-none mb-1">{rev.name}</p>
                          <p className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-widest">{rev.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-1.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className={`w-3.5 h-3.5 ${j < rev.rating ? "fill-primary text-primary" : "text-border"}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-medium text-foreground/80 leading-relaxed italic">"{rev.text}"</p>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === "demo" && (
              <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
                <div className="relative aspect-video rounded-[2.8rem] overflow-hidden group shadow-2xl shadow-primary/20">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-[4s]" />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-6">
                    <button className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-3xl hover:bg-white/40 group active:scale-95 transition-all">
                      <Play className="w-10 h-10 text-white fill-white ml-2" />
                    </button>
                    <p className="text-[10px] font-black text-white/80 uppercase tracking-[0.4em] animate-pulse">Preview Lecture</p>
                  </div>
                </div>
                <div className="mt-10 p-8 bg-white border border-border/40 rounded-[2.5rem] text-center shadow-xl shadow-black/[0.02]">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-3">Academic Showcase</h4>
                  <p className="text-base font-extrabold text-foreground font-heading">Thermodynamics: The Bridge to Excellence</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Float Action Bar */}
        <div className="fixed bottom-10 left-8 right-8 z-[100]">
          <div className="bg-white/70 backdrop-blur-3xl border border-white p-3.5 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,102,255,0.25)] flex items-center gap-4">
             <button 
              onClick={() => navigate(`/student/chat/1`)}
              className="w-16 h-16 rounded-[1.8rem] bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90"
            >
              <MessageCircle className="w-7 h-7" />
            </button>
            <button 
              onClick={() => navigate(`/student/booking/1`)}
              className="flex-1 py-5 bg-primary text-white rounded-[1.8rem] text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              Secure Masterclass
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
