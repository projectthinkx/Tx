import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>📞 Contact Us</h2>
      <p>We’d love to hear from you! Get in touch with us via email, phone, or our contact form.</p>

      <div className="contact-details">
        <p>📍 <strong>Address:</strong> 123 Build With Street, Build with Area, BW</p>
        <p>📧 <strong>Email:</strong> contact@buildwith.com</p>
        <p>📞 <strong>Phone:</strong> +91 9084028409</p>
      </div>

      <div className="social-links">
        <a href="#" target="_blank" rel="">🔗 LinkedIn</a>
        <a href="#" target="_blank" rel="">🐦 Twitter</a>
        <a href="#" target="_blank" rel="">💻 GitHub</a>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="map-container">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509533!2d-122.08424968469232!3d37.42199977982553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24fbb5f5f5f%3A0x2f7a4fd18f4a8f8b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1615823654321!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <style>{`
        body{
          color:black;
        }
        .contact-section {
          padding: 4rem 2rem;
          text-align: center;
          background-color: #f8f9fa;
        }
        .contact-section h2 {
          color: #2563eb;
          margin-bottom: 1rem;
        }
        .contact-details p {
          font-size: 1.1rem;
          margin: 0.5rem 0;
        }
        .social-links {
          margin: 1rem 0;
        }
        .social-links a {
          margin: 0 1rem;
          text-decoration: none;
          font-size: 1.2rem;
          color: #2563eb;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 500px;
          margin: 1rem auto;
        }
        .contact-form input, .contact-form textarea {
          width: 100%;
          padding: 0.8rem;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
        .contact-form textarea {
          height: 120px;
          resize: none;
        }
        .contact-form button {
          background-color: #2563eb;
          color: white;
          padding: 0.8rem;
          border: none;
          cursor: pointer;
        }
        .map-container {
          margin-top: 2rem;
        }
      `}</style>
    </section>
  );
};

export default Contact;
