import React, { useState } from 'react';
import { Code2, Database, Layout, Smartphone, Server, BrainCircuit } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import './Skills.css';

function Skills() {
  const { t } = useLanguage();
  const [activeSkillTab, setActiveSkillTab] = useState('dev');

  const skillCategories = [
    {
      titleKey: "categories.frontend",
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
      titleKey: "categories.backend",
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
      titleKey: "categories.mobile",
      icon: <Smartphone className="category-icon" />,
      skills: [
        { name: "React Native", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Android", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
        { name: "Swift / iOS", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" }
      ]
    },
    {
      titleKey: "categories.database",
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
      titleKey: "categories.ai",
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
      titleKey: "categories.design",
      icon: <Layout className="category-icon" />,
      skills: [
        { name: "Adobe Illustrator", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
        { name: "Adobe Photoshop", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
        { name: "Figma", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
      ]
    },
    {
      titleKey: "categories.tools",
      icon: <Code2 className="category-icon" />,
      skills: [
        { name: "Git & GitHub", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: t('skills.maple'), level: 85, logo: "" },
        { name: t('skills.office'), level: 95, logo: "" },
        { name: "Linux OS", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
      ]
    },
    {
      titleKey: "categories.languages",
      icon: <BrainCircuit className="category-icon" />,
      skills: [
        { name: t('skills.french'), level: 100, logo: "" },
        { name: t('skills.english'), level: 75, logo: "" }
      ]
    }
  ];

  const devCategories = skillCategories.slice(0, 5);
  const nonDevCategories = skillCategories.slice(5);

  const renderSkillLogo = (skill) => {
    if (skill.logo) {
      return (
        <img
          src={skill.logo}
          alt={skill.name}
          className="skill-logo"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      );
    }

    if (skill.name.includes("Maple") || skill.name.includes("Maple")) {
      return (
        <svg className="skill-logo-svg" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" style={{ width: '18px', height: '18px', marginRight: '10px', display: 'inline-block', verticalAlign: 'middle' }}>
          <path d="M12 2s1.5 4 2.5 4.5S18 6 18 6s-.5 3.5.5 4.5 3.5-.5 3.5-.5-2.5 3-2 4.5 3 2.5 3 2.5-3.5 0-4.5 1.5 0 3.5 0 3.5-1.5-2.5-2.5-2.5-2.5 2.5-2.5 2.5 0-3.5 0-3.5-3.5-1.5-4.5-1.5 3-1 3-2.5-2-3-2-4.5 3.5.5 3.5-.5.5-4.5.5-4.5 3.5.5 4.5.5S12 2 12 2z" fill="rgba(250, 25, 59, 0.25)" />
        </svg>
      );
    }
    if (skill.name.includes("Office") || skill.name.includes("Suite")) {
      return (
        <svg className="skill-logo-svg" viewBox="0 0 24 24" fill="none" stroke="#0078d4" strokeWidth="2" style={{ width: '18px', height: '18px', marginRight: '10px', display: 'inline-block', verticalAlign: 'middle' }}>
          <rect x="3" y="3" width="7" height="9" rx="1" fill="rgba(0, 120, 212, 0.2)" />
          <rect x="14" y="3" width="7" height="5" rx="1" fill="rgba(0, 120, 212, 0.2)" />
          <rect x="14" y="12" width="7" height="9" rx="1" fill="rgba(0, 120, 212, 0.2)" />
          <rect x="3" y="16" width="7" height="5" rx="1" fill="rgba(0, 120, 212, 0.2)" />
        </svg>
      );
    }
    if (skill.name.includes("Français") || skill.name.includes("French")) {
      return (
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/fr.svg"
          alt="France Flag"
          className="skill-logo"
          style={{ width: '18px', height: '13px', borderRadius: '1px', objectFit: 'cover', marginRight: '10px', display: 'inline-block', verticalAlign: 'middle' }}
        />
      );
    }
    if (skill.name.includes("Anglais") || skill.name.includes("English")) {
      return (
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/gb.svg"
          alt="UK Flag"
          className="skill-logo"
          style={{ width: '18px', height: '13px', borderRadius: '1px', objectFit: 'cover', marginRight: '10px', display: 'inline-block', verticalAlign: 'middle' }}
        />
      );
    }

    return null;
  };

  const renderCategoryCard = (category, index) => (
    <div key={index} className="gx-card skill-category-card">
      <div className="category-header">
        {category.icon}
        <h3 className="category-title">{t(`skills.${category.titleKey}`)}</h3>
      </div>

      <div className="skills-list">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="skill-item">
            <div className="skill-info">
              {renderSkillLogo(skill)}
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
  );

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2 className="section-title">{t('skills.title')}</h2>
      </div>

      {/* --- TAB CONTROL INTERFACE --- */}
      <div className="skills-tabs-container">
        <button
          className={`skills-tab-button ${activeSkillTab === 'dev' ? 'active' : ''}`}
          onClick={() => setActiveSkillTab('dev')}
        >
          <Code2 size={16} /> {t('skills.tabDev')}
        </button>
        <button
          className={`skills-tab-button ${activeSkillTab === 'non-dev' ? 'active' : ''}`}
          onClick={() => setActiveSkillTab('non-dev')}
        >
          <Layout size={16} /> {t('skills.tabNonDev')}
        </button>
      </div>

      {/* --- RENDERED MODULE --- */}
      <div className="skills-tab-content active">
        {activeSkillTab === 'dev' ? (
          <div className="skills-section-wrapper">
            <h3 className="skills-section-subtitle gx-text-accent">{t('skills.subtitleDev')}</h3>
            <div className="skills-dashboard">
              {devCategories.map((category, index) => renderCategoryCard(category, index))}
            </div>
          </div>
        ) : (
          <div className="skills-section-wrapper">
            <h3 className="skills-section-subtitle gx-text-accent">{t('skills.subtitleNonDev')}</h3>
            <div className="skills-dashboard">
              {nonDevCategories.map((category, index) => renderCategoryCard(category, index))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
