import { motion } from "framer-motion";
import { SiGoogleanalytics, SiHotjar, SiHubspot, SiGoogle, SiMeta, SiZoho } from "react-icons/si";
import { Linkedin } from "lucide-react";
import "../../styles/analytics.css";

const tools = [
  { name: "Google Analytics 4",      icon: SiGoogleanalytics, colorClass: "icon-google-analytics" },
  { name: "Google Search Console",   icon: SiGoogle,          colorClass: "icon-google"            },
  { name: "Meta Business Suite",     icon: SiMeta,            colorClass: "icon-meta"              },
  { name: "LinkedIn Campaign Manager", icon: Linkedin,        colorClass: "icon-linkedin"          },
  { name: "Zoho Analytics",          icon: SiZoho,          colorClass: "icon-zoho"              },
  { name: "HubSpot",                 icon: SiHubspot,         colorClass: "icon-hubspot"           },
];

export default function Analytics() {
  return (
    <section id="analytics" className="analytics-section">
      <div className="analytics-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="analytics-header"
        >
          <h2 className="analytics-title">
            Analytics & <span className="analytics-title-accent">Tools</span>
          </h2>
          <p className="analytics-subtitle">
            Mastery of the platforms that track, measure, and optimize every interaction.
          </p>
        </motion.div>

        <div className="analytics-grid">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="analytics-card"
            >
              <div className={`analytics-icon-wrapper ${tool.colorClass}`}>
                <tool.icon className="analytics-icon" />
              </div>
              <span className="analytics-tool-name">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}