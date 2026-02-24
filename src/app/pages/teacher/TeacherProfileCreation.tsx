import { useState } from "react";
import { useNavigate } from "react-router";
import { MobileContainer } from "../../components/MobileContainer";
import { ChevronLeft, Upload, Plus, X } from "lucide-react";

const subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Hindi", "Computer Science"];
const boards = ["CBSE", "ICSE", "State Board", "IB", "IGCSE"];
const classes = ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"];

export function TeacherProfileCreation() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedBoards, setSelectedBoards] = useState<string[]>([]);
  const [hourlyRate, setHourlyRate] = useState("800");
  const navigate = useNavigate();

  const toggleItem = (item: string, list: string[], setter: (val: string[]) => void) => {
    if (list.includes(item)) {
      setter(list.filter(i => i !== item));
    } else {
      setter([...list, item]);
    }
  };

  return (
    <MobileContainer>
      <div className="min-h-screen bg-white pb-32">
        {/* Header */}
        <div 
          className="px-6 pt-12 pb-6"
          style={{ background: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)" }}
        >
          <button onClick={() => navigate(-1)} className="mb-4">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-semibold text-white mb-2">
            Create Your Profile
          </h1>
          <p className="text-white/80">
            Tell us about your teaching expertise
          </p>
        </div>

        <div className="px-6 py-6 space-y-8">
          {/* Profile Photo */}
          <div>
            <label className="block mb-3 font-semibold" style={{ color: "#0F172A" }}>
              Profile Photo
            </label>
            <div className="flex items-center gap-4">
              <div 
                className="w-24 h-24 rounded-2xl flex items-center justify-center border-2 border-dashed"
                style={{ borderColor: "#E2E8F0", backgroundColor: "#F8FAFC" }}
              >
                <Upload className="w-8 h-8" style={{ color: "#94A3B8" }} />
              </div>
              <button
                className="px-6 py-2 rounded-xl font-medium"
                style={{ backgroundColor: "#EDE9FE", color: "#7C3AED" }}
              >
                Upload Photo
              </button>
            </div>
          </div>

          {/* About */}
          <div>
            <label className="block mb-3 font-semibold" style={{ color: "#0F172A" }}>
              About You
            </label>
            <textarea
              placeholder="Tell students about your teaching experience and qualifications..."
              rows={4}
              className="w-full px-4 py-3 rounded-2xl border outline-none resize-none"
              style={{ 
                borderColor: "#E2E8F0",
                backgroundColor: "#F8FAFC",
                color: "#0F172A",
              }}
            />
          </div>

          {/* Subjects */}
          <div>
            <label className="block mb-3 font-semibold" style={{ color: "#0F172A" }}>
              Subjects You Teach
            </label>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => {
                const isSelected = selectedSubjects.includes(subject);
                return (
                  <button
                    key={subject}
                    onClick={() => toggleItem(subject, selectedSubjects, setSelectedSubjects)}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                    style={{
                      backgroundColor: isSelected ? "#DBEAFE" : "#F8FAFC",
                      color: isSelected ? "#2563EB" : "#475569",
                      border: isSelected ? "2px solid #2563EB" : "2px solid #E2E8F0",
                    }}
                  >
                    {isSelected && <X className="w-3 h-3 inline mr-1" />}
                    {subject}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Boards */}
          <div>
            <label className="block mb-3 font-semibold" style={{ color: "#0F172A" }}>
              Boards/Curricula
            </label>
            <div className="flex flex-wrap gap-2">
              {boards.map((board) => {
                const isSelected = selectedBoards.includes(board);
                return (
                  <button
                    key={board}
                    onClick={() => toggleItem(board, selectedBoards, setSelectedBoards)}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                    style={{
                      backgroundColor: isSelected ? "#EDE9FE" : "#F8FAFC",
                      color: isSelected ? "#7C3AED" : "#475569",
                      border: isSelected ? "2px solid #7C3AED" : "2px solid #E2E8F0",
                    }}
                  >
                    {isSelected && <X className="w-3 h-3 inline mr-1" />}
                    {board}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-3 font-semibold" style={{ color: "#0F172A" }}>
              Years of Experience
            </label>
            <input
              type="number"
              placeholder="e.g., 5"
              className="w-full px-4 py-3 rounded-2xl border outline-none"
              style={{ 
                borderColor: "#E2E8F0",
                backgroundColor: "#F8FAFC",
                color: "#0F172A",
              }}
            />
          </div>

          {/* Hourly Rate */}
          <div>
            <label className="block mb-3 font-semibold" style={{ color: "#0F172A" }}>
              Hourly Rate (₹)
            </label>
            <div className="relative">
              <span 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-lg"
                style={{ color: "#475569" }}
              >
                ₹
              </span>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl border outline-none text-lg"
                style={{ 
                  borderColor: "#E2E8F0",
                  backgroundColor: "#F8FAFC",
                  color: "#0F172A",
                }}
              />
            </div>
            <p className="text-sm mt-2" style={{ color: "#475569" }}>
              Average rate for your experience: ₹600-1000/hour
            </p>
          </div>

          {/* Certificates */}
          <div>
            <label className="block mb-3 font-semibold" style={{ color: "#0F172A" }}>
              Certificates & Qualifications
            </label>
            <button
              className="w-full py-4 rounded-2xl border-2 border-dashed flex items-center justify-center gap-2 font-medium"
              style={{ borderColor: "#E2E8F0", color: "#475569" }}
            >
              <Plus className="w-5 h-5" />
              Upload Certificates
            </button>
          </div>

          {/* Location */}
          <div>
            <label className="block mb-3 font-semibold" style={{ color: "#0F172A" }}>
              Teaching Mode
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 rounded-2xl border cursor-pointer" style={{ borderColor: "#E2E8F0" }}>
                <input type="checkbox" className="w-5 h-5 accent-[#4F46E5]" />
                <div>
                  <div className="font-medium" style={{ color: "#0F172A" }}>Online</div>
                  <div className="text-sm" style={{ color: "#475569" }}>Teach students remotely</div>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-2xl border cursor-pointer" style={{ borderColor: "#E2E8F0" }}>
                <input type="checkbox" className="w-5 h-5 accent-[#7C3AED]" />
                <div>
                  <div className="font-medium" style={{ color: "#0F172A" }}>In-Person</div>
                  <div className="text-sm" style={{ color: "#475569" }}>Teach at your location or student's place</div>
                </div>
              </label>
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="block mb-3 font-semibold" style={{ color: "#0F172A" }}>
              Weekly Availability
            </label>
            <div className="grid grid-cols-7 gap-2">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                <button
                  key={i}
                  className="aspect-square rounded-xl font-semibold"
                  style={{
                    backgroundColor: i < 5 ? "#DBEAFE" : "#F8FAFC",
                    color: i < 5 ? "#2563EB" : "#94A3B8",
                    border: i < 5 ? "2px solid #2563EB" : "2px solid #E2E8F0",
                  }}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div 
          className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t px-6 py-4"
          style={{ borderColor: "#E2E8F0", boxShadow: "0 -4px 16px rgba(0,0,0,0.06)" }}
        >
          <button
            onClick={() => navigate("/teacher/approval-pending")}
            className="w-full py-4 rounded-2xl text-white font-semibold"
            style={{ 
              background: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
              boxShadow: "0 8px 24px rgba(124, 58, 237, 0.25)",
            }}
          >
            Submit for Approval
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
