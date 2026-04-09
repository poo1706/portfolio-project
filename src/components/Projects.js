import React from 'react'

function Projects() {
    const projects = [
    { name: "Portfolio Website", desc: "My personal site",img: "https://media.geeksforgeeks.org/wp-content/uploads/20240212174013/Portfolio-Website-copy.webp" },
    { name: "E-commerce App", desc: "React + Node project",img: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?semt=ais_hybrid&w=740&q=80" },
  ];
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div key={i} className="card">
          <h3>{p.name}</h3>
          <img src={p.img} loading="lazy" width="200px"/>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  )
}

export default Projects