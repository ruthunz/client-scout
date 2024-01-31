// HOME
import Image from "/pngwing.com2.png";

export const homeContainer = {
  backgroundImage: `url(${Image})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "black",
  paddingTop: "4%",
  height: "92%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflowY: "hidden",
};

export const homeContainerSection2 = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const flame = {
  width: { xs: "350px", sm: "350px", md: "550px", lg: "550px" },
  height: { xs: "350px", sm: "350px", md: "550px", lg: "550px" },
  background: "linear-gradient(-45deg, red, orange)",
  borderRadius: {
    xs: "350px 350px 0px 350px",
    sm: "350px 350px 0px 350px",
    md: "550px 550px 0px 550px",
    lg: "550px 550px 0px 550px",
  },
  transform: "rotate(-135deg)",
  animation: ".1s flame infinite",
  filter: "blur(10px)",
  position: "relative",
  boxShadow: "17px 20px 90px #700",
  border: "45px solid black",
  borderLeftWidth: "25px",
  borderTopWidth: "25px",
  "&::before": {
    content: '""',
    width: { xs: "350px", sm: "350px", md: "550px", lg: "550px" },
    height: { xs: "350px", sm: "350px", md: "550px", lg: "550px" },
    display: "block",
    position: "absolute",
    background: "linear-gradient(-45deg, red, orange)",
    animation: ".2s flame infinite",
    transform: "scale(.8) rotate(20deg)",
    borderRadius: {
      xs: "350px 350px 0px 350px",
      sm: "350px 350px 0px 350px",
      md: "550px 550px 0px 550px",
      lg: "550px 550px 0px 550px",
    },
    top: "20px",
  },
  "&::before": {
    top: 0,
    animationDuration: ".09s",
    transform: "scale(.9) rotate(-15deg) translate(10px, 0px)",
  },
  "@keyframes flame": {
    "0%": { height: "100%", width: "100%" },
    "50%": { height: "98%", width: "98%" },
    "100%": { height: "100%", width: "100%" },
  },
};
