import css1 from "../img/portImages/cv_css.png";
import css2 from "../img/portImages/ms.png";
import react1 from "../img/portImages/react_styled.png";
import img2 from "../img/portImages/maya-4.jpg";
import port1 from "../img/portImages/port1.png";
import paxos1 from "../img/portImages/paxos1.PNG";
import ML1 from "../img/portImages/ML_lab3.PNG";

const portfolios = [
  {
    id: 1,
    category: ["Go"],
    image: paxos1,
    link1: "https://www.google.com",
    link2: "https://www.google.com",
    title: "Comparative analysis of Multi-Paxos, Raft and Compartmentalization",
    text: "Academic Report, Distributed System.",
    internalLink: "portfolio1",
  },
  {
    id: 2,
    category: ["Python"],
    image: ML1,
    link1: "https://www.google.com",
    link2: "https://www.google.com",
    title:
      "Visualization for Classifiers of Maximum-likelihood, Parzen windows, KNN  ",
    text: "Academic Report, Machine Learning.",
    internalLink: "portfolio2",
  },
  {
    id: 3,
    category: ["Javascript", "CSS", "React JS"],
    image: port1,
    link1: "https://www.google.com",
    link2: "https://www.google.com",
    title: "Responsive Portfolio Website",
    text: "Created Using React JS, Styled-Components and more...",
    internalLink: "portfolio3",
  },
  {
    id: 4,
    category: ["Go", "React JS"],
    image: img2,
    link1: "https://www.google.com",
    link2: "https://www.google.com",
    title: "Bank Transaction System with Reconfiguration Function",
    text: "React JS, Golang, Web Socket, Realtime communication",
    internalLink: "portfolio4",
  },
  {
    id: 5,
    category: ["React JS"],
    image: img2,
    link1: "https://www.google.com",
    link2: "https://www.google.com",
    title: "Coming Soon...",
    text: "Coming Soon...",
    internalLink: "portfolio5",
  },
];

export default portfolios;
