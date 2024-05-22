import React, { useEffect, useState } from "react";
import { fetchAllUserAttendance } from "../../../services/attendenceApis/attendence";
import { User } from "../../types";
import { Divider, Table, Typography } from "antd";
import { fetchUsers } from "../../../services/userApis/userApis";
const { Title } = Typography;
type PropUser = {
  user: string;
  date: Date;
};
export const AttendanceHistory = () => {
  const [attendanceData, setAttendanceData] = useState<PropUser[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await fetchAllUserAttendance();
        const usersData = await fetchUsers();
        setUsers(usersData);
        console.log(usersData);
        console.log("fetched data", response.data);
        setAttendanceData(response.data);
      } catch (error) {
        console.error("Error fetching user attendance:", error);
      }
    };

    fetchAttendanceData();
  }, []);
  const merged = users.reduce((acc, user) => {
    const todayDate = new Date().toISOString().substring(0, 10);
    console.log(todayDate);
    const attendance = attendanceData.find(
      (att) =>
        att?.user === user._id &&
        att?.date.toLocaleString().substring(0, 10) === todayDate
    );
    if (attendance) {
      acc.push({ ...user, ...attendance });
    }
    return acc;
  }, [] as User[]);
  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "name",
    },
    {
      title: "CheckedIn",
      dataIndex: "time_in",
      key: "time_in",
    },
    {
      title: "CheckedOut",
      dataIndex: "time_out",
      key: "time_out",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  return (
    <div>
      {" "}
      <div className="flex justify-between bg-slate-200 p-1 rounded-md w-full">
        <div className="border-l-4 border-secondary-color h-9 flex items-center">
          <Title level={5} className="ml-2">
            Attendance History
          </Title>
        </div>
      </div>
      <Divider />
      <Table dataSource={merged} columns={columns} />;
    </div>
  );
};
