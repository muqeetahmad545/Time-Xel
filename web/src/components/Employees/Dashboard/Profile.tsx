import { Typography, Divider, Row, Avatar, Col, Table, Card } from "antd";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchUserData } from "../../../services/userApis/userApis";
import { UserData } from "../../types";
import { fetchUserAttendance } from "../../../services/attendenceApis/attendence";
const { Title } = Typography;

export const Profile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUserData();
      setUserData(userData);
      console.log(userData);
    };

    fetchData();
  }, []);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await fetchUserAttendance();
        console.log("fetched data",response.data);
        setAttendanceData(response.data);
      } catch (error) {
        console.error("Error fetching user attendance:", error);
      }
    };

    fetchAttendanceData();
  }, []);
  console.log(attendanceData);

  const columns = [
    {
      title: "Attendance History",
      dataIndex: "data",
      key: "data",
      render: (text: string, record: any) => (
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card className="bg-slate-300 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="flex items-center">
                  <FaRegClock className="mr-1" />
                  {record.date.toLocaleString().slice(0, 10)}
                </span>
                <div className="border-2 border-white bg-white font-semibold text-slate-500 rounded-full p-1">
                  {record.status}
                </div>
              </div>

              <div className="flex justify-between items-center mb-2">
                <span>Check In Time</span>
                <span>Check Out Time</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span>{record.time_in.toLocaleString().slice(11, 19)}</span>
                <span>{record.time_out.toLocaleString().slice(11, 19)}</span>
              </div>
            </Card>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <div>
      <div className="bg-slate-200 pb-4">
        <div className="flex justify-between bg-slate-200 p-1 rounded-md w-full">
          <div className="border-l-4 border-secondary-color h-9 flex items-center">
            <Title level={5} className="ml-2">
              Employee Details
            </Title>
          </div>
        </div>
        <Divider />
        <div className="flex p-2">
          <Avatar size={100} className="!text-5xl">
            {userData?.firstName.slice(0, 1)}
          </Avatar>
          <div className="w-2/5 ml-2">
            <Title level={2}>{userData?.firstName}</Title>
            <Row className="flex justify-between text-slate-400 font-semibold">
              <span>ROLE</span>
              <span>Designation</span>
              <span>EMAIL ADDRESS</span>
            </Row>
            <Row className="flex justify-between mt-4 font-semibold">
              <span>{userData?.role}</span>
              <span>{userData?.designation}</span>
              <span>{userData?.email}</span>
            </Row>
          </div>
        </div>
        <Row className="flex justify-around mt-4">
          <Col span={5}>
            <div className="mr-2 bg-slate-300 flex justify-evenly items-center p-5 rounded-lg">
              <Avatar>
                <FaArrowRightToBracket />
              </Avatar>

              <div>
                <Title level={5}>3</Title>
                <span>Total Attendence</span>
              </div>
            </div>
          </Col>
          <Col span={5}>
            <div className="mr-2 bg-slate-300 flex justify-evenly  items-center p-5 rounded-lg">
              <Avatar>
                <FaArrowRightToBracket />
              </Avatar>
              <div>
                <Title level={5}>1</Title>
                <span>Pending Leaves Requests</span>
              </div>
            </div>
          </Col>
          <Col span={5}>
            <div className="mr-2 bg-slate-300 flex justify-evenly  items-center p-5 rounded-lg">
              <Avatar>
                <FaArrowRightToBracket />
              </Avatar>

              <div>
                <Title level={5}>...</Title>
                <span>Total Leaves</span>
              </div>
            </div>
          </Col>
          <Col span={5}>
            <div className="mr-2 bg-slate-300 flex justify-evenly items-center p-5 rounded-lg">
              <Avatar>
                <FaArrowRightToBracket />
              </Avatar>

              <div>
                <Title level={5}>...</Title>
                <span>Totsl Absents</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* <div className="bg-slate-200 pb-4 mt-2">
        <div className="flex justify-between bg-slate-200 p-1 rounded-md w-full">
          <div className="border-l-4 border-secondary-color h-9 flex items-center">
            <Title level={5} className="ml-2">
              Attendence History
            </Title>
          </div>
        </div>
        <Divider /> */}
        {/* <Row className="flex justify-around">
          <Col span={6}>
            <div className="mr-2 bg-slate-300 p-2 rounded-lg">
              <div className="flex justify-between items-center !w-full mb-4">
                <span className="flex items-center">
                  <FaRegClock className="mr-1" />
                  28 May 2024
                </span>
                <div className="border-2 border-white bg-white font-semibold text-slate-500 rounded-full p-1">
                  Pending
                </div>
              </div>

              <div className="flex justify-between items-center w-full textslate=500 mb-4">
                <span>Check In Time</span>
                <span>Check Out Time</span>
              </div>
              <div className="flex justify-between items-center !w-full font-bold">
                <span>9: 00 A.M</span>
                <span>6: 00 P.M</span>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="mr-2 bg-slate-300 p-2 rounded-lg">
              <div className="flex justify-between items-center !w-full mb-4">
                <span className="flex items-center">
                  <FaRegClock className="mr-1" />
                  28 May 2024
                </span>
                <div className="border-2 border-white bg-white font-semibold text-slate-500 rounded-full p-1">
                  Pending
                </div>
              </div>

              <div className="flex justify-between items-center w-full textslate=500 mb-4">
                <span>Check In Time</span>
                <span>Check Out Time</span>
              </div>
              <div className="flex justify-between items-center !w-full font-bold">
                <span>9: 00 A.M</span>
                <span>6: 00 P.M</span>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="mr-2 bg-slate-300 p-2 rounded-lg">
              <div className="flex justify-between items-center !w-full mb-4">
                <span className="flex items-center">
                  <FaRegClock className="mr-1" />
                  28 May 2024
                </span>
                <div className="border-2 border-white bg-white font-semibold text-slate-500 rounded-full p-1">
                  Pending
                </div>
              </div>

              <div className="flex justify-between items-center w-full textslate=500 mb-4">
                <span>Check In Time</span>
                <span>Check Out Time</span>
              </div>
              <div className="flex justify-between items-center !w-full font-bold">
                <span>9: 00 A.M</span>
                <span>6: 00 P.M</span>
              </div>
            </div>
          </Col>
        </Row> */}
        <Table className="mt-4"
          dataSource={attendanceData}
          columns={columns}
          bordered
        />
        ;
      </div>
    // </div>
  );
};
