import React from 'react'
const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Netlify"],
  },
];
function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-container" style={{textAlign:"left",margin:"10px"}}>
        {skillsData.map((group, index) => (
          <div key={index} className="skill-card">
            <h3>{group.category}</h3>
            <ul>
              {group.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills