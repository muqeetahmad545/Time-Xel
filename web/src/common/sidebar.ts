import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

export const employeeSidebar = [
  {
    key: "1",
    icon: UserOutlined,
    label: "Dashboard",
    path: "/employee/dashboard",
  },
  {
    key: "2",
    icon: VideoCameraOutlined,
    label: "Profile",
    path: "/employee/profile",
  },
  {
    key: "3",
    icon: UploadOutlined,
    label: "Leave Applications",
    path: "/employee/leave-applications",
  },
];

export const adminSidebar = [
    {
      key: "1",
      icon: "UserOutlined",
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      key: "2",
      icon: "VideoCameraOutlined",
      label: "Add Employee",
      path: "/dashboard/add-employee",
    },
    {
      key: "3",
      icon: "UploadOutlined",
      label: "Employees",
      path: "/dashboard/employees",
    },
    {
      key: "4",
      icon: "UploadOutlined",
      label: "Attendence Report",
      path: "/dashboard/attendence-report",
    },
    {
      key: "5",
      icon: "UploadOutlined",
      label: "Leave Applications",
      path: "/dashboard/leave-applications",
    },
  ]