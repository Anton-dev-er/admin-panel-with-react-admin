import {
  ArrayField,
  ChipField,
  FunctionField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  SingleFieldList,
  TextField
} from "react-admin";

const ProductList = () => {
  return (
      <Show>
        <SimpleShowLayout>
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
        </SimpleShowLayout>
      </Show>
  );
};

export default ProductList;