import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { formSchema } from "./formSchema";
import sessionService from "../services/session.service";
import { useNavigate } from "react-router-dom";
import EventManager from "../components/SignIn/EventManager";

const SignIn = () => {
  const navigate = useNavigate();

  const onLogin = async (values, actions) => {
    const credentials = {
      email: values.email,
      password: values.password,
    };
    actions.setSubmitting(true);
    await sessionService.login(credentials);
    actions.resetForm();
    actions.setSubmitting(false);
    navigate(0);
  };

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
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: onLogin,
  });

  return (
    <Box
      sx={{
        backgroundColor: "brand.lightgrey",
        display: "flex",
        justifyContent: "center",
        height: "92%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "brand.brown",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "16px 16px 0 16px",
          height: "100%",
          width: { xs: "100%", sm: "100%", md: "72%", lg: "72%" },
          overflowY: "auto",
        }}
      >
        {!sessionService.isLogged() ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
              backgroundColor: "white",
              padding: "24px",
            }}
          >
            <Typography
              sx={{
                typography: { xs: "h5", sm: "h5", md: "h3", lg: "h3" },
                color: "brand.brown",
                marginBottom: "16px",
              }}
            >
              INGRESAR
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1} sx={{ padding: "8px" }}>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Tu correo electrónico"
                    label="Correo electrónico"
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
                    label="Password"
                    placeholder="Escribe tu contraseña"
                    variant="standard"
                    type="password"
                    fullWidth
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="password"
                  />
                  {errors.password && touched.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="text"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{
                      bgcolor: "brand.brown",
                      color: "white",
                      borderRadius: 0,
                      margin: "16px 0 16px 0",
                    }}
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        ) : (
          <EventManager />
        )}
      </Box>
    </Box>
  );
};

export default SignIn;
