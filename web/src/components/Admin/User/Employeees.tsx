import React, { useEffect, useState } from "react";
import axios from "axios";
import { Divider, Table, Typography } from "antd";
import { User } from "../../types";
import { fetchUsers } from "../../../services/userApis/userApis";
const { Title } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "firstName",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Designation",
    dataIndex: "designation",
    key: "role",
  },
  {
    title: "CNIC",
    dataIndex: "cnic",
    key: "role",
  },
  {
    title: "Joining Date",
    dataIndex: "joiningDate",
    key: "role",
  },

  // Add other columns as needed
];

export const Employees: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      const usersData = await fetchUsers(); // Call the fetchUsers function
      setUsers(usersData);
    };

    fetchUsersData();
  }, []);

  return (
    <div>
      <div className="flex justify-between bg-slate-200 p-1 rounded-md w-full">
        <div className="border-l-4 border-secondary-color h-9 flex items-center">
          <Title level={5} className="ml-2">
            Employee Details
          </Title>
        </div>
      </div>
      <Divider />
      <Table dataSource={users} columns={columns} />;
    </div>
  );
};
