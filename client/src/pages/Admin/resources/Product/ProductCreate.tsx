import {
  ArrayInput,
  Create,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  useNotify,
  useRedirect
} from "react-admin";
import { validateName, validatePrice } from "./validation.ts";

const ProductCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify("Product created");
    redirect("/products");
  };

  return (
      <Create mutationOptions={{ onSuccess }}>
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
      </Create>
  );
};

export default ProductCreate;