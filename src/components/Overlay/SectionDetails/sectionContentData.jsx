// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "About us",
    content: (
      <p>
        Welcome to our 3D portfolio, created by techoverflows. This experience helped us boost our confidence and develop our
        soft and technical skills, gearing us up for future challenges. Check it
        out and witness the amazing outcome of our teamwork! 📱✨🎉
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
