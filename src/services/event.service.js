import axios from "axios";
import sessionService from "./session.service";

const baseUrl = import.meta.env.VITE_API_URL;

const getAllEvents = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/events`);
    return data;
  } catch (error) {
    return [];
  }
  //
};

const getUpcomingEvents = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/events/public/upcoming`);
    return data;
  } catch (error) {
    return [];
  }
};

const createEvent = async (body) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionService.getSessionToken(),
      },
    };
    const { data } = await axios.post(`${baseUrl}/events`, body, config);
    return data;
  } catch (error) {
    console.log("CATCH ERROR: " + JSON.stringify(error));
    if (error.message.includes("401")) {
      sessionService.logout();
      return { status: 401 };
    }
    return error;
  }
};

const updateEvent = async (body, eventId) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionService.getSessionToken(),
      },
    };
    const { data } = await axios.patch(
      `${baseUrl}/events/${eventId}`,
      body,
      config
    );
    return data;
  } catch (error) {
    if (error.message.includes("401")) {
      sessionService.logout();
      return { status: 401 };
    }
    return error;
  }
};

const deleteEvent = async (eventId) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionService.getSessionToken(),
      },
    };
    return await axios.delete(`${baseUrl}/events/${eventId}`, config);
  } catch (error) {
    if (error.message.includes("401")) {
      sessionService.logout();
      return { status: 401 };
    }
    return error;
  }
};

export default {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getUpcomingEvents,
};
