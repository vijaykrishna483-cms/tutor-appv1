import { useState } from "react";
import { useNavigate } from "react-router";
import { MobileContainer } from "../../components/MobileContainer";
import { ChevronLeft, Calendar, Clock, BookOpen, ShieldCheck, ArrowRight } from "lucide-react";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", 
  "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM",
];

const durations = [
  { label: "30 mins", value: 30, price: 400 },
  { label: "1 hour", value: 60, price: 800 },
  { label: "1.5 hours", value: 90, price: 1200 },
];

export function Booking() {
  const [selectedDate, setSelectedDate] = useState(26);
  const [selectedTime, setSelectedTime] = useState("04:00 PM");
  const [selectedDuration, setSelectedDuration] = useState(durations[1]);
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="min-h-screen bg-[#FBFCFF] pb-40">
        {/* Luxury Booking Header */}
        <div className="px-8 pt-16 pb-12 bg-white border-b border-border/40 rounded-b-[3rem] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -mr-32 -mt-32" />
          
          <button 
            onClick={() => navigate(-1)} 
            className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-10 active:scale-90 transition-transform shadow-inner text-primary"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-3 italic">Consultation Setup</p>
          <h1 className="text-4xl font-extrabold text-foreground font-heading tracking-tighter leading-none mb-4">
            Book Elite <br/><span className="text-primary italic">Session</span>
          </h1>
          
          <div className="flex items-center gap-3 bg-secondary/50 w-fit px-4 py-2 rounded-full border border-primary/5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-[9px] font-extrabold text-primary uppercase tracking-widest leading-none">Secured Reservation</span>
          </div>
        </div>

        <div className="px-6 py-10 space-y-12">
          {/* Calendar Architecture */}
          <div>
            <div className="flex justify-between items-end mb-8 px-2">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 font-heading">February Portfolio</h2>
              <p className="text-[10px] font-bold text-primary italic">View All Markets</p>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-6 shadow-2xl shadow-black/[0.03] border border-border/40">
                <div className="grid grid-cols-7 gap-2 mb-4">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                    <div key={i} className="text-center text-[10px] font-black py-2 text-muted-foreground/30 uppercase tracking-widest">
                    {day}
                    </div>
                ))}
                </div>
                
                <div className="grid grid-cols-7 gap-3">
                {[24, 25, 26, 27, 28, 29, 1].map((date) => {
                    const isSelected = date === selectedDate;
                    const isCurrent = date === 24;
                    
                    return (
                    <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`aspect-square rounded-2xl flex flex-col items-center justify-center text-sm font-extrabold transition-all group relative overflow-hidden ${isSelected ? "bg-primary text-white shadow-xl shadow-primary/30 rotate-3" : "bg-secondary/40 text-foreground hover:bg-secondary"}`}
                    >
                        {isSelected && <div className="absolute top-0 right-0 w-4 h-4 bg-white/20 blur-sm rounded-full" />}
                        <span className="relative z-10">{date}</span>
                        {isCurrent && !isSelected && <div className="absolute bottom-2 w-1 h-1 bg-primary rounded-full" />}
                    </button>
                    );
                })}
                </div>
            </div>
          </div>

          {/* Time Slot Selection */}
          <div>
            <div className="flex items-center gap-3 mb-8 px-2">
              <Clock className="w-5 h-5 text-primary opacity-30" />
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 font-heading">Temporal Window</h2>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((time) => {
                const isSelected = time === selectedTime;
                
                return (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${isSelected ? "bg-white border-primary text-primary shadow-xl shadow-primary/5" : "bg-white border-border/20 text-muted-foreground/60 hover:border-primary/20"}`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Duration Strategy */}
          <div>
            <div className="flex items-center gap-3 mb-8 px-2">
              <BookOpen className="w-5 h-5 text-primary opacity-30" />
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 font-heading">Session Depth</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {durations.map((duration) => {
                const isSelected = duration.value === selectedDuration.value;
                
                return (
                  <button
                    key={duration.value}
                    onClick={() => setSelectedDuration(duration)}
                    className={`p-6 rounded-[2.2rem] flex items-center justify-between transition-all border-2 overflow-hidden relative group ${isSelected ? "bg-white border-primary shadow-2xl shadow-primary/10 -translate-y-1" : "bg-white border-border/20"}`}
                  >
                    {isSelected && <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16" />}
                    <div className="flex items-center gap-5">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isSelected ? "bg-primary text-white" : "bg-secondary text-primary"}`}>
                            <Clock className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <div className={`text-sm font-extrabold uppercase tracking-tight transition-colors ${isSelected ? "text-primary italic" : "text-foreground"}`}>
                            {duration.label} Strategy
                            </div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest opacity-40">Immersion Level {duration.value === 90 ? "MAX" : "Standard"}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className={`text-xl font-extrabold font-heading italic leading-none transition-colors ${isSelected ? "text-primary" : "text-foreground"}`}>
                        ₹{duration.price}
                        </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Luxury Account Summary */}
          <div className="bg-white rounded-[2.8rem] p-10 border border-border/40 shadow-2xl shadow-black/[0.04] relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-24 -mb-24" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 underline underline-offset-[12px] decoration-primary/20">
              Transaction Details
            </h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center group">
                <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest">Faculty Member</span>
                <span className="text-sm font-extrabold text-foreground italic">Dr. Priya Sharma</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest">Scientific Discipline</span>
                <span className="text-sm font-extrabold text-foreground italic">Physics • Mechanics</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest">Temporal Window</span>
                <span className="text-sm font-extrabold text-foreground italic">{selectedDate} Feb, {selectedTime}</span>
              </div>
              
              <div className="h-[1px] my-6 bg-border/40" />
              
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Total Consideration</span>
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-primary font-heading italic leading-none tracking-tighter">
                    ₹{selectedDuration.price}
                    </span>
                    <span className="text-[9px] font-black text-primary/40 uppercase">Tax Incl.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Execution Control */}
        <div className="fixed bottom-10 left-8 right-8 z-[100]">
          <button
            onClick={() => navigate("/student/confirmation")}
            className="w-full py-6 bg-primary text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.4em] shadow-[0_25px_60px_-15px_rgba(0,102,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
          >
            Authorize Payment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
