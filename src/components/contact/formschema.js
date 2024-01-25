import * as yup from "yup";

export const formSchema = yup.object().shape({
  firstName: yup.string().min(3).required("Requerido"),
  lastName: yup.string().required("Requerido"),
  email: yup
    .string()
    .email("Por favor ingresa un correo válido")
    .required("Requerido"),
  message: yup.string(),
});
