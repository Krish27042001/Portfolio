import { motion } from "framer-motion";
import { SiGoogle, SiMeta } from "react-icons/si";
import { Search, MousePointerClick, Target, Linkedin } from "lucide-react";
import "../../styles/skills.css";

const skills = [
  { name: "Google Ads",   icon: SiGoogle,          level: 95, colorClass: "skill-google-ads", barClass: "bar-google-ads" },
  { name: "Meta Ads",     icon: SiMeta,             level: 90, colorClass: "skill-meta-ads",   barClass: "bar-meta-ads"   },
  { name: "LinkedIn Ads", icon: Linkedin,           level: 88, colorClass: "skill-linkedin",   barClass: "bar-linkedin"   },
  { name: "SEO & SEM",    icon: Search,             level: 85, colorClass: "skill-seo-sem",    barClass: "bar-seo-sem"    },
  { name: "B2B Lead Gen", icon: Target,             level: 92, colorClass: "skill-b2b",        barClass: "bar-b2b"        },
  { name: "CRO",          icon: MousePointerClick,  level: 80, colorClass: "skill-cro",        barClass: "bar-cro"        },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <h2 className="skills-title">
            Core <span className="skills-title-accent">Competencies</span>
          </h2>
          <p className="skills-subtitle">
            The technical stack and strategic skills I use to build growth engines.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="skills-card"
            >
              <div className="skills-card-header">
                <div className="skills-card-info">
                  <div className={`skills-icon-wrapper ${skill.colorClass}`}>
                    <skill.icon />
                  </div>
                  <h3 className="skills-card-name">{skill.name}</h3>
                </div>
                <span className="skills-card-level">{skill.level}%</span>
              </div>

              <div className="skills-bar-track">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className={`skills-bar-fill ${skill.barClass}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}