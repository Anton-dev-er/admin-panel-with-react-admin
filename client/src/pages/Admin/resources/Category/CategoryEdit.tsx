import { Edit, SimpleForm, TextInput } from "react-admin";

const CategoryEdit = () => {
  return (
      <Edit>
        <SimpleForm>
          <TextInput source="name" name="name"/>
        </SimpleForm>
      </Edit>
  );
};

export default CategoryEdit;