// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "About us",
    content: (
      <p>
        This project, titled "Immersive 3D Portfolio with VR-Styled Design Using Three.js and React," 
        showcases an interactive and visually engaging web portfolio that allows users to explore 
        content in a 3D environment. It mimics a real-world workspace with a laptop setup,
        animated interactions, and embedded websites, creating an immersive experience. 
        By using modern web technologies like Three.js, React, and Theatre.js, the project
        aims to push the boundaries of traditional portfolio designs and present information 
        in a more engaging and futuristic way.
      </p>
    ),
  },
  { key: "team", title: "Our team", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "Credits",
    content: (
      <ul className="credits">
        <li>
          <a href="https://www.chingu.io/">Chingu</a>
        </li>
        <li>
          <a href="https://threejs-journey.com/">three.js</a>
        </li>
        <li>
          <a href="https://poly.pizza">poly.pizza</a>
        </li>
        <li>
          <a href="https://www.syntystudios.com">synty studios</a>
        </li>
        <li>
          <a href="https://streakbyte.com">streakbyte</a>
        </li>
        <li>
          <a href="https://sketchfab.com/feed">
            Sketchfab
          </a>
        </li>
      </ul>
    ),
  },
];

export default sectionsContentData;
