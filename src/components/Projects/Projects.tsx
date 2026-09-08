import './Projects.css';

type ProjectStatus = 'live' | 'building' | 'done';

interface Project {
  title: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  liveUrl?: string;
  codeUrl?: string;
  image?: string;
}

const collaborativeProjects: Project[] = [
  {
    title: 'Artha & Alita Apartments',
    description:
      'A website and booking system for two apartments located in Kigali. Users can browse available apartments, view details, and make reservations seamlessly through the platform.',
    tech: ['Next.js'],
    status: 'building',
    liveUrl: 'https://ingoma-stays.vercel.app/',
    image: '/projects/artha-alita-apartments.png',
  },
  {
    title: 'Auntentic Media Group',
    description:
      'A website for a media group where they can post news articles and live stream both their radio and TV channels to their audience.',
    tech: ['Next.js'],
    status: 'building',
    liveUrl: 'https://auntentic-media-group.vercel.app/',
    image: '/projects/auntentic-media-group.png',
  },
];

const personalProjects: Project[] = [
  {
    title: 'JobPortal Web Application',
    description:
      'A full-stack web application that connects job providers with job seekers. Employers can post job positions while candidates can browse and apply for jobs through the platform.',
    tech: ['React', 'Spring Boot', 'Spring Security', 'Docker', 'REST API', 'PostgreSQL'],
    status: 'building',
    image: '/projects/jobportal.png',
  },
  {
    title: 'Idempotency Gateway (Pay-Once Protocol)',
    description:
      'A Spring Boot REST API that prevents duplicate payment processing using an Idempotency-Key. Simulates a fintech payment backend where repeated payment requests with the same key are processed only once. Backend only, testable via Postman.',
    tech: ['Spring Boot', 'REST API', 'PostgreSQL'],
    status: 'done',
    image: '/projects/idempotency.png',
  },
];

const dataPipelines: Project[] = [
  {
    title: 'Electric Power Analytics',
    description:
      'An end-to-end data pipeline for global electricity consumption: World Bank API to PostgreSQL to cleaned analysis table, forecasts, a Tableau dashboard, and an AI assistant that answers questions in plain English. A scheduled GitHub Actions workflow refreshes data daily on free infrastructure with no server to maintain.',
    tech: ['Python', 'PostgreSQL', 'GitHub Actions', 'Tableau'],
    status: 'live',
    liveUrl:
      'https://public.tableau.com/app/profile/herve.nsumba.irakoze/viz/ElectricPowerConsumptionAnalytics/Dashboard1',
    image: '/projects/electric-power-analytics.png',
  },
  {
    title: 'Flight Data Pipeline',
    description:
      'A data pipeline that receives unstructured flight data from email, processes it through a script to an S3 (AWS) bucket, then loads and cleans the data in Snowflake to build a complete, automated pipeline.',
    tech: ['Python', 'AWS S3', 'Snowflake'],
    status: 'building',
    image: '/projects/flight-data-pipeline.png',
  },
];

const statusBadge = (status: ProjectStatus) => {
  const labels: Record<ProjectStatus, string> = {
    live: 'Live',
    building: 'In Progress',
    done: 'Completed',
  };
  return <span className={`project-status status-${status}`}>{labels[status]}</span>;
};

interface ProjectCardProps {
  project: Project;
  reverse: boolean;
}

const ProjectCard = ({ project, reverse }: ProjectCardProps) => {
  return (
    <div className={`project-card ${reverse ? 'project-card--reverse' : ''}`}>
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-image-placeholder">
            <span>Project Image</span>
          </div>
        )}
      </div>
      <div className="project-card__content">
        <div className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>
          {statusBadge(project.status)}
        </div>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
        <div className="project-card__links">
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              Code{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              Live Demo{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <p className="projects-label">PORTFOLIO</p>
      <h2 className="projects-heading">
        Each project is a unique piece of development <span>&#x1F9E9;</span>
      </h2>

      {/* Collaborative Projects */}
      <div className="projects-category">
        <h3 className="category-title">Collaborative Projects</h3>
        <div className="projects-list">
          {collaborativeProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>

      {/* Personal Projects */}
      <div className="projects-category">
        <h3 className="category-title">Personal Projects</h3>
        <div className="projects-list">
          {personalProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>

      {/* Data Pipelines */}
      <div className="projects-category">
        <h3 className="category-title">Data Pipelines</h3>
        <div className="projects-list">
          {dataPipelines.map((project, index) => (
            <ProjectCard key={project.title} project={project} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
