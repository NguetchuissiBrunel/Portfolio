import { useState, useEffect } from 'react';
import { Download, Star, GitFork, ExternalLink } from 'lucide-react';
import './Projects.css';

function Projects() {
  const featuredProjects = [
    {
      id: "featured-1",
      name: "Nexus AI Suite",
      description: "An AI-powered workspace integration that automates complex data pipeline analysis, predicts model metrics, and optimizes data structures dynamically.",
      language: "Python & React",
      techStack: ["FastAPI", "React", "PyTorch", "MongoDB"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/NguetchuissiBrunel/nexus-ai",
      liveUrl: "https://nexus-ai.example.com"
    },
    {
      id: "featured-2",
      name: "YowPainter Mobile Client",
      description: "A premium mobile marketplace & commerce client built for custom paint designers and wall-design artists. Features live color previews and instant checkout.",
      language: "React Native",
      techStack: ["React Native", "Spring Boot", "PostgreSQL", "Redux"],
      image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/NguetchuissiBrunel/yowpainter-app",
      liveUrl: "https://yowpainter.example.com"
    }
  ];

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Search and Pagination States
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    // Fetch all repositories from GitHub API
    const fetchProjects = async () => {
      try {
        const username = 'NguetchuissiBrunel';
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        
        const data = await response.json();
        // Remove forks if necessary, or keep all
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

  // Filter projects by search term
  const filteredProjects = projects.filter(repo => {
    const name = repo.name ? repo.name.toLowerCase() : '';
    const desc = repo.description ? repo.description.toLowerCase() : '';
    const lang = repo.language ? repo.language.toLowerCase() : '';
    const term = searchTerm.toLowerCase();
    
    return name.includes(term) || desc.includes(term) || lang.includes(term);
  });

  // Reset pagination page on search change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Pagination index calculators
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Helper to map dynamic abstract covers based on project programming language
  const getLanguageBg = (lang) => {
    if (!lang) return 'https://images.unsplash.com/photo-1618005198143-e52834644027?auto=format&fit=crop&w=400&q=80';
    const l = lang.toLowerCase();
    if (l.includes('typescript') || l.includes('ts')) {
      return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80';
    }
    if (l.includes('javascript') || l.includes('js')) {
      return 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=400&q=80';
    }
    if (l.includes('java') && !l.includes('javascript')) {
      return 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80';
    }
    if (l.includes('python') || l.includes('py')) {
      return 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80';
    }
    if (l.includes('css') || l.includes('scss') || l.includes('html')) {
      return 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80';
    }
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
          <p>Please verify your connection or GitHub username.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      {/* Featured Projects Spotlight (Only show on first page when not searching) */}
      {searchTerm === '' && currentPage === 1 && (
        <div className="featured-section">
          <h2 className="section-title featured-section-title">
            <Star size={18} className="gx-text-accent inline-star" /> FEATURED PROJECTS // SPOTLIGHT
          </h2>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="gx-card featured-project-card">
                <div 
                  className="featured-image-panel"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="featured-overlay"></div>
                  <span className="featured-tag">FEATURED PROTOCOL</span>
                </div>
                
                <div className="featured-content">
                  <h3 className="featured-title">{project.name}</h3>
                  <p className="featured-desc">{project.description}</p>
                  
                  <div className="featured-tech-row">
                    <span className="tech-label">ARCHITECTURE:</span>
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
                      <Download size={16} /> View Source
                    </button>
                    {project.liveUrl && (
                      <button 
                        className="gx-button secondary"
                        style={{ border: '1px solid var(--border-color)', color: '#fff' }}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} /> Demo
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
        <h2 className="section-title">STORE // REPOSITORIES</h2>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search projects..." 
            value={searchTerm}
            onChange={handleSearchChange}
            className="gx-input" 
          />
        </div>
      </div>

      {currentProjects.length === 0 ? (
        <div className="projects-empty">
          <p className="gx-text-accent">NO MODULES MATCHING SEARCH QUERY</p>
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
                    <Download size={16} /> Install Source
                  </button>
                  {repo.homepage && (
                    <button 
                      className="gx-button secondary-btn"
                      onClick={() => window.open(repo.homepage, '_blank')}
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Glowing Gaming Pagination Controls */}
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
