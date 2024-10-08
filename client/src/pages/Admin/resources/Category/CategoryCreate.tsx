import { Create, SimpleForm, TextInput, useNotify, useRedirect } from "react-admin";
import { validateName } from "./validation.ts";

const CategoryCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Category created`);
    redirect("/categories");
  };
  return (
      <Create mutationOptions={{ onSuccess }}>
        <SimpleForm>
          <TextInput source="name" name="name" validate={validateName}/>
        </SimpleForm>
      </Create>
  );
};

export default CategoryCreate;