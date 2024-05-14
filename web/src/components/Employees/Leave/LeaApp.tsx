import { useState } from "react";
import { Typography, Button, Row, Col, Divider } from "antd";
import type { FormProps } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { FaRegClock } from "react-icons/fa6";
import { LeaveModal } from "./LeaveModal";
const { Title } = Typography;
export const LeaApp = () => {
  return (
    <div>
      <LeaveModal />
      <div className="flex flex-col justify-between bg-slate-200 p-1 rounded-md w-full mt-4">
        <div className="border-l-4 border-secondary-color h-9 flex items-center">
          <Title level={5} className="ml-2">
            Leaves History
          </Title>
        </div>
        <Row className="flex justify-around">
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
                <span>From Date</span>
                <span>To Date</span>
              </div>
              <div className="flex justify-between items-center !w-full font-bold">
                <span>21/06/2023</span>
                <span>21/06/2023</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
