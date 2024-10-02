import CategoryCreate from "./Category/CategoryCreate.tsx";
import CategoryEdit from "./Category/CategoryEdit.tsx";
import CategoryList from "./Category/CategoryList.tsx";
import CategoryShow from "./Category/CategoryShow.tsx";
import ClientCreate from "./Client/ClientCreate.tsx";
import ClientEdit from "./Client/ClientEdit.tsx";
import ClientList from "./Client/ClientList.tsx";
import ClientShow from "./Client/ClientShow.tsx";
import OrderCreate from "./Order/OrderCreate.tsx";
import OrderEdit from "./Order/OrderEdit.tsx";
import OrderList from "./Order/OrderList.tsx";
import OrderShow from "./Order/OrderShow.tsx";
import ProductCreate from "./Product/ProductCreate.tsx";
import ProductEdit from "./Product/ProductEdit.tsx";
import ProductList from "./Product/ProductList.tsx";
import ProductShow from "./Product/ProductShow.tsx";

const resources = [
  {
    name: "clients",
    list: ClientList,
    edit: ClientEdit,
    create: ClientCreate,
    show: ClientShow
  },
  {
    name: "categories",
    list: CategoryList,
    edit: CategoryEdit,
    create: CategoryCreate,
    show: CategoryShow
  },
  {
    name: "products",
    list: ProductList,
    edit: ProductEdit,
    create: ProductCreate,
    show: ProductShow
  },
  {
    name: "orders",
    list: OrderList,
    edit: OrderEdit,
    create: OrderCreate,
    show: OrderShow
  }
];

export default resources