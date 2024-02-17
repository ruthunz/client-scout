import React, { useState, useEffect } from "react";
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
import {
  Delete,
  Add,
  CheckCircle,
  SupervisedUserCircle,
} from "@mui/icons-material";

import { DayPicker } from "react-day-picker";
import { isSameDay } from "date-fns";
import EventList from "./EventList";
import eventService from "../../services/event.service";
import { es } from "date-fns/locale";

const organizers = ["Brownsea", "Distrito"];
const scoutBranches = ["Lobatos", "Exploradores", "Rovers", "Pioneros"];
const pickerStyle = { backgroundColor: "#461622", color: "white" };

const EventManager = () => {
  const navigate = useNavigate();

  const [pickedEvent, setPickedEvent] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventService.getAllEvents().then((eventList) => {
      setEvents(eventList);
    });
  }, []);

  const handleCreateEvent = async (values, actions) => {
    const body = {
      title: values.title,
      organizer: values.organizer,
      description: values.description,
      branches: values.branches,
      requirements: values.requirements,
      dates: values.dates,
    };
    actions.setSubmitting(true);
    eventService.createEvent(body).then((data) => {
      if (data.id) {
        setEvents((events) => [...events, { ...data }]);
        window.alert("Evento creado con exito");
      } else if (data.status === 401) {
        window.alert("Sesion expirada, inicie nuevamente");
        navigate("/login");
      } else {
        window.alert("El evento no pudo ser creado, estado: " + data.status);
      }
    });
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
    navigate("/login");
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
    const body = {
      title: formik.values.title,
      organizer: formik.values.organizer,
      description: formik.values.description,
      branches: formik.values.branches,
      requirements: formik.values.requirements,
      dates: formik.values.dates,
    };

    formik.setSubmitting(true);

    eventService.updateEvent(body, pickedEvent.id).then((data) => {
      if (data.id) {
        deleteEventInArray(data.id);
        setEvents((events) => [...events, { ...data }]);
        window.alert("Evento actualizado con exito");
      } else if (data.status === 401) {
        window.alert("Sesion expirada, inicie nuevamente");
        navigate("/login");
      } else {
        window.alert(
          "El evento no pudo ser actualizado, estado: " + data.status
        );
      }
    });

    formik.resetForm();
    formik.setSubmitting(false);

    setPickedEvent({});
    setEditMode(false);
  };
  const deleteEventInArray = (id) => {
    const updatedList = events.filter((e) => e.id != id);
    setEvents(updatedList);
  };

  const handleCancelUpdate = () => {
    setPickedEvent({});
    formik.resetForm();
    setEditMode(false);
  };

  const handleDeleteEvent = (event) => {
    const res = window.confirm("Estas seguro de eliminar este evento?");
    if (res) {
      eventService.deleteEvent(event.id).then((data) => {
        if (data.status === 204) {
          deleteEventInArray(event.id);
          window.alert("Evento eliminado con exito");
        } else if (data.status === 401) {
          window.alert("Sesion expirada, inicie nuevamente");
          navigate("/login");
        } else {
          window.alert(
            "El evento no pudo ser eliminado, estado: " + data.status
          );
        }
      });
    }
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
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 8px 0 16px",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h4" sx={{ color: "brand.brown" }}>
          ADMINISTRACION
        </Typography>
        <Button
          sx={{
            bgcolor: "brand.brown",
            color: "brand.lightgrey",
            borderRadius: 0,
            margin: "16px 24px 16px 24px",
            "&:hover": {
              backgroundColor: "brand.lighbrown",
            },
          }}
          onClick={() => onLogout()}
        >
          <SupervisedUserCircle />
          Cerrar Sesión
        </Button>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "32%", lg: "32%" },
          padding: "24px",
          height: "90%",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          borderRight: " 1px solid",
        }}
      >
        <Typography
          variant="h5"
          sx={{ width: "100%", color: "brand.brown", marginBottom: "8px" }}
        >
          {editMode ? "Editar Evento" : "Crear Evento"}
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={1}>
            <Grid xs={12} item>
              <TextField
                placeholder="Título del evento"
                label="Título"
                variant="outlined"
                fullWidth
                required
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="title"
                sx={{ input: { color: "brand.brown" } }}
                size="small"
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
                size="small"
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
                  variant="outlined"
                  size="small"
                  sx={{ margin: "8px 16px 8px 0px" }}
                />
                <Fab
                  variant="contained"
                  color="primary"
                  onClick={handleAddRequirement}
                  size="small"
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
              <FormLabel id="datesLabel"> Seleccionar Fechas</FormLabel>
              <DayPicker
                mode="multiple"
                min={1}
                selected={formik.values.dates}
                onDayClick={handleDayClick}
                style={{ fontSize: "12px" }}
                locale={es}
                modifiersStyles={{ selected: pickerStyle }}
              />
              {formik.errors.dates && (
                <p style={{ color: "red" }}>{formik.errors.dates}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              {editMode ? (
                <>
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
                  <Button
                    variant="text"
                    fullWidth
                    disabled={formik.isSubmitting}
                    sx={{
                      bgcolor: "brand.brown",
                      color: "white",
                      borderRadius: 0,
                      margin: "16px 0 16px 0",
                    }}
                    onClick={() => handleCancelUpdate()}
                  >
                    CANCELAR
                  </Button>
                </>
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
          <>
            <Typography
              variant="h5"
              sx={{ width: "100%", color: "brand.brown", marginBottom: "8px" }}
            >
              Lista de Eventos
            </Typography>
            <EventList
              events={events}
              handlePickedEvent={handlePickedEvent}
              handleDeleteEvent={handleDeleteEvent}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default EventManager;
