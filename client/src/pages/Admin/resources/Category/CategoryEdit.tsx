import { Edit, SimpleForm, TextInput } from "react-admin";
import { validateName } from "./validation.ts";

const CategoryEdit = () => {
  return (
      <Edit>
        <SimpleForm>
          <TextInput source="name" name="name" validate={validateName}/>
        </SimpleForm>
      </Edit>
  );
};

export default CategoryEdit;