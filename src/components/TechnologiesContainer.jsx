import {
  DiHtmlS,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";
import "../styles/components/technologiesContainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtmlS /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavScript", icon: <DiJsBadge /> },
  { id: "node", name: "HNode.JS", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const TechnologiesContainer = () => {
    return (
    <section className="technologies-grid">
      <h2>Tecnologias</h2>
      <div className="technologies-grig">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technologiy-info">
              <p>Lorem ipsum dolor sit amet consector</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
