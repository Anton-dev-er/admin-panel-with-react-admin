import { Create, SimpleForm, TextInput, useNotify, useRedirect } from "react-admin";
import { validateEmail, validateName } from "./validation.ts";

const ClientCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify("Client created");
    redirect("/clients");
  };
  return (
      <Create mutationOptions={{ onSuccess }}>
        <SimpleForm>
          <TextInput source="name" name="name" validate={validateName}/>
          <TextInput source="email" name="email" validate={validateEmail}/>
        </SimpleForm>
      </Create>
  );
};

export default ClientCreate;