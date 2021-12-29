import "./styles.css";
import Person from "./Person";
var people = [
  {
    name: "Bob the Builder",
    school: "School of Hard Hats",
    year: "2001",
    color: "Yellow",
    music: "Nursery Rhymes",
    url: "https://www.youtube.com/watch?v=kXj_1u7YlUY",
    socialMedia: "TikTok",
    beachOrMountain: "Mountains"
  },
  {
    name: "Karin",
    school: "UC Berkeley",
    year: "2017",
    color: "Sage",
    music: "Country",
    url: "https://www.youtube.com/watch?v=oOlDewpCfZQ",
    socialMedia: "Instagram",
    beachOrMountain: "Beach"
  },
  {
    name: "Ana",
    school: "CSUEB",
    year: "2016",
    color: "Green",
    music: "Reggea",
    url: "https://www.youtube.com/channel/UCKxbp_TrC0liu7tl0xsmdoA",
    socialMedia: "Instagram",
    beachOrMountain: "Beach"
  },
  {
    name: "Joe",
    school: "School of Schools",
    year: "2021",
    color: "Orange",
    music: "Music",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    socialMedia: "",
    beachOrMountain: ""
  },
  {
    name: "Jayden",
    school: "Burton High School",
    year: "2023",
    color: "Blue",
    music: "No Prefrence",
    url: "",
    socialMedia: "Instagram",
    beachOrMountain: "Beach"
  },
  {
    name: "uber",
    school: "lowella",
    year: "1940",
    color: "burger",
    music: "classic",
    url: "",
    socialMedia: "",
    beachOrMountain: ""
  },
  {
    name: "Maya",
    school: "UC San Diego",
    year: "2016",
    color: "Purple",
    music: "Dance pop",
    url: "https://www.youtube.com/c/Taskmaster",
    socialMedia: "Instagram",
    beachOrMountain: "Mountains"
  },
  {
    name: "David",
    school: "Burton",
    year: "2023",
    color: "Crimson Red",
    music: "Folk",
    url: "https://www.youtube.com/watch?v=vWJvQveHDLk",
    socialMedia: "",
    beachOrMountain: ""
  },
  {
    name: "Kevin",
    school: "Carnegie Mellon",
    year: "2015",
    color: "Blue",
    music: "Pop",
    url: "https://www.youtube.com/c/twosetviolin",
    socialMedia: "Instagram",
    beachOrMountain: "Beach"
  },
  {
    name: "Old",
    school: "School",
    year: "1987",
    color: "Red",
    music: "Rock",
    url: "",
    socialMedia: "",
    beachOrMountain: "Mountains"
  },
  {
    name: "ca",
    school: "bal",
    year: "2022",
    color: "blue",
    music: "pop",
    url: "N/A",
    socialMedia: "N/A",
    beachOrMountain: ""
  },
  {
    name: "Mike Wazowski",
    school: "Monster University",
    year: "5021",
    color: "lime green",
    music: "Kpop",
    url: "https://www.youtube.com/watch?v=QllBbRPTsE0",
    socialMedia: "TikTok",
    beachOrMountain: "Mountains"
  }
];

export default function App() {
  let listOfPeople = [];
  for (let i = 0; i < people.length; i++) {
    listOfPeople.push(<Person info={people[i]} />);
  }
  return <div className="container">{listOfPeople}</div>;
}
