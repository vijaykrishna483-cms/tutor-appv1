import { useNavigate } from "react-router";
import { MobileContainer } from "../../components/MobileContainer";
import { Clock, CheckCircle2, FileText, Home } from "lucide-react";
import { motion } from "motion/react";

export function ApprovalPending() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ backgroundColor: "#F8FAFC" }}>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-8"
        >
          <div 
            className="w-32 h-32 rounded-full flex items-center justify-center relative"
            style={{ background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)" }}
          >
            <Clock className="w-16 h-16 text-white" strokeWidth={2} />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 rounded-full"
              style={{ border: "4px solid #F59E0B", opacity: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <div 
            className="inline-block px-4 py-2 rounded-full mb-4"
            style={{ backgroundColor: "#FEF3C7", color: "#D97706" }}
          >
            <span className="text-sm font-semibold">Under Review</span>
          </div>

          <h1 className="text-3xl font-semibold mb-3" style={{ color: "#0F172A" }}>
            Profile Submitted!
          </h1>
          
          <p className="text-lg mb-8 max-w-sm mx-auto" style={{ color: "#475569" }}>
            Our team is reviewing your profile and credentials. You'll hear from us within 24-48 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-sm space-y-4 mb-12"
        >
          <div 
            className="bg-white rounded-2xl p-5"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
          >
            <h3 className="font-semibold mb-4" style={{ color: "#0F172A" }}>
              What happens next?
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#DBEAFE" }}
                >
                  <FileText className="w-5 h-5" style={{ color: "#2563EB" }} />
                </div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: "#0F172A" }}>
                    Document Verification
                  </h4>
                  <p className="text-sm" style={{ color: "#475569" }}>
                    We'll verify your certificates and qualifications
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#DBEAFE" }}
                >
                  <CheckCircle2 className="w-5 h-5" style={{ color: "#2563EB" }} />
                </div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: "#0F172A" }}>
                    Profile Review
                  </h4>
                  <p className="text-sm" style={{ color: "#475569" }}>
                    Our team will review your teaching profile
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#D1FAE5" }}
                >
                  <CheckCircle2 className="w-5 h-5" style={{ color: "#10B981" }} />
                </div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: "#0F172A" }}>
                    Get Started
                  </h4>
                  <p className="text-sm" style={{ color: "#475569" }}>
                    Once approved, you can start accepting students
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="p-4 rounded-2xl"
            style={{ backgroundColor: "#EDE9FE" }}
          >
            <p className="text-sm text-center" style={{ color: "#7C3AED" }}>
              💡 You'll receive an email notification once your profile is approved
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="w-full max-w-sm space-y-3"
        >
          <button
            onClick={() => navigate("/teacher/dashboard")}
            className="w-full py-4 rounded-2xl font-semibold border-2 flex items-center justify-center gap-2"
            style={{ 
              borderColor: "#7C3AED",
              color: "#7C3AED",
              backgroundColor: "white",
            }}
          >
            <Home className="w-5 h-5" />
            Preview Dashboard
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 rounded-xl font-medium"
            style={{ color: "#475569" }}
          >
            Back to Login
          </button>
        </motion.div>
      </div>
    </MobileContainer>
  );
}
