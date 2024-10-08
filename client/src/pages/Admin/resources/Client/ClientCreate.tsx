import { Create, SimpleForm, TextInput } from "react-admin";
import { validateEmail, validateName } from "./validation.ts";

const ClientCreate = () => {
  return (
      <Create>
        <SimpleForm>
          <TextInput source="name" name="name" validate={validateName}/>
          <TextInput source="email" name="email" validate={validateEmail}/>
        </SimpleForm>
      </Create>
  );
};

export default ClientCreate;