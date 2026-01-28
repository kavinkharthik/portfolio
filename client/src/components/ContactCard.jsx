import React from 'react'

function ContactCard({ label, value, href, icon, iconImage }) {
  const isExternal = href.startsWith('http')

  return (
    <div className="contact-card">
      <p className="label contact-label">
        {iconImage ? (
          <img className="contact-label__img" src={iconImage} alt={label} />
        ) : (
          <span className="contact-label__icon">{icon}</span>
        )}
        {label}
      </p>
      <a className="link" href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined}>
        {value}
      </a>
    </div>
  )
}

export default ContactCard
