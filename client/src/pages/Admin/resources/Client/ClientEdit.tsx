import { Edit, SimpleForm, TextInput } from "react-admin";

const ClientEdit = () => {
  return (
      <Edit>
        <SimpleForm>
          <TextInput source="name" name="name"/>
          <TextInput source="email" name="email"/>
        </SimpleForm>
      </Edit>
  );
};

export default ClientEdit;