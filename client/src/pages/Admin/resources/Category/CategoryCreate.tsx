import { Create, SimpleForm, TextInput } from "react-admin";

const CategoryCreate = () => {
  return (
      <Create>
        <SimpleForm>
          <TextInput source="name" name="name"/>
        </SimpleForm>
      </Create>
  );
};

export default CategoryCreate;