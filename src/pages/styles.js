// HOME
import Image from "/pngwing.com2.png";

export const homeContainer = {
  backgroundImage: `url(${Image})`,
  //backgroundSize: { xs: "cover", sm: "cover", md: "contain", lg: "contain" },
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "brand.grey",
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
  width: "250px",
  height: "250px",
  background: "linear-gradient(-45deg, red, orange)",
  borderRadius: "250px 250px 0px 250px",
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
    width: "200px",
    height: "200px",
    display: "block",
    position: "absolute",
    background: "linear-gradient(-45deg, red, orange)",
    animation: ".2s flame infinite",
    transform: "scale(.8) rotate(20deg)",
    borderRadius: "200px 200px 0px 200px",
    top: "20px",
  },
  "&::before": {
    top: 0,
    animationDuration: ".09s",
    transform: "scale(.9) rotate(-15deg) translate(10px, 0px)",
  },
  "@keyframes flame": {
    "0%": { height: "250px", width: "250px" },
    "50%": { height: "240px", width: "240px" },
    "100%": { height: "250px", width: "250px" },
  },
};
