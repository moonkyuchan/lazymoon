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

const navs = {
  1: [
    { key: 1, name: "All" },
    { key: 2, name: "Fashion" },
    { key: 3, name: "Arts & Culture" },
    { key: 4, name: "Music" },
    { key: 5, name: "Film" },
    { key: 6, name: "etc" },
  ],
  2: [
    { key: 1, name: "All" },
    { key: 2, name: "Travel" },
    { key: 3, name: "Cafe" },
    { key: 4, name: "Food" },
    { key: 7, name: "etc" },
  ],
  3: [
    { key: 1, name: "All" },
    { key: 2, name: "Travel" },
    { key: 3, name: "Fashion" },
    { key: 4, name: "Arts & Culture" },
    { key: 5, name: "Music" },
    { key: 6, name: "Film" },
    { key: 7, name: "etc" },
  ],
};

export { pages, navs };
