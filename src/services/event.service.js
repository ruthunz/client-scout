import axios from "axios";
import sessionService from "./session.service";

const baseUrl = "http://localhost:3000/v1";

const getAllEvents = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/events`);
    console.log(data);
    return data;
  } catch (error) {
    return [];
  }
};

// const getAllEvents = async () => {
//   if (sessionService.isLogged()) return [];
//   try {
//     const config = {
//       headers: {
//         Authorization: sessionService.getSessionToken(),
//       },
//     };
//     const { data } = await axios.get(`${baseUrl}/events`, config);
//     console.log(data);
//     return data;
//   } catch (error) {
//     window.alert(error.message);
//     return [];
//   }
// };

export default { getAllEvents };
