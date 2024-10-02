import { DateInput, Edit, NumberInput, ReferenceInput, SimpleForm } from "react-admin";

const OrderEdit = () => {
  return (
      <Edit>
        <SimpleForm>
          <NumberInput source="quantity" name="quantity"/>
          <DateInput source="date" name="date"/>
          <ReferenceInput source="product_id" name="product_id" reference="products" label="Product Id" link="show"/>
          <ReferenceInput source="client_id" name="client_id" reference="clients" label="Client Id" link="show"/>
        </SimpleForm>
      </Edit>
  );
};

export default OrderEdit;