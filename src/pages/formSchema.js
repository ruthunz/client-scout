import * as yup from "yup";

export const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingresa un correo válido")
    .required("Requerido"),
  password: yup.string().required(),
});
