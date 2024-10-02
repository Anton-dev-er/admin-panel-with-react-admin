import { Show, SimpleShowLayout, TextField } from "react-admin";

const CategoryList = () => {
  return (
      <Show>
        <SimpleShowLayout>
          <TextField source="name"/>
        </SimpleShowLayout>
      </Show>
  );
};

export default CategoryList;