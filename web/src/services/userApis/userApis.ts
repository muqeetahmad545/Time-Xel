import { User, UserData } from "../../components/types";
import attendanceAPI from "../axios";

export const fetchUserData = async (): Promise<UserData | null> => {
  try {
    const response = await attendanceAPI.get(
      `${process.env.REACT_APP_API_URL}/userDetails`,
      {}
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};


export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await attendanceAPI.get(
            `${process.env.REACT_APP_API_URL}/fetchusers`,
            {}
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };
