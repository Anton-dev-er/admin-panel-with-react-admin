import { Datagrid, List, TextField, EmailField, EditButton, DeleteButton, ShowButton } from "react-admin";

const ClientList = () => {
  return (
      <List>
        <Datagrid rowClick={false}>
          <TextField source="id"/>
          <TextField source="name"/>
          <EmailField source="email"/>
          <ShowButton/>
          <EditButton/>
          <DeleteButton mutationMode="optimistic"/>
        </Datagrid>
      </List>
  );
};

export default ClientList;