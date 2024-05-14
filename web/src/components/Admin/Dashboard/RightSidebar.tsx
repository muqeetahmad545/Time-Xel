import { UserOutlined } from "@ant-design/icons"
import { Typography } from "@mui/material"
import { Avatar } from "antd"

export const RightSidebar = () => {
  return (
    <div className="px-2 py-4">
        <Typography className="!font-bold">Today's Attendence</Typography>
        <Typography className="!text-slate-400">{new Date().toLocaleDateString()}</Typography>

        <div className="flex justify-around items-center mb-2">
            <Avatar><UserOutlined className="text-slate-500"/></Avatar>
            <div>
            <Typography>Employees</Typography>
            <Typography className="text-slate-500">22/43</Typography>
            </div>
        </div>
        <div className="flex justify-around items-center mb-2">
            <Avatar><UserOutlined className="text-secondary-color"/></Avatar>
            <div>
            <Typography>Employees</Typography>
            <Typography className="text-secondary-color">22/43</Typography>
            </div>
        </div>
        <Typography className="!font-bold !mb-2">Recent Attendence</Typography>

        <div className="flex justify-around items-center">
            <Avatar><UserOutlined className="text-slate-500"/></Avatar>
            <div>
            <Typography>Employees</Typography>
            <Typography>22/43</Typography>
            </div>
        </div>
        <div className="flex justify-around items-center">
            <Avatar><UserOutlined className="text-secondary-color"/></Avatar>
            <div>
            <Typography>Employees</Typography>
            <Typography className="text-secondary-color">22/43</Typography>
            </div>
        </div>
    </div>
  )
}
