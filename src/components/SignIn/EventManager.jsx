import React, { useState } from "react";
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
  ListItemSecondaryAction,
  IconButton,
  Fab,
  ListItemIcon,
} from "@mui/material";
import { useFormik } from "formik";
import { eventFormSchema } from "./eventFormSchema";
import { motion } from "framer-motion";
import { Delete, Add, CheckCircle } from "@mui/icons-material";

import { DayPicker } from "react-day-picker";
import { isSameDay } from "date-fns";
import EventList from "./EventList";

const organizers = ["Brownsea", "Distrito"];
const scoutBranches = ["Lobatos", "Exploradores", "Rovers", "Pioneros"];
const pickerStyle = { backgroundColor: "#461622", color: "white" };

const EventManager = () => {
  const navigate = useNavigate();

  const [pickedEvent, setPickedEvent] = useState({});
  const [editMode, setEditMode] = useState(false);

  const handleCreateEvent = async (values, actions) => {
    const data = {
      title: values.title,
      organizer: values.organizer,
      description: values.description,
      branches: values.branches,
      requirements: values.requirements,
      dates: values.dates,
    };
    actions.setSubmitting(true);
    console.log("DATA SENT: " + JSON.stringify(data));
    //logic
    actions.resetForm();
    actions.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      organizer: "",
      description: "",
      branches: [],
      requirements: [],
      requirement: "",
      dates: [],
    },
    validationSchema: eventFormSchema,
    onSubmit: handleCreateEvent,
  });
  const onLogout = async () => {
    await sessionService.logout();
    navigate(0);
  };

  const handleAddRequirement = () => {
    formik.setValues({
      ...formik.values,
      requirements: [...formik.values.requirements, formik.values.requirement],
    });
  };

  const handleRemoveRequirement = (requirement) => {
    const updatedRequirements = formik.values.requirements.filter(
      (req) => req !== requirement
    );

    formik.setValues({
      ...formik.values,
      requirements: updatedRequirements,
    });
  };

  const handleDayClick = (day, modifiers) => {
    const newSelectedDays = [...formik.values.dates];
    if (modifiers.selected) {
      const index = formik.values.dates.findIndex((selectedDay) =>
        isSameDay(day, selectedDay)
      );
      newSelectedDays.splice(index, 1);
    } else {
      newSelectedDays.push(day);
    }
    formik.setValues({
      ...formik.values,
      dates: newSelectedDays,
    });
  };

  const handlePickedEvent = (event) => {
    setPickedEvent(event);
    setEditMode(true);
    formik.setValues({
      ...formik.values,
      title: event.title,
      organizer: event.organizer,
      description: event.description,
      branches: [...event.branches],
      requirements: [...event.requirements],
      dates: event.dates.map((e) => new Date(e)),
    });
  };

  const handleUpdateEvent = () => {
    const data = {
      id: pickedEvent.id,
      title: formik.values.title,
      organizer: formik.values.organizer,
      description: formik.values.description,
      branches: formik.values.branches,
      requirements: formik.values.requirements,
      dates: formik.values.dates,
    };

    formik.setSubmitting(true);
    console.log("DATA UPDATE: " + JSON.stringify(data));
    //logic
    formik.resetForm();
    formik.setSubmitting(false);

    setPickedEvent({});
    setEditMode(false);
  };

  const handleDeleteEvent = (event) => {
    const res = window.confirm("Estas seguro de eliminar este evento?");
    console.log("RES: " + res);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        overflowY: "auto",
      }}
    >
      <Button
        sx={{
          bgcolor: "brand.grey",
          color: "brand.brown",
          borderRadius: 0,
          margin: "16px 0 16px 0",
          "&:hover": {
            backgroundColor: "brand.lightgrey",
          },
          width: "100%",
        }}
        onClick={() => onLogout()}
      >
        Cerrar Sesión
      </Button>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "32%", lg: "32%" },
          padding: "24px",
          height: "90%",
          overflowY: "auto",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={1}>
            <Grid xs={12} item>
              <TextField
                placeholder="Título del evento"
                label="titulo"
                variant="outlined"
                fullWidth
                required
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="title"
                sx={{ input: { color: "brand.brown" } }}
              />
              {formik.errors.title && formik.touched.title && (
                <p style={{ color: "red" }}>{formik.errors.title}</p>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                placeholder="Descripción del evento"
                label="Descripción"
                variant="outlined"
                fullWidth
                required
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="description"
              />
              {formik.errors.description && formik.touched.description && (
                <p style={{ color: "red" }}>{formik.errors.description}</p>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel id="brachLabel">Ramas</FormLabel>
              <FormGroup>
                {scoutBranches.map((branch) => (
                  <FormControlLabel
                    key={branch}
                    control={
                      <Checkbox
                        name="branches"
                        value={branch}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.branches.includes(branch)}
                      />
                    }
                    label={branch}
                  />
                ))}
                {formik.errors.branches && formik.touched.branches && (
                  <p style={{ color: "red" }}>{formik.errors.branches}</p>
                )}
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel id="organizerLabel">Organizador</FormLabel>
              <RadioGroup
                name="organizer"
                value={formik.values.organizer}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {organizers.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
                {formik.errors.organizer && formik.touched.organizer && (
                  <p style={{ color: "red" }}>{formik.errors.organizer}</p>
                )}
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <FormLabel id="requirementsLabel">Requerimientos</FormLabel>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  fullWidth
                  id="requirement"
                  name="requirement"
                  label="Nuevo Requerimiento"
                  value={formik.values.requirement}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  margin="normal"
                  variant="outlined"
                />
                <Fab
                  variant="contained"
                  color="primary"
                  onClick={handleAddRequirement}
                  sx={{ margin: "0 16px 0 16px" }}
                >
                  <Add />
                </Fab>
              </Box>

              <List>
                {formik.values.requirements.map((requirement) => (
                  <ListItem key={requirement}>
                    <ListItemIcon>
                      <CheckCircle />
                    </ListItemIcon>
                    <ListItemText primary={requirement} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleRemoveRequirement(requirement)}
                      >
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
                {formik.errors.requirements && formik.touched.requirements && (
                  <p style={{ color: "red" }}>{formik.errors.requirements}</p>
                )}
              </List>
            </Grid>
            <Grid item xs={12}>
              <FormLabel id="datesLabel">Fechas</FormLabel>
              <DayPicker
                mode="multiple"
                min={1}
                selected={formik.values.dates}
                onDayClick={handleDayClick}
              />
              {formik.errors.dates && (
                <p style={{ color: "red" }}>{formik.errors.dates}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              {editMode ? (
                <Button
                  variant="text"
                  fullWidth
                  disabled={formik.isSubmitting}
                  sx={{
                    bgcolor: "brand.brown",
                    color: "white",
                    borderRadius: 0,
                  }}
                  onClick={() => handleUpdateEvent()}
                >
                  Actualizar Evento
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="text"
                  fullWidth
                  disabled={formik.isSubmitting}
                  sx={{
                    bgcolor: "brand.brown",
                    color: "white",
                    borderRadius: 0,
                  }}
                >
                  Crear Evento
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "64%", lg: "64%" },
          padding: "24px",
          height: "90%",
          overflowY: "auto",
        }}
      >
        {!editMode && (
          <EventList
            handlePickedEvent={handlePickedEvent}
            handleDeleteEvent={handleDeleteEvent}
          />
        )}
      </Box>
    </Box>
  );
};

export default EventManager;
