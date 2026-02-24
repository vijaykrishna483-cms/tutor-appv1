import { useState } from "react";
import { MobileContainer } from "../../components/MobileContainer";
import { BottomNav } from "../../components/BottomNav";
import { Calendar, IndianRupee, Star, Clock, TrendingUp, Video, MapPin, Bell, ArrowRight, ChevronRight } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const earningsData = [
  { day: "Mon", amount: 2400 },
  { day: "Tue", amount: 3200 },
  { day: "Wed", amount: 2800 },
  { day: "Thu", amount: 4000 },
  { day: "Fri", amount: 3600 },
  { day: "Sat", amount: 5200 },
  { day: "Sun", amount: 4800 },
];

const todaySessions = [
  { id: 1, student: "Rahul Kumar", subject: "Quantum Physics", time: "2:00 PM", type: "online" },
  { id: 2, student: "Priya Sharma", subject: "Pure Mathematics", time: "4:30 PM", type: "offline" },
];

export function TeacherDashboard() {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <MobileContainer hasBottomNav>
      <div className="min-h-screen pb-40 bg-[#FBFCFF]">
        {/* Luxury Faculty Header */}
        <div className="px-8 pt-16 pb-24 bg-white border-b border-border/40 rounded-b-[3.5rem] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -mr-32 -mt-32" />
          
          <div className="relative flex justify-between items-center mb-12">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-[1.8rem] bg-primary flex items-center justify-center shadow-2xl shadow-primary/20 transition-transform hover:rotate-6 duration-500">
                <span className="text-white font-extrabold font-heading text-3xl">P</span>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary italic leading-none mb-2">Distinguished Faculty</p>
                <h1 className="text-3xl font-extrabold text-foreground font-heading italic tracking-tighter leading-none">
                  Prof. Priya <span className="text-primary italic">Salunke</span>
                </h1>
              </div>
            </div>
            <button className="w-14 h-14 rounded-[1.5rem] bg-secondary flex items-center justify-center relative hover:scale-105 active:scale-95 transition-all shadow-inner">
              <Bell className="w-6 h-6 text-primary" />
              <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-destructive border-[3px] border-white shadow-lg" />
            </button>
          </div>

          {/* Status Console */}
          <div className="flex items-center justify-between p-7 rounded-[2.5rem] bg-secondary/80 backdrop-blur-md border border-primary/10 shadow-2xl shadow-black/[0.02]">
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${isAvailable ? "bg-success animate-pulse shadow-lg shadow-success/50" : "bg-muted"}`} />
              <div>
                <p className="text-[10px] text-primary/60 font-black uppercase tracking-widest leading-none mb-1.5">Consultation Status</p>
                <p className="font-extrabold text-foreground text-base italic tracking-tight">
                  {isAvailable ? "Actively Mentoring" : "Research Mode (Offline)"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsAvailable(!isAvailable)}
              className={`relative w-16 h-8 rounded-full transition-all duration-700 overflow-hidden border-2 ${isAvailable ? "bg-white border-primary/20" : "bg-muted border-border"}`}
            >
              <div 
                className={`absolute top-0.5 w-6 h-6 rounded-full shadow-2xl transition-all duration-700 flex items-center justify-center ${isAvailable ? "translate-x-9 bg-primary" : "translate-x-0.5 bg-white"}`}
              >
                {isAvailable && <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40 animate-ping" />}
              </div>
            </button>
          </div>
        </div>

        {/* Global Performance Grid */}
        <div className="px-6 -mt-12 grid grid-cols-2 gap-5 mb-14 relative z-20">
          <div className="bg-white rounded-[2.8rem] p-7 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.06)] border border-border/40 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div className="text-4xl font-extrabold text-foreground font-heading leading-none tracking-tighter mb-2">08</div>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] opacity-60">Elite Cohorts</p>
          </div>
          <div className="bg-primary rounded-[2.8rem] p-7 shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6 border border-white/20">
              <IndianRupee className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-extrabold text-white font-heading leading-none tracking-tighter mb-2">32.4K</div>
            <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em]">Weekly Yield</p>
          </div>
        </div>

        {/* Current Engagements */}
        <div className="px-6 mb-14">
          <div className="flex justify-between items-end mb-8 px-2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/50 font-heading">
              Live Engagements ⚓
            </h2>
            <button className="text-[10px] font-black text-primary uppercase tracking-widest border-b-2 border-primary/10">Archives</button>
          </div>
          <div className="space-y-6">
            {todaySessions.map((session) => (
              <div 
                key={session.id}
                className="bg-white border border-border/40 rounded-[2.5rem] p-6 flex items-center gap-6 shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                <div className="w-18 h-18 rounded-[1.5rem] bg-secondary flex items-center justify-center text-primary text-xl font-extrabold font-heading group-hover:bg-primary group-hover:text-white transition-all shadow-inner relative z-10">
                  {session.student.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 relative z-10">
                  <h3 className="text-xl font-extrabold text-foreground font-heading tracking-tight mb-1 leading-none">{session.student}</h3>
                  <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest leading-none mb-4">{session.subject}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 font-bold text-[10px] text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {session.time}
                    </div>
                    {session.type === "online" ? (
                      <span className="px-3 py-1 bg-primary/10 text-[9px] font-black text-primary uppercase tracking-widest rounded-lg">Cyber Lecture</span>
                    ) : (
                      <span className="px-3 py-1 bg-muted/60 text-[9px] font-black text-muted-foreground uppercase tracking-widest rounded-lg">In-Studio</span>
                    )}
                  </div>
                </div>
                <button className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/30 hover:scale-110 active:scale-95 transition-all relative z-10">
                   <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Analytic Insights */}
        <div className="px-8 mb-16">
          <div className="bg-white border border-border/40 rounded-[3rem] p-10 shadow-2xl shadow-black/[0.03] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/5 via-primary to-primary/5" />
            
            <div className="flex justify-between items-center mb-10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/50 mb-2">Yield Analytics</p>
                <h3 className="text-3xl font-extrabold text-foreground font-heading tracking-tight italic">Growth Curve</h3>
              </div>
              <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-[10px] font-black shadow-inner">
                    <TrendingUp className="w-4 h-4" />
                    +24.8%
                  </div>
                  <p className="text-[9px] font-bold text-muted-foreground mt-2 uppercase opacity-40">Monthly Velocity</p>
              </div>
            </div>
            
            <div className="h-48 w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={earningsData}>
                  <Tooltip 
                    contentStyle={{ borderRadius: '1.5rem', border: 'none', boxShadow: '0 25px 60px rgba(0,102,255,0.15)', background: '#fff', padding: '15px' }}
                    labelStyle={{ display: 'none' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#0066FF" 
                    strokeWidth={6} 
                    dot={{ fill: '#0066FF', r: 8, strokeWidth: 0 }}
                    activeDot={{ r: 10, stroke: '#fff', strokeWidth: 4 }}
                  />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 800 }} />
                  <YAxis hide />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <button className="w-full mt-10 py-5 bg-secondary text-primary rounded-[1.8rem] text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all group active:scale-95 shadow-inner">
              Intelligence Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      <BottomNav role="teacher" />
    </MobileContainer>
  );
}
