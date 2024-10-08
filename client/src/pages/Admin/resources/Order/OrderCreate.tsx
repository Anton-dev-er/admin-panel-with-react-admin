import { Create, DateInput, NumberInput, ReferenceInput, SimpleForm, useNotify, useRedirect } from "react-admin";
import { validateDate, validateQuantity } from "./validation.ts";

const OrderCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify("Order created");
    redirect("/orders");
  };
  return (
      <Create mutationOptions={{ onSuccess }}>
        <SimpleForm>
          <NumberInput source="quantity" name="quantity" validate={validateQuantity}/>
          <DateInput source="date" name="date" validate={validateDate}/>
          <ReferenceInput source="product_id" name="product_id" reference="products" label="Product Id" link="show"/>
          <ReferenceInput source="client_id" name="client_id" reference="clients" label="Client Id" link="show"/>
        </SimpleForm>
      </Create>
  );
};

export default OrderCreate;