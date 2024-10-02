import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  NumberField,
  ReferenceField,
  ShowButton,
  TextField
} from "react-admin";

const OrderList = () => {
  return (
      <List>
        <Datagrid>
          <TextField source="id"/>
          <NumberField source="quantity"/>
          <DateField source="date"/>
          <ReferenceField source="product_id" reference="products" label="Product Id" link="show"/>
          <ReferenceField source="client_id" reference="clients" label="Client Id" link="show"/>
          <ShowButton/>
          <EditButton/>
          <DeleteButton/>
        </Datagrid>
      </List>
  );
};

export default OrderList;