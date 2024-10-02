import { Card, CardHeader } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import DashboardService from "../../../services/DashboardService.ts";

type ProductsOrderedCountType = { productName: string, totalQuantity: number }[]

const ProductsOrderedCount = () => {
  const [productsOrderedCount, setProductsOrderedCount] = useState<ProductsOrderedCountType>([]);

  useEffect(() => {
    DashboardService.getProductsOrderedCount()
        .then((res) => {
          setProductsOrderedCount(res);
        });
  }, []);

  return (
      <Card>
        <CardHeader title="Quantity of orders by product"/>
        <PieChart
            series={[{
              data: productsOrderedCount.map((item, id) => {
                return {
                  id,
                  value: item.totalQuantity,
                  label: item.productName
                };
              })
            }]}
            width={500}
            height={300}
        />
      </Card>
  );
};

export default ProductsOrderedCount;