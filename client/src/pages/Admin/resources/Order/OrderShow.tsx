import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

const OrderShow = () => {
  return (
      <Show>
        <SimpleShowLayout>
          <TextField source="id"/>
          <NumberField source="quantity"/>
          <DateField source="date"/>
          <ReferenceField source="product_id" reference="products" label="Product Id" link="show"/>
          <ReferenceField source="client_id" reference="clients" label="Client Id" link="show"/>
        </SimpleShowLayout>
      </Show>
  );
};

export default OrderShow;