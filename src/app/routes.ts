import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Onboarding } from "./pages/student/Onboarding";
import { Login } from "./pages/student/Login";
import { StudentDashboard } from "./pages/student/StudentDashboard";
import { SubjectSelection } from "./pages/student/SubjectSelection";
import { MapView } from "./pages/student/MapView";
import { TutorProfile } from "./pages/student/TutorProfile";
import { Chat } from "./pages/student/Chat";
import { Booking } from "./pages/student/Booking";
import { PaymentConfirmation } from "./pages/student/PaymentConfirmation";
import { TeacherOnboarding } from "./pages/teacher/TeacherOnboarding";
import { TeacherProfileCreation } from "./pages/teacher/TeacherProfileCreation";
import { ApprovalPending } from "./pages/teacher/ApprovalPending";
import { TeacherDashboard } from "./pages/teacher/TeacherDashboard";

import { Profile } from "./pages/student/Profile";
import { TeacherProfile } from "./pages/teacher/TeacherProfile";
import { LiveSession } from "./pages/student/LiveSession";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Root },
      { path: "onboarding", Component: Onboarding },
      { path: "login", Component: Login },
      { path: "student/dashboard", Component: StudentDashboard },
      { path: "student/select-subject", Component: SubjectSelection },
      { path: "student/map", Component: MapView },
      { path: "student/tutor/:id", Component: TutorProfile },
      { path: "student/chat/:id", Component: Chat },
      { path: "student/booking/:id", Component: Booking },
      { path: "student/confirmation", Component: PaymentConfirmation },
      { path: "student/session/:id", Component: LiveSession },
      { path: "student/profile", Component: Profile },
      { path: "teacher/onboarding", Component: TeacherOnboarding },
      { path: "teacher/create-profile", Component: TeacherProfileCreation },
      { path: "teacher/approval-pending", Component: ApprovalPending },
      { path: "teacher/dashboard", Component: TeacherDashboard },
      { path: "teacher/profile", Component: TeacherProfile },
    ],
  },
]);