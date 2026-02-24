import { useNavigate } from "react-router";
import { MobileContainer } from "../../components/MobileContainer";
import { CheckCircle, Calendar, Home, Sparkles, Share2, Video } from "lucide-react";
import { motion } from "motion/react";

export function PaymentConfirmation() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="min-h-screen bg-[#FBFCFF] p-8 flex flex-col justify-center relative overflow-hidden">
        {/* Luxury Background Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-success/5 rounded-full blur-[100px] -ml-32 -mb-32" />

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, duration: 0.8 }}
            className="mb-12 relative"
          >
            <div 
              className="w-40 h-40 rounded-[3rem] bg-white shadow-2xl shadow-success/20 flex items-center justify-center border-2 border-success/10"
            >
              <CheckCircle className="w-24 h-24 text-success" strokeWidth={1} />
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center border-4 border-white shadow-xl shadow-primary/30 animate-bounce">
                <Sparkles className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center w-full"
          >
            <p className="text-[10px] font-black text-success uppercase tracking-[0.6em] mb-4 italic">Authorization Successful</p>
            <h1 className="text-4xl font-extrabold text-foreground font-heading tracking-tighter italic leading-none mb-6">
              Session <br/><span className="text-primary italic">Secured</span>
            </h1>
            <p className="text-sm font-medium text-muted-foreground/60 leading-relaxed mb-10 max-w-[280px] mx-auto">
              Your engagement with Dr. Priya Sharma is now finalized and logged in the global ledger.
            </p>

            <div 
              className="bg-white rounded-[2.8rem] p-8 mb-10 border border-border/40 shadow-2xl shadow-black/[0.04] text-left relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16" />
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest leading-none">Status</span>
                  <span className="text-[10px] font-black text-success uppercase tracking-widest px-3 py-1 bg-success/10 rounded-full">Confirmed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest leading-none">Consultation</span>
                  <span className="text-sm font-extrabold text-foreground italic">Physics • Mechanics</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest leading-none">Temporal Window</span>
                  <span className="text-sm font-extrabold text-foreground italic">26 Feb, 04:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest leading-none">Yield Exchange</span>
                  <span className="text-xl font-extrabold text-primary font-heading italic">₹800</span>
                </div>
              </div>
            </div>

            <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest mb-12">
              A digital receipt has been transmitted <br/>to your verified contact point.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="w-full space-y-4"
          >
            <button
              onClick={() => navigate("/student/session/1")}
              className="w-full py-6 rounded-[2rem] bg-primary text-white font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <Video className="w-5 h-5 flex-shrink-0" />
              Join Masterclass Now
            </button>

            <button
              className="w-full py-6 rounded-[2rem] bg-secondary text-primary font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 hover:bg-primary/10 transition-all border border-primary/10"
            >
              <Calendar className="w-5 h-5 flex-shrink-0" />
              Sync to Calendar
            </button>
            
            <button
              onClick={() => navigate("/student/dashboard")}
              className="w-full py-6 rounded-[2rem] bg-white border border-border/40 text-muted-foreground font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 hover:bg-secondary transition-all"
            >
              <Home className="w-5 h-5 flex-shrink-0" />
              Return to Hub
            </button>

            <button className="flex items-center justify-center gap-2 mx-auto pt-6 text-[9px] font-black uppercase tracking-[0.4em] text-primary/40 hover:text-primary transition-colors">
                <Share2 className="w-3.5 h-3.5" />
                Signal Confirmation
            </button>
          </motion.div>
        </div>
      </div>
    </MobileContainer>
  );
}
