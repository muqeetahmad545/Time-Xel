import attendanceAPI from "../axios";

export const CheckInApi = async () => {
  try {
    const response = await attendanceAPI.post(
      `${process.env.REACT_APP_API_URL}/attendance/check-in`,
      {}
    );
    return response.data;
  } catch (error) {
    console.error("checkin error", error);
  }
};

export const CheckOutApi = async () => {
  try {
    const response = await attendanceAPI.post(
      `${process.env.REACT_APP_API_URL}/attendance/check-out`,
      {}
    );
    return response.data;
  } catch (error) {
    console.error("checkout error", error);
  }
};

export const fetchUserAttendance = async () => {
  try {
    const response = await attendanceAPI.get(
      `${process.env.REACT_APP_API_URL}/userattendance`,
      {}
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("checkin error", error);
  }
};

export const fetchAllUserAttendance = async () =>{
  try {
    const response = await attendanceAPI.get(
      `${process.env.REACT_APP_API_URL}/allusersattendance`,
      {}
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("checkin error", error);
  }
}