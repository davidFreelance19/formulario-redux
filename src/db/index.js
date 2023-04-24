import imgArcade from "../assets/images/icon-arcade.svg";
import imgAdvaced from "../assets/images/icon-advanced.svg";
import imgPro from "../assets/images/icon-pro.svg";
export const navegacionAside = [
  {
    id: 1,
    name: "Your info",
    url: "/",
  },
  {
    id: 2,
    name: "Select plan",
    url: "/plan",
  },
  {
    id: 3,
    name: "Add-ons",
    url: "/custom-plan",
  },
  {
    id: 4,
    name: "Summary",
    url: "/total-pagar",
  },
];
export const cardPlan = [
  {
    id: 1,
    name: "Arcade",
    pagoMensual: 9,
    img: imgArcade,
    pagoAnual: 90,
  },
  {
    id: 2,
    name: "Advaced",
    pagoMensual: 12,
    img: imgAdvaced,
    pagoAnual: 120,
  },
  {
    id: 3,
    name: "Pro",
    pagoMensual: 15,
    img: imgPro,
    pagoAnual: 150,
  },
];
export const customOptions = [
    {
        id: 1,
        name: "Online service",
        info: "Access to multiplayes games",
        pagoMensual: 1,
        pagoAnual: 10,
      },
      {
        id: 2,
        name: "Larger storage",
        info: "Extra 1TB of cloud save",
        pagoMensual: 2,
        pagoAnual: 20,
      },
      {
        id: 3,
        name: "Customizable Profile",
        info: "Custom theme on your profile", 
        pagoMensual: 2,
        pagoAnual: 20,
      },
]