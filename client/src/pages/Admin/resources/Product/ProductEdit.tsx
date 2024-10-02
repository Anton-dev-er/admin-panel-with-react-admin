import { ArrayInput, Edit, NumberInput, ReferenceInput, SimpleForm, SimpleFormIterator, TextInput } from "react-admin";

const ProductEdit = () => {
  return (
      <Edit>
        <SimpleForm>
          <TextInput source="name" name="name"/>
          <NumberInput source="price" name="price"/>
          <ReferenceInput
              source="category_id"
              reference="categories"
              label="Category Id"
              link="show"
              name="category_id"
          />
          <ArrayInput source="shops" name="shops">
            <SimpleFormIterator inline>
              <TextInput source="" name="" helperText={false}/>
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleForm>
      </Edit>
  );
};

export default ProductEdit;