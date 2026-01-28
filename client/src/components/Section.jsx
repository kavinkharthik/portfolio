function Section({ title, children, id }) {
  return (
    <section className="section" id={id}>
      <div className="section__header">
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  )
}

export default Section
