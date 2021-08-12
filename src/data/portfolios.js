import css1 from "../img/portImages/cv_css.png";
import css2 from "../img/portImages/ms.png";
import react1 from "../img/portImages/react_styled.png";
import img2 from "../img/portImages/maya-4.jpg";
import port1 from "../img/portImages/port1.PNG";
import paxos1 from "../img/portImages/paxos1.PNG";
import ML1 from "../img/portImages/ML_lab3.PNG";
import bank from "../img/portImages/bank.png";
import alice from "../img/portImages/alice.PNG";
const portfolios = [
  {
    id: 1,
    category: ["Academic Report"],
    image: paxos1,
    link1: "https://www.google.com",
    link2: "https://www.google.com",
    title: "Consensus Protocols",
    text: "Academic Report, Distributed System. Comparative analysis of Multi Paxos, Raft and Compartmentalization",
    internalLink: "portfolio1",
  },
  {
    id: 2,
    category: ["Python"],
    image: ML1,
    link1: "https://www.google.com",
    link2: "https://www.google.com",
    title: "Data Visualization",
    text: "Python, Machine Learning: Visualization for Classifiers of Maximum likelihood, Parzen windows, KNN ",
    internalLink: "portfolio2",
  },
  {
    id: 3,
    category: ["Javascript", "CSS", "React JS"],
    image: port1,
    link1: "https://www.google.com",
    link2: "https://www.google.com",
    title: "Responsive Portfolio Website",
    text: "Created Using React JS, Styled Components and more...",
    internalLink: "portfolio3",
  },
  {
    id: 4,
    category: ["Go", "React JS", "Javascript", "CSS"],
    image: bank,
    link1: "https://www.google.com",
    link2: "https://www.google.com",
    title: "Bank Transaction System",
    text: "React JS, Golang, Web Socket. Back end: Build a cluster of servers using go language with implementation of multi-paxos consensus algorithm and leader detector scheme. Front end: Use React Javascript to build bank transaction UI. Reconfiguration function: the number of servers could be scaled up and down by reconfiguration. ",
    internalLink: "portfolio4",
  },
  {
    id: 5,
    category: ["Python", "Academic Report"],
    image: alice,
    link1: "https://www.google.com",
    link2: "https://www.google.com",
    title: "Secure communication in the network",
    text: "Implementaion of two web servers & their secure communication. Public Key Change, CSPRNG & Symmetric Cipher and Decipher ",
    internalLink: "portfolio5",
  },
];

export default portfolios;
