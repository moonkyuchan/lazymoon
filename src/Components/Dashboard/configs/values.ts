import tower from "@/Asset/Images/french.jpeg";
import bridge from "@/Asset/Images/bridge.jpeg";
import home from "@/Asset/Images/home.jpeg";

const pages = [
  {
    key: 1,
    ref: "1",
    name: bridge,
    title: "DAILY",
    path: "daily",
    position: "40% 60%",
  },
  {
    key: 2,
    ref: "2",
    name: tower,
    title: "PLACE",
    path: "place",
    position: "center",
  },
  {
    key: 3,
    ref: "3",
    name: home,
    title: "ET CETERA",
    path: "etc",
    position: "center",
  },
];

export { pages };
