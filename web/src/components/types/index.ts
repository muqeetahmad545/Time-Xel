export interface UserData {
  firstName: string;
  role: string;
  designation: string;
  email: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  // Add other properties as needed
}

export interface AttendanceRecord {
  time_in: Date;
  time_out: Date;
  working_hours: Number;
}
