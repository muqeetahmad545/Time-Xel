import { Typography, DatePicker, Divider, Row, Card, message } from "antd";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { LineChart } from "@mui/x-charts/LineChart";
import { useEffect, useState } from "react";
import {
  CheckInApi,
  CheckOutApi,
  fetchUserAttendance,
} from "../../../services/attendenceApis/attendence";
import { AttendanceRecord, UserData } from "../../types";
import { fetchUserData } from "../../../services/userApis/userApis";
const { Title } = Typography;
function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
const data = [{ value: 5 }];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 32,
}));

export const DashContent = () => {
  const [hourCard, setHourCard] = useState(false);
  const [action, setAction] = useState<number>(0);
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord | null>(
    null
  );
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [checkIn, setCheckIn] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUserAttendance();
      const userDetail = await fetchUserData();
      console.log(userDetail);
      setUserData(userDetail);
      const latRes = response.data[response.data.length - 1];
      const todayDate = new Date().toISOString().substring(0, 10);
      console.log(todayDate);
      if (Array.isArray(response.data) && response.data.length > 0) {
        console.log(latRes);
        if (
          latRes?.time_in &&
          latRes?.time_in.toLocaleString().slice(0, 10) === todayDate
        ) {
          setCheckIn(true);
          setHourCard(true);
        }
        if (latRes?.time_out) {
          setHourCard(false);
        }
        console.log(
          latRes?.time_in.toLocaleString().slice(0, 10) === todayDate
        );
        if (latRes?.time_in.toLocaleString().slice(0, 10) === todayDate) {
          setAttendanceData(latRes);
          console.log(attendanceData);
          console.log(attendanceData?.time_in.toLocaleString().slice(0, 10));
          // if (attendanceData?.time_in && !attendanceData?.time_out) {
          //   setHourCard(true);
          // } else if (attendanceData?.time_in && attendanceData?.time_out) {
          //   setHourCard(false);
          // } else {
          //   setHourCard(false);
          // }
        }
      }
    };
    fetchData();
  }, [action]);

  const handleCheckIn = async () => {
    try {
      const responseData = await CheckInApi();
      console.log(responseData);
      if (responseData.checkedIn) {
        message.success("You CheckedIn successfully");
        setCheckIn(true);
        setHourCard(true);
        localStorage.setItem("checkedIn", responseData.checkedIn);
        setAction((prev) => prev + 1);
      } else {
        message.error("You already checkedIn");
      }
    } catch (error) {
      console.log("error in checking in", error);
    }
  };
  const handleCheckOut = async () => {
    try {
      const response = await CheckOutApi();
      console.log(response.data);
      message.success("You checked Out successfully");
      setAction((prev) => prev + 1);
      setHourCard(false);
    } catch (error) {
      message.error("Failed to check out");
    }
  };

  return (
    <div>
      <div className="bg-slate-200 pb-4">
        <div className="flex justify-between bg-slate-200 p-1 rounded-md">
          <div className="border-l-4 border-secondary-color h-9 flex items-center">
            <Title level={5} className="ml-2">
              Good Day, {userData?.firstName}
            </Title>
          </div>
          <DatePicker />
        </div>
        <Divider />
        <Row className=" flex justify-center">
          {!checkIn && (
            <Card className="mr-2 bg-green-100" onClick={handleCheckIn}>
              <FaArrowRightToBracket />
              <Title level={5}>
                {attendanceData?.time_in
                  ? attendanceData?.time_in.toLocaleString().slice(11, 19)
                  : "You did not checkIn"}
              </Title>
              <span>Checked In</span>
            </Card>
          )}
          {checkIn && (
            <Card className="mr-2 bg-orange-100" onClick={handleCheckOut}>
              <FaArrowRightFromBracket />
              <Title level={5}>
                {attendanceData?.time_out
                  ? attendanceData?.time_out.toLocaleString().slice(11, 19)
                  : "Check Out after CheckIn"}
              </Title>
              <span>Checked Out</span>
            </Card>
          )}
          {checkIn && (
            <Card className="mr-2 bg-blue-100">
              <FaArrowRightToBracket />
              <Title level={5}>
                {attendanceData?.working_hours
                  ? attendanceData?.working_hours.toLocaleString()
                  : "0"}
              </Title>
              <span>Working hours</span>
            </Card>
          )}

          {hourCard ? (
            <Card className="mr-2 bg-blue-100">
              <FaArrowRightToBracket />
              <Title level={5}>{currentTime.toLocaleTimeString()}</Title>
              <span>Working hours</span>
            </Card>
          ) : (
            ""
          )}
        </Row>
      </div>
      <div className="flex items-center justify-around bg-slate-200 rounded-md mt-4 p-2">
        <div className="bg-white rounded-md">
          <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
            <PieCenterLabel>14%</PieCenterLabel>
          </PieChart>
        </div>
        <div className="bg-white rounded-md">
          <Title
            level={5}
            className="border-2 border-slate-200 w-[140px] p-1 m-1 rounded-full 
            !text-slate-400"
          >
            Graphical Report
          </Title>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                area: true,
              },
            ]}
            width={700}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
