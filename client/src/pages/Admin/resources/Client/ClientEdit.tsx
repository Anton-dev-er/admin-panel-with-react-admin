import { Edit, SimpleForm, TextInput } from "react-admin";
import { validateEmail, validateName } from "./validation.ts";

const ClientEdit = () => {
  return (
      <Edit>
        <SimpleForm>
          <TextInput source="name" name="name" validate={validateName}/>
          <TextInput source="email" name="email" validate={validateEmail}/>
        </SimpleForm>
      </Edit>
  );
};

export default ClientEdit;