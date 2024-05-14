import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Typography } from "@mui/material";
import { RightSidebar } from "./RightSidebar";

export const AppContent = () => {
  return (
    <div className="flex w-full">
      <div className="w-3/4 flex flex-col justify-center items-center">
        <div className="mt-4">
          <Typography className="border-2 border-slate-300 w-[90px] rounded text-center">
            Employees
          </Typography>
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
        <div>
          <Typography className="border-2 border-slate-300 w-[100px] rounded text-center">
            Supervisors
          </Typography>
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
      <div>
        <RightSidebar/>
      </div>
    </div>
  );
};
