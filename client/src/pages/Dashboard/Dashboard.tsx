import { Card, CardHeader, Grid } from "@mui/material";
import OrdersByDate from "./Charts/OrdersByDate.tsx";
import ProductsOrderedCount from "./Charts/ProductsOrderedCount.tsx";
import ProductsPriceByCategory from "./Charts/ProductsPriceByCategory.tsx";

const Dashboard = () => {


  return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Welcome to the administration"/>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <OrdersByDate/>
          </Grid>
          <Grid item xs={6}>
            <ProductsPriceByCategory/>
          </Grid>
          <Grid item xs={6}>
            <ProductsOrderedCount/>
          </Grid>
        </Grid>
      </>

  );
};

export default Dashboard;