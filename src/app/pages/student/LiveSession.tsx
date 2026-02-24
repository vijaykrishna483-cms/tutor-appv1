import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { MobileContainer } from "../../components/MobileContainer";
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  PhoneOff, 
  MessageSquare, 
  Users, 
  ShieldCheck, 
  Clock, 
  AlertCircle,
  CheckCircle2,
  Lock
} from "lucide-react";

const BG_IMAGE = "https://i.pinimg.com/736x/31/64/ec/3164ec5cae289fa56665b2f358ae996b.jpg";

export function LiveSession() {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [presence, setPresence] = useState({ tutor: true, student: true });

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndSession = () => {
    setIsVerifying(true);
  };

  const confirmCompletion = () => {
    // Lead to feedback/confirmation
    navigate("/student/dashboard");
  };

  return (
    <MobileContainer>
      <div className="min-h-screen bg-[#0A0A0B] flex flex-col relative overflow-hidden">
        {/* Dynamic Background Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-screen" style={{ backgroundImage: `url(${BG_IMAGE})`, backgroundSize: 'cover' }} />

        {/* Tactical Header */}
        <div className="relative z-10 px-6 pt-12 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Live • Encrypted</span>
            </div>
            
            <div className="flex items-center gap-3 bg-primary/20 backdrop-blur-md px-5 py-2 rounded-2xl border border-primary/30">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-black text-white font-heading italic tracking-tighter">{formatTime(timeLeft)}</span>
            </div>
        </div>

        {/* Video Matrix */}
        <div className="flex-1 px-4 py-6 flex flex-col gap-4 relative z-10">
            {/* Primary View (Tutor) */}
            <div className="flex-[3] bg-[#1C1C1E] rounded-[2.5rem] relative overflow-hidden border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/e4/b2/6f/e4b26fba826504333eef2dd021a7de66.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none mb-1">Lead Faculty</p>
                        <h3 className="text-lg font-extrabold text-white font-heading italic tracking-tighter">Dr. Priya Sharma</h3>
                    </div>
                </div>

                {/* Connection Strength */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 bg-black/20 backdrop-blur-md rounded-full border border-white/5">
                    <div className="flex gap-0.5 items-end h-3">
                        <div className="w-1 h-3 bg-success rounded-full" />
                        <div className="w-1 h-2.5 bg-success rounded-full" />
                        <div className="w-1 h-2 bg-success rounded-full" />
                        <div className="w-1 h-1.5 bg-success rounded-full" />
                    </div>
                    <span className="text-[8px] font-black text-white/60 uppercase">High Fidelity</span>
                </div>
            </div>

            {/* Sub View (Student) */}
            <div className="flex-[2] flex gap-4">
                <div className="flex-1 bg-[#2C2C2E] rounded-[2.2rem] relative overflow-hidden border border-white/5">
                    {isVideoOff ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <VideoOff className="w-10 h-10 text-white/20" />
                        </div>
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3A3A3C] to-[#1C1C1E]" />
                    )}
                    <div className="absolute bottom-4 left-4">
                        <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">You (Candidate)</p>
                    </div>
                </div>
                
                {/* Tactical Tools Sidebar */}
                <div className="w-20 flex flex-col gap-3">
                    <button className="flex-1 rounded-[1.8rem] bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <MessageSquare className="w-6 h-6 text-white" />
                    </button>
                    <button className="flex-1 rounded-[1.8rem] bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <Users className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>
        </div>

        {/* Integrated Control Console */}
        <div className="relative z-20 px-4 pb-12">
            <div className="bg-[#1C1C1E]/80 backdrop-blur-3xl border border-white/10 rounded-[2.8rem] p-4 flex items-center justify-between shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                <div className="flex gap-3">
                    <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className={`w-16 h-16 rounded-[1.8rem] flex items-center justify-center transition-all ${isMuted ? "bg-destructive/20 text-destructive border border-destructive/30" : "bg-white/5 text-white border border-white/10"}`}
                    >
                        {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                    </button>
                    <button 
                        onClick={() => setIsVideoOff(!isVideoOff)}
                        className={`w-16 h-16 rounded-[1.8rem] flex items-center justify-center transition-all ${isVideoOff ? "bg-destructive/20 text-destructive border border-destructive/30" : "bg-white/5 text-white border border-white/10"}`}
                    >
                        {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
                    </button>
                </div>

                <button 
                    onClick={handleEndSession}
                    className="flex-1 ml-4 h-16 rounded-[1.8rem] bg-destructive text-white font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 shadow-2xl shadow-destructive/20 active:scale-95 transition-all"
                >
                    <PhoneOff className="w-5 h-5" />
                    Terminate Class
                </button>
            </div>
        </div>

        {/* Fulfillment Verification Overlay (Product Manager Solution) */}
        {isVerifying && (
            <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-8 animate-in fade-in duration-500">
                <div className="w-full max-w-[360px] bg-[#1C1C1E] border border-white/10 rounded-[3rem] p-10 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none rotate-45" style={{ backgroundImage: `url(${BG_IMAGE})`, backgroundSize: 'cover' }} />
                    
                    <div className="w-20 h-20 rounded-[2rem] bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/20">
                        <Lock className="w-10 h-10 text-primary" />
                    </div>

                    <h2 className="text-2xl font-extrabold text-white font-heading italic tracking-tighter mb-4 leading-tight">Secure Finalization Protocol</h2>
                    <p className="text-sm font-medium text-white/60 leading-relaxed mb-10">
                        To protect the academic integrity and prevent billing fraud, please confirm that the session objective was met.
                    </p>

                    <div className="space-y-4 relative z-10">
                        <button 
                            onClick={confirmCompletion}
                            className="w-full py-5 bg-success text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-success/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                        >
                            <CheckCircle2 className="w-5 h-5" />
                            Verify Completion
                        </button>
                        
                        <button 
                            onClick={() => setIsVerifying(false)}
                            className="w-full py-5 bg-white/5 text-white/40 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors"
                        >
                            Back to Masterclass
                        </button>

                        <div className="pt-6 flex items-center justify-center gap-2 opacity-30">
                            <AlertCircle className="w-4 h-4 text-warning" />
                            <span className="text-[8px] font-black uppercase tracking-widest text-warning">Dispute window: 24h active</span>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </MobileContainer>
  );
}
