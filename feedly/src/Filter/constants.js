import * as yup from "yup";

const VALIDATION_SCHEMA = yup.object({
  name: yup.string().required("First Name is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Description is required")
});

const INITIAL_VALUES = {
  name: "",
  email: "",
  message: ""
};
export {VALIDATION_SCHEMA, INITIAL_VALUES };
