import { email, minLength, required } from "react-admin";

const validateName = [required(), minLength(4)];
const validateEmail = [required(), email()];

export { validateName, validateEmail };
