import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Send } from "lucide-react";
import "../../styles/contact.css";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Form submission simulation. In a real app, this would send an email or store in a database.",
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-left"
          >
            <div>
              <h2 className="contact-heading">
                Ready to scale your{" "}
                <span className="contact-heading-accent">growth?</span>
              </h2>
              <p className="contact-subtext">
                Whether you need a fractional growth lead, a campaign audit, or
                full-service media buying, let's talk about hitting your revenue
                targets.
              </p>
            </div>

            <div className="contact-links">
              <a
                href="mailto:vamsikrishna27.m@gmail.com"
                className="contact-link contact-link-email"
              >
                <div className="contact-link-icon email">
                  <Mail />
                </div>
                <div>
                  <p className="contact-link-label">Email Me</p>
                  <p className="contact-link-value">vamsikrishna27.m@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/vamsi-krishna-167193238/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link contact-link-linkedin"
              >
                <div className="contact-link-icon linkedin">
                  <Linkedin />
                </div>
                <div>
                  <p className="contact-link-label">Connect on LinkedIn</p>
                  <p className="contact-link-value">
                    linkedin.com/in/vamsi-krishna-167193238
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact-form-card">
              <h3 className="contact-form-title">Send a Message</h3>

              <div className="contact-form-fields">
                <div className="contact-form-group">
                  <label htmlFor="name" className="contact-form-label">
                    Name
                  </label>
                  <Input
                    id="name"
                    required
                    placeholder="John Doe"
                    className="contact-form-input"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-form-label">
                    Work Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="contact-form-input"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message" className="contact-form-label">
                    How can I help?
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell me about your growth goals, target audience, and current challenges..."
                    className="contact-form-textarea"
                  />
                </div>
              </div>

              <Button type="submit" className="contact-submit-btn">
                Let's Grow Your Business 🚀
                <Send />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}