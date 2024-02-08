import React from "react";
import sessionService from "../../services/session.service";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  FormGroup,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useFormik } from "formik";
import { eventFormSchema } from "./eventFormSchema";
import { motion } from "framer-motion";

const organizers = ["Brownsea", "Distrito"];
const scoutBranches = ["Lobatos", "Exploradores", "Rovers", "Pioneros"];

const EventManager = () => {
  const navigate = useNavigate();

  const handleCreateEvent = async (values, actions) => {
    const data = {
      title: values.title,
      organizer: values.organizer,
      description: values.description,
      branches: values.branches,
      requirements: values.requirements,
      // dates: values.dates,
    };
    actions.setSubmitting(true);
    console.log("DATA SENT: " + JSON.stringify(data));
    //logic
    actions.resetForm();
    actions.setSubmitting(false);
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
      title: "",
      organizer: "",
      description: "",
      branches: [],
      requirements: ["hola", "mundo"],
    },
    validationSchema: eventFormSchema,
    onSubmit: handleCreateEvent,
  });

  /*    
      dates: [],*/
  const onLogout = async () => {
    await sessionService.logout();
    navigate(0);
  };
  return (
    <Box sx={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <Button
        fullWidth
        sx={{
          bgcolor: "brand.grey",
          color: "brand.brown",
          borderRadius: 0,
          margin: "16px 0 16px 0",
          "&:hover": {
            backgroundColor: "brand.lightgrey",
          },
        }}
        onClick={() => onLogout()}
      >
        Salir
      </Button>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField
              placeholder="Título del evento"
              label="titulo"
              variant="outlined"
              fullWidth
              required
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              id="title"
              sx={{ input: { color: "brand.brown" } }}
            />
            {errors.title && touched.title && (
              <p style={{ color: "red" }}>{errors.title}</p>
            )}
          </Grid>

          <FormLabel id="organizerLabel">Organizador</FormLabel>
          <RadioGroup
            name="organizer"
            value={values.organizer}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {organizers.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
            {errors.organizer && touched.organizer && (
              <p style={{ color: "red" }}>{errors.organizer}</p>
            )}
          </RadioGroup>
          <Grid item xs={12}>
            <TextField
              placeholder="Descripción del evento"
              label="Descripción"
              variant="outlined"
              fullWidth
              required
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              id="description"
            />
            {errors.description && touched.description && (
              <p style={{ color: "red" }}>{errors.description}</p>
            )}
          </Grid>
          <Grid item xs={12}>
            <FormLabel id="brachLabel">Ramas</FormLabel>
            <FormGroup>
              {scoutBranches.map((branch) => (
                <FormControlLabel
                  key={branch}
                  control={
                    <Checkbox
                      name="branches"
                      value={branch}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      checked={values.branches.includes(branch)}
                    />
                  }
                  label={branch}
                />
              ))}
              {errors.branches && touched.branches && (
                <p style={{ color: "red" }}>{errors.branches}</p>
              )}
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <List dense={true}>
              {values.requirements.map((req) => (
                <ListItem>
                  <ListItemText primary={req} />
                </ListItem>
              ))}
            </List>
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
              }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EventManager;
/*
   <FormGroup>
              {scoutBranches.map((branch) => (
                <FormControlLabel
                  key={branch}
                  control={<Checkbox defaultChecked />}
                  label={branch}
                />
              ))}
            </FormGroup>
*/
