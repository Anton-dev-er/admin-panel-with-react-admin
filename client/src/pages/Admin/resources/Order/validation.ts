import { maxValue, minValue, required } from "react-admin";

const validateQuantity = [required(), minValue(0), maxValue(999999)];
const validateDate = [required()];

export { validateDate, validateQuantity };
