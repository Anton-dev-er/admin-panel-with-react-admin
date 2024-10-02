import { TextField, EmailField, Show, SimpleShowLayout } from "react-admin";

const ClientShow = () => {
  return (
      <Show>
        <SimpleShowLayout>
          <TextField source="name"/>
          <EmailField source="email"/>
        </SimpleShowLayout>
      </Show>
  );
};

export default ClientShow;