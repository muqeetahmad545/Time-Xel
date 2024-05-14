import { BellOutlined, LogoutOutlined } from "@ant-design/icons"
import { Typography } from "@mui/material"
import { Avatar, Button} from "antd"

export const AppHeader = () => {
  return (
    <div className="flex justify-between w-full items-center">
        <Typography variant="h5" className=" !font-[600]">Tim_Xel</Typography>
        <div className="flex w-1/6 justify-around">
            <Button className="flex justify-center items-center"><LogoutOutlined/>Sign Out</Button>
            <BellOutlined />
            <Avatar>MK</Avatar>
        </div>
    </div>
  )
}
