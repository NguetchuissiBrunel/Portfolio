import { useState, useEffect } from 'react';
import { Download, Star, GitFork, ExternalLink } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import './Projects.css';

function Projects() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getEnrichedFeatured = () => {
    if (projects.length === 0) return [];

    const sorted = [...projects].sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

    const top2 = sorted.slice(0, 2);

    const enrichmentsData = t('projects.enrichments');

    const imageMap = {
      'Fraud-Detection': "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      'ML_Risque_Pret': "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
      'Map-frontend': "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
      'Map-backend': "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      'Projet-Find-It': "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      'ALANYA': "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      'Gestion-Evenements': "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    };

    const techStackMap = {
      'Fraud-Detection': ["Python", "Jupyter", "Scikit-Learn", "Pandas"],
      'ML_Risque_Pret': ["Python", "Jupyter", "XGBoost", "Data Science"],
      'Map-frontend': ["TypeScript", "React", "OpenLayers", "Leaflet"],
      'Map-backend': ["Java", "Spring Boot", "PostgreSQL", "PostGIS"],
      'Projet-Find-It': ["Java", "Spring Boot", "MySQL", "Hibernate"],
      'ALANYA': ["Java", "JavaFX", "MySQL", "MVC Pattern"],
      'Gestion-Evenements': ["Java", "JPA / Hibernate", "PostgreSQL", "TailwindCSS"],
    };

    return top2.map((repo) => {
      const enrichment = enrichmentsData?.[repo.name] || {};
      return {
        id: repo.id,
        name: enrichment.name || repo.name.replace(/[-_]/g, ' '),
        description: enrichment.desc || repo.description || t('projects.featuredDesc'),
        language: repo.language || "TypeScript",
        techStack: techStackMap[repo.name] || (repo.language ? [repo.language, "Git"] : ["Source Module"]),
        image: imageMap[repo.name] || "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || null,
        stars: repo.stargazers_count,
        forks: repo.forks_count
      };
    });
  };

  const featuredProjects = getEnrichedFeatured();

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const username = 'NguetchuissiBrunel';
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);

        if (!response.ok) throw new Error('Failed to fetch projects');

        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Connection lost. Unable to retrieve repository data.');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(repo => {
    const name = repo.name ? repo.name.toLowerCase() : '';
    const desc = repo.description ? repo.description.toLowerCase() : '';
    const lang = repo.language ? repo.language.toLowerCase() : '';
    const term = searchTerm.toLowerCase();
    return name.includes(term) || desc.includes(term) || lang.includes(term);
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const getLanguageBg = (lang) => {
    if (!lang) return 'https://images.unsplash.com/photo-1618005198143-e52834644027?auto=format&fit=crop&w=400&q=80';
    const l = lang.toLowerCase();
    if (l.includes('typescript')) return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80';
    if (l.includes('javascript')) return 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=400&q=80';
    if (l.includes('java') && !l.includes('javascript')) return 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80';
    if (l.includes('python')) return 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80';
    if (l.includes('css') || l.includes('html')) return 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80';
    return 'https://images.unsplash.com/photo-1618005198143-e52834644027?auto=format&fit=crop&w=400&q=80';
  };

  if (loading) {
    return (
      <div className="projects-loading">
        <div className="loader"></div>
        <p className="gx-text-accent">FETCHING REPOSITORIES...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-error">
        <div className="error-box gx-card">
          <h3 className="gx-text-accent">SYSTEM ERROR</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      {searchTerm === '' && currentPage === 1 && (
        <div className="featured-section">
          <h2 className="section-title featured-section-title">
            <Star size={18} className="gx-text-accent inline-star" /> {t('projects.spotlightTitle')}
          </h2>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="gx-card featured-project-card">
                <div
                  className="featured-image-panel"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="featured-overlay"></div>
                  <span className="featured-tag">{t('projects.featuredTag')}</span>
                </div>

                <div className="featured-content">
                  <h3 className="featured-title">{project.name}</h3>
                  <p className="featured-desc">{project.description}</p>

                  <div className="featured-tech-row">
                    <span className="tech-label">{t('projects.architecture')}</span>
                    <div className="tech-badges">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="featured-actions">
                    <button
                      className="gx-button primary"
                      style={{ flex: 1 }}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Download size={16} /> {t('projects.btnSource')}
                    </button>
                    {project.liveUrl && (
                      <button
                        className="gx-button secondary"
                        style={{ border: '1px solid var(--border-color)', color: '#fff' }}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} /> {t('projects.btnDemo')}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="projects-header">
        <h2 className="section-title">{t('projects.storeTitle')}</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder={t('projects.searchPlaceholder')}
            value={searchTerm}
            onChange={handleSearchChange}
            className="gx-input"
          />
        </div>
      </div>

      {currentProjects.length === 0 ? (
        <div className="projects-empty">
          <p className="gx-text-accent">{t('projects.noMatch')}</p>
        </div>
      ) : (
        <>
          <div className="projects-grid">
            {currentProjects.map((repo) => (
              <div key={repo.id} className="gx-card project-card">
                <div
                  className="project-image-placeholder"
                  style={{ backgroundImage: `url(${getLanguageBg(repo.language)})` }}
                >
                  <div className="project-overlay"></div>
                  <div className="lang-icon">{repo.language || 'CODE'}</div>
                </div>

                <div className="project-info">
                  <h3 className="project-title">{repo.name}</h3>
                  <p className="project-desc">{repo.description || 'No description available for this module.'}</p>

                  <div className="project-meta">
                    <span className="meta-item"><Star size={14} /> {repo.stargazers_count}</span>
                    <span className="meta-item"><GitFork size={14} /> {repo.forks_count}</span>
                    {repo.language && <span className="meta-badge">{repo.language}</span>}
                  </div>
                </div>

                <div className="project-actions">
                  <button
                    className="gx-button"
                    style={{ flex: 1 }}
                    onClick={() => window.open(repo.html_url, '_blank')}
                  >
                    <Download size={16} /> {t('projects.btnInstall')}
                  </button>
                  {repo.homepage && (
                    <button
                      className="gx-button secondary-btn"
                      onClick={() => window.open(repo.homepage, '_blank')}
                      title={t('projects.demoTitle')}
                    >
                      <ExternalLink size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination-container">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                PREV
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
                >
                  {pageNum}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="pagination-btn"
              >
                NEXT
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Projects;
