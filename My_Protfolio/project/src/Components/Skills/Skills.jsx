import Backend from "./Backend";
import Frontend from "./Frontend";
import './skill.css'
export default function Skills() {
  return (
   <section className="skills section" id="skills">
    <h2 className="section_title">Skills</h2>
    <span className="section__subtitle">My Technical Level</span>
    <div className="skills__container container grid">
        <Frontend/>
        <Backend/>
    </div>
   </section>
  )
}
