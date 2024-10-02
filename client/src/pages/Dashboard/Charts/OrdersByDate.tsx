import { Card, CardHeader } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import DashboardService from "../../../services/DashboardService.ts";

type OrdersByDateType = { date: string, orderCount: number }[]

const OrdersByDate = () => {
  const [ordersByDate, setOrdersByDate] = useState<OrdersByDateType>([]);

  useEffect(() => {
    DashboardService.getOrderByDate()
        .then((res) => {
          setOrdersByDate(res);
        });
  }, []);

  return (
      <Card>
        <CardHeader title="Created orders by date"/>
        <BarChart
            xAxis={
              [{
                scaleType: "band",
                data: ordersByDate.map((order) => (new Date(order.date)).toLocaleDateString())
              }]
            }
            series={[{ data: ordersByDate.map((order) => order.orderCount) }]}
            width={500}
            height={300}
        />
      </Card>
  );
};

export default OrdersByDate;