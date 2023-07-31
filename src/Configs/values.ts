import tower from "@/Asset/Images/french.jpeg";
import bridge from "@/Asset/Images/bridge.jpeg";
import home from "@/Asset/Images/home.jpeg";

const pages = [
  {
    key: 1,
    img: bridge,
    title: "DAILY",
    content: "daily",
  },
  {
    key: 2,
    img: tower,
    title: "PLACE",
    content: "place",
  },
  {
    key: 3,
    img: home,
    title: "ET CETERA",
    content: "etc",
  },
  {
    key: 4,
    img: tower,
    title: "PLACE",
    content: "place",
  },
  {
    key: 5,
    img: home,
    title: "ET CETERA",
    content: "etc",
  },
];

const category = [
  { key: 1, title: "All Articles", tag: "all" },
  { key: 2, title: "Place", tag: "place" },
  { key: 3, title: "Arts & Culture", tag: "artsculture" },
  { key: 4, title: "Fashion", tag: "fashion" },
  { key: 5, title: "Films", tag: "films" },
];

export { pages, category };
