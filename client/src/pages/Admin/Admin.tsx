import simpleRestProvider from "ra-data-json-server";
import { Admin as AdminProvider, Resource } from "react-admin";
import Dashboard from "../Dashboard/Dashboard.tsx";
import resources from "./resources";


const dataProvider = simpleRestProvider("http://localhost:5555");


const Admin = () => {
  return (
      <AdminProvider dataProvider={dataProvider} dashboard={Dashboard}>
        {resources.map((resource) => <Resource {...resource} key={resource.name}/>)}
      </AdminProvider>
  );
};

export default Admin;