import React from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import { formSchema } from "./formschema";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

/*NOTE: on submit can have values and actions as parameters*/
const onSubmit = async (values, actions) => {
  const data = {
    user_name: values.firstName + " " + values.lastName,
    user_email: values.email,
    subject: "Personal Page",
    message: values.message,
  };
  actions.setSubmitting(true);
  // emailjs
  //   .send("service_ivzfh88", "template_p90307q", data, "bQfZd2zW8v0xnCyAb")
  //   .then(
  //     (result) => {
  //       console.log(result.text);
  //       alert("Your message has been sent!");
  //     },
  //     (error) => {
  //       console.log(error.text);
  //       alert("Your message could not be sent!");
  //     }
  //   );
  actions.resetForm();
  actions.setSubmitting(false);
};

const ContactForm = () => {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    isSubmitting,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: formSchema,
    onSubmit,
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "50%",
        padding: "8px 8px 80px 8px",
        overflowY: "auto",
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography
        sx={{
          typography: { xs: "h5", sm: "h5", md: "h4", lg: "h4" },
          color: "black",
          fontWeight: "700",
        }}
      >
        ENVIANOS UN CORREO
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px 8px 16px 8px",
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                placeholder="Tu nombre aquí"
                label="nombre"
                variant="standard"
                fullWidth
                required
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                id="firstName"
                sx={{ input: { color: "background.primary" } }}
              />
              {errors.firstName && touched.firstName && (
                <p style={{ color: "red" }}>{errors.firstName}</p>
              )}
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                placeholder="Tu apellido aquí"
                label="apellido"
                variant="standard"
                fullWidth
                required
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                id="lastName"
              />
              {errors.lastName && touched.lastName && (
                <p style={{ color: "red" }}>{errors.lastName}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                placeholder="Tu correo electrónico"
                label="correo electrónico"
                variant="standard"
                fullWidth
                required
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
              />
              {errors.email && touched.email && (
                <p style={{ color: "red" }}>{errors.email}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mensaje"
                multiline
                rows={3}
                placeholder="Escribe tu mensaje"
                variant="standard"
                fullWidth
                required
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                id="message"
              />
              {errors.message && touched.message && (
                <p style={{ color: "red" }}>{errors.message}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="text"
                fullWidth
                disabled={isSubmitting}
                sx={{
                  bgcolor: "background.primary",
                  color: "white",
                  borderRadius: 0,
                }}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
