import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { AddUser } from "../components/Admin/User/AddUser";
import { AppContent } from "../components/Admin/Dashboard/AppContent";
import { DashContent } from "../components/Employees/Dashboard/DashContent";
import { Profile } from "../components/Employees/Dashboard/Profile";
import { LeaApp } from "../components/Employees/Leave/LeaApp";
import { Employees } from "../components/Admin/User/Employeees";
import AppLayout from "../common/AppLayout";
import { AttendanceHistory } from "../components/Admin/Attendance/AttendanceHistory";

export const SitMap = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <AppContent />
            </AppLayout>
          }
        />
        <Route
          path="/dashboard/add-employee"
          element={
            <AppLayout>
              <AddUser />
            </AppLayout>
          }
        />
        <Route
          path="/dashboard/employees"
          element={
            <AppLayout>
              <Employees />
            </AppLayout>
          }
        />
        <Route
          path="/dashboard/attendence-report"
          element={
            <AppLayout>
              <AttendanceHistory />
            </AppLayout>
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  );
};
