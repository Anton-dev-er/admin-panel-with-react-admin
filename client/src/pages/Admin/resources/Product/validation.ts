import { maxValue, minLength, minValue, required } from "react-admin";

const validateName = [required(), minLength(4)];
const validatePrice = [required(), minValue(0), maxValue(999999)];

export { validateName, validatePrice };
