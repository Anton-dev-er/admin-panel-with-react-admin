import { DateInput, Edit, NumberInput, ReferenceInput, SimpleForm } from "react-admin";
import { validateDate, validateQuantity } from "./validation.ts";

const OrderEdit = () => {
  return (
      <Edit mutationMode="optimistic" redirect="list">
        <SimpleForm>
          <NumberInput source="quantity" name="quantity" validate={validateQuantity}/>
          <DateInput source="date" name="date" validate={validateDate}/>
          <ReferenceInput source="product_id" name="product_id" reference="products" label="Product Id" link="show"/>
          <ReferenceInput source="client_id" name="client_id" reference="clients" label="Client Id" link="show"/>
        </SimpleForm>
      </Edit>
  );
};

export default OrderEdit;