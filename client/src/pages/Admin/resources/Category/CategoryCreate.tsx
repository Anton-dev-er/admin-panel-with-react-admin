import { Create, SimpleForm, TextInput } from "react-admin";
import { validateName } from "./validation.ts";

const CategoryCreate = () => {
  return (
      <Create>
        <SimpleForm>
          <TextInput source="name" name="name" validate={validateName}/>
        </SimpleForm>
      </Create>
  );
};

export default CategoryCreate;