import * as yup from "yup";

const VALIDATION_SCHEMA = yup.object({
  email: yup.string().email().required("Email is required"),
});

const SUBSCRIPPTION_INITIAL_VALUES = {
  email: "",
};
export {VALIDATION_SCHEMA, SUBSCRIPPTION_INITIAL_VALUES };
