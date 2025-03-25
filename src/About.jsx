import React from "react";

const About = () => {
  return (
    <>
        <section id="about" className="about-section">
      <h2>About BuildWith</h2>
      <p>
        <strong>BuildWith</strong> is a next-generation technology startup focused on delivering <strong>innovative digital solutions</strong> that empower businesses and individuals. 
        Established in <strong>2025</strong>, we specialize in <strong>web development, mobile applications, cloud computing, UI/UX design, and automation</strong> to drive the future of digital transformation.
      </p>

      <div className="mission-vision-container">
        <div className="mission">
          <h3>🚀 Our Mission</h3>
          <p>
            At BuildWith, our mission is to <strong>bridge the gap between ideas and reality</strong> by providing cutting-edge technological solutions.  
            We aim to help businesses scale, optimize, and innovate through <strong>AI-powered automation, intelligent systems, and future-ready applications</strong>.
          </p>
        </div>
        <div className="vision">
          <h3>💡 Our Vision</h3>
          <p>
            We envision a world where technology enhances human potential. Our focus is on creating <strong>smart, scalable, and efficient solutions</strong> that redefine how businesses operate in the <strong>digital era</strong>.
          </p>
        </div>
      </div>

      <h3> What Makes Us Unique?</h3>
      <ul>
        <li><strong>Tech-Driven Innovation:</strong> We integrate AI, ML, and automation to enhance business efficiency.</li>
        <li><strong>Scalable Solutions:</strong> Our cloud-based platforms are designed for growth and sustainability.</li>
        <li><strong>Industry Expertise:</strong> Our experienced team brings expertise in diverse industries, from finance to healthcare.</li>
        <li><strong>User-Centric Approach:</strong> We prioritize seamless UI/UX for an intuitive digital experience.</li>
      </ul>

      <h3>🛠️ Technologies & Features We Build</h3>
      <p>
        BuildWith is constantly evolving with the latest technologies. We work with:
      </p>
      <ul>
        <li><strong>AI-Powered Applications:</strong> Smart chatbots, NLP solutions, and automation tools</li>
        <li><strong>Full-Stack Web & Mobile Development:</strong> Using React, Next.js, React Native, and Flutter</li>
        <li><strong>Cloud Computing & DevOps:</strong> Scalable cloud solutions on <strong>AWS, Azure, and Google Cloud</strong></li>
        <li><strong>Cybersecurity & Ethical Hacking:</strong> Ensuring secure applications with advanced security measures</li>
      </ul>

      <button className="cta-button" aria-label="Discover more about BuildWith">Discover More</button>

      <style>{`
        .about-section {
          text-align: center;
          padding: 4rem 2rem;
          background-color: #000;
          color: white;
          box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
        }
        .about-section h2 {
          font-size: 2rem;
          color: #4f9cf9;
          margin-bottom: 1rem;
        }
        .mission-vision-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 2rem;
          margin: 2rem 0;
        }
        .mission, .vision {
          flex: 1;
          min-width: 300px;
          padding: 1.5rem;
          background: #222;
          border-radius: 8px;
          box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.2);
        }
        .about-section h3 {
          font-size: 1.5rem;
          color: #ddd;
          margin-top: 1.5rem;
        }
        .about-section p {
          max-width: 800px;
          margin: 0 auto 1rem;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #ccc;
        }
        .about-section ul {
          list-style: none;
          padding: 0;
          max-width: 800px;
          margin: 0 auto 1rem;
        }
        .about-section ul li {
          background: #222;
          padding: 0.8rem;
          margin:20px  0;
          border-radius: 6px;
          color: white;
          box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.2);
        }
        .cta-button {
          background-color: #4f9cf9;
          color: white;
          padding: 0.8rem 1.5rem;
          border: none;
          cursor: pointer;
          margin-top: 2rem;
          box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.2);
        }
        @media (max-width: 768px) {
          .about-section {
            padding: 2rem 1rem;
          }
          .about-section h2 {
            font-size: 1.8rem;
          }
          .about-section h3 {
            font-size: 1.3rem;
          }
          .about-section p, .about-section ul {
            font-size: 1rem;
          }
          .mission-vision-container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
    </>
  );
};

export default About;
