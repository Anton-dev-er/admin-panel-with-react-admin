import { SimpleForm, TextInput, Create } from "react-admin";

const ClientCreate = () => {
  return (
      <Create>
        <SimpleForm>
          <TextInput source="name" name="name"/>
          <TextInput source="email" name="email"/>
        </SimpleForm>
      </Create>
  );
};

export default ClientCreate;