import { MobileContainer } from "../../components/MobileContainer";
import { BottomNav } from "../../components/BottomNav";
import { Search } from "lucide-react";

const conversations = [
  { id: "1", student: "Arjun Patel", lastMessage: "Thanks for the session!", time: "10m ago", unread: 2 },
  { id: "2", student: "Sneha Reddy", lastMessage: "Can we reschedule tomorrow's class?", time: "1h ago", unread: 1 },
  { id: "3", student: "Rahul Kumar", lastMessage: "Got it, thank you!", time: "2h ago", unread: 0 },
];

export function TeacherMessages() {
  return (
    <MobileContainer>
      <div className="h-full bg-[#F8FAFC] flex flex-col pb-32">
        <div className="bg-gradient-to-br from-[#7C3AED] via-[#4F46E5] to-[#2563EB] px-6 pt-12 pb-6 rounded-b-[32px]">
          <h1 className="text-white text-2xl font-bold mb-4">Messages</h1>
          <div className="bg-white rounded-2xl px-5 py-3 flex items-center gap-3">
            <Search className="w-5 h-5 text-[#475569]" />
            <input
              type="text"
              placeholder="Search messages..."
              className="flex-1 outline-none text-[#0F172A] placeholder:text-[#475569]"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              className="w-full bg-white rounded-2xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-full flex items-center justify-center text-xl relative">
                👨‍🎓
                {conv.unread > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#EF4444] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {conv.unread}
                  </div>
                )}
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-[#0F172A]">{conv.student}</h4>
                <p className="text-sm text-[#475569] truncate">{conv.lastMessage}</p>
              </div>
              <span className="text-xs text-[#475569]">{conv.time}</span>
            </button>
          ))}
        </div>
      </div>
      <BottomNav type="teacher" />
    </MobileContainer>
  );
}
