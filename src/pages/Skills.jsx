import { Code2, Database, Layout, Smartphone, Server, BrainCircuit } from 'lucide-react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="category-icon" />,
      skills: [
        { name: "React", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Vite", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
        { name: "TypeScript", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "TailwindCSS", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Redux", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "HTML5", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="category-icon" />,
      skills: [
        { name: "Node.js", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Python", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Django", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Java", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Spring Boot", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Postman (APIs)", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "GraphQL", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="category-icon" />,
      skills: [
        { name: "React Native", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Android", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
        { name: "Swift / iOS", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="category-icon" />,
      skills: [
        { name: "PostgreSQL", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Firebase", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
        { name: "AWS", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
      ]
    },
    {
      title: "Data & AI",
      icon: <BrainCircuit className="category-icon" />,
      skills: [
        { name: "PyTorch", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "NumPy", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Pandas", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "TensorFlow", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "FastAPI (AI)", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Code2 className="category-icon" />,
      skills: [
        { name: "Git", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Linux", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Figma", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Jira (Scrum)", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "Jenkins (CI/CD)", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" }
      ]
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2 className="section-title">SYSTEM // CAPABILITIES</h2>
      </div>

      <div className="skills-dashboard">
        {skillCategories.map((category, index) => (
          <div key={index} className="gx-card skill-category-card">
            <div className="category-header">
              {category.icon}
              <h3 className="category-title">{category.title}</h3>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="skill-logo"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-meter-container">
                    <div className="skill-level-bar">
                      <div
                        className="skill-level-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
