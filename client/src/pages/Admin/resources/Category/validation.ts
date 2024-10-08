import { minLength, required } from "react-admin";

const validateName = [required(), minLength(4)];

export { validateName };
