import { motion } from "framer-motion";
import { ArrowRight, BarChart2 } from "lucide-react";
import dashboardImg from "@/assets/dashboard.png";
import "../../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">

      {/* Background Orbs */}
      <div className="hero-orb-primary" />
      <div className="hero-orb-purple" />

      <div className="hero-container">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-left"
        >
          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot">
              <span className="hero-badge-dot-ping" />
              <span className="hero-badge-dot-core" />
            </span>
      
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Driving <span className="text-gradient">High-Quality Leads</span> & Scalable Growth Through Data-Driven Digital Marketing
          </h1>

          {/* Description */}
          <p className="hero-description">
            I turn ad spend into measurable pipeline. Specializing in PPC, B2B lead generation, and conversion optimization for high-growth companies.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <button
              className="hero-btn-primary"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
              <ArrowRight />
            </button>
            <button
              className="hero-btn-outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Hire Me
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">340%</span>
              <span className="hero-stat-label">Lead Volume Growth</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-value">$2M+</span>
              <span className="hero-stat-label">Ad Spend Managed</span>
            </div>
            <div className="hero-stat-divider hero-stat-hidden" />
            <div className="hero-stat hero-stat-hidden">
              <span className="hero-stat-value">4.8x</span>
              <span className="hero-stat-label">Average ROAS</span>
            </div>
          </div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hero-right"
        >
         <div className="hero-image-card">
            <div className="hero-image-overlay" />
            <img
              src={dashboardImg}
              alt="High-performance marketing dashboard visualization showing growth metrics"
              className="hero-dashboard-img"
              loading="lazy" style={{ paddingBottom: "100px", alignItems: "center" }}  
                 
            /> 
            <div className="hero-metric-badge">
              <div className="hero-metric-icon">
                <BarChart2 />
              </div>
              <div>
                <p className="hero-metric-label">Conversion Rate</p>
                <p className="hero-metric-value">+4.2x Growth</p>
              </div>
            </div>
          </div>
        </motion.div> 

      </div>
    </section>
  );
}