import * as yup from "yup";

export const eventFormSchema = yup.object().shape({
  title: yup.string().required("Requerido"),
  organizer: yup.string().required("Requerido"),
  description: yup.string().required("Requerido"),
  branches: yup
    .array()
    .of(yup.string())
    .min(1, "Se debe seleccionar al menos una rama")
    .required("Requerido"),
});
/*
  
  requirements: yup.array().of(yup.string()),
  dates: yup.array().of(yup.string()),
*/
