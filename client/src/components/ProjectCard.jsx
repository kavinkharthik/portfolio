import React from 'react'

function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="card__header">
        <h3>{project.name}</h3>
        {project.github && (
          <a className="chip" href={project.github} target="_blank" rel="noreferrer">
            View repo →
          </a>
        )}
      </div>
      <p className="muted">{project.description}</p>
    </article>
  )
}

export default ProjectCard
