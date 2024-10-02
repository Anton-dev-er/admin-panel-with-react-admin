import { Card, CardHeader } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import DashboardService from "../../../services/DashboardService.ts";

type ProductsPriceByCategoryType = { category: string, totalPrice: number }[]

const ProductsPriceByCategory = () => {
  const [productsPriceByCategory, setProductsPriceByCategory] = useState<ProductsPriceByCategoryType>([]);

  useEffect(() => {
    DashboardService.getProductsPriceByCategory()
        .then((res) => {
          setProductsPriceByCategory(res);
        });
  }, []);

  return (
      <Card>
        <CardHeader title="Price of products by category"/>
        <BarChart
            xAxis={
              [{
                scaleType: "band",
                data: productsPriceByCategory.map((order) => order.category)
              }]
            }
            series={[{ data: productsPriceByCategory.map((order) => order.totalPrice) }]}
            width={500}
            height={300}
        />
      </Card>
  );
};

export default ProductsPriceByCategory;