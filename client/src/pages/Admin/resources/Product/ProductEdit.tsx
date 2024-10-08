import { ArrayInput, Edit, NumberInput, ReferenceInput, SimpleForm, SimpleFormIterator, TextInput } from "react-admin";
import { validateName, validatePrice } from "./validation.ts";

const ProductEdit = () => {
  return (
      <Edit mutationMode="optimistic" redirect="list">
        <SimpleForm>
          <TextInput source="name" name="name" validate={validateName}/>
          <NumberInput source="price" name="price" validate={validatePrice}/>
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