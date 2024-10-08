import {
  ArrayField,
  ChipField,
  Datagrid,
  DeleteButton,
  EditButton,
  FunctionField,
  List,
  NumberField,
  ReferenceField,
  ShowButton,
  SingleFieldList,
  TextField
} from "react-admin";

const ProductList = () => {
  return (
      <List>
        <Datagrid rowClick={false}>
          <TextField source="id"/>
          <TextField source="name"/>
          <NumberField source="price"/>
          <ArrayField source="shops">
            <SingleFieldList linkType={false}>
              <FunctionField render={(record) => (
                  <ChipField record={{ name: record }} source="name"/>
              )}/>
            </SingleFieldList>
          </ArrayField>
          <ReferenceField source="category_id" reference="categories" label="Category Id" link="show"/>
          <ShowButton/>
          <EditButton/>
          <DeleteButton/>
        </Datagrid>
      </List>
  );
};

export default ProductList;