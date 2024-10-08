import { Datagrid, DeleteButton, EditButton, List, ReferenceManyField, ShowButton, TextField } from "react-admin";

const CategoryList = () => {
  return (
      <List>
        <Datagrid rowClick={false}>
          <TextField source="id"/>
          <TextField source="name"/>
          <ReferenceManyField reference="products" target="category_id" label="Products">
            <Datagrid>
              <TextField source="name"/>
            </Datagrid>
          </ReferenceManyField>
          <ShowButton/>
          <EditButton/>
          <DeleteButton mutationMode="optimistic"/>
        </Datagrid>
      </List>
  );
};

export default CategoryList;