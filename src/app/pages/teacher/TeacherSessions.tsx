import { MobileContainer } from "../../components/MobileContainer";
import { BottomNav } from "../../components/BottomNav";
import { Calendar, Clock, Video } from "lucide-react";

const sessions = [
  { id: "1", student: "Arjun Patel", subject: "Mathematics", time: "04:00 PM", date: "Today", status: "upcoming" },
  { id: "2", student: "Sneha Reddy", subject: "Physics", time: "06:00 PM", date: "Today", status: "upcoming" },
  { id: "3", student: "Rahul Kumar", subject: "Chemistry", time: "03:00 PM", date: "Tomorrow", status: "scheduled" },
];

export function TeacherSessions() {
  return (
    <MobileContainer>
      <div className="h-full bg-[#F8FAFC] overflow-y-auto pb-32">
        <div className="bg-gradient-to-br from-[#7C3AED] via-[#4F46E5] to-[#2563EB] px-6 pt-12 pb-8 rounded-b-[32px]">
          <h1 className="text-white text-2xl font-bold">My Sessions</h1>
          <p className="text-white/90 mt-1">Manage your upcoming classes</p>
        </div>

        <div className="px-6 py-6 space-y-4">
          {sessions.map((session) => (
            <div key={session.id} className="bg-white rounded-3xl p-5 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-full flex items-center justify-center text-xl">
                    👨‍🎓
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A]">{session.student}</h4>
                    <p className="text-sm text-[#475569]">{session.subject}</p>
                  </div>
                </div>
                <span className="text-xs bg-[#DBEAFE] text-[#2563EB] px-3 py-1 rounded-full font-medium">
                  {session.status}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#475569] mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{session.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{session.time}</span>
                </div>
              </div>
              {session.status === "upcoming" && (
                <button className="w-full bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white py-3 rounded-xl font-semibold">
                  Start Session
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <BottomNav type="teacher" />
    </MobileContainer>
  );
}
