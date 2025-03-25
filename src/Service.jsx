import React from "react";

const Service = () => {
  return (
   <>
         <section id="services-technologies" className="services-technologies">
      <div className="services">
        <h2>🚀 Our Services</h2>
        <p>We provide cutting-edge digital solutions to help businesses thrive in the modern era.</p>
        <ul>
          <li>💻 <strong>Web Development:</strong> Responsive, high-performance websites and web apps.</li>
          <li>📱 <strong>Mobile App Development:</strong> Native & cross-platform mobile solutions.</li>
          <li>☁️ <strong>Cloud Services:</strong> Scalable & secure cloud computing solutions.</li>
          <li>🤖 <strong>AI & Automation:</strong> Smart AI solutions, chatbots, and process automation.</li>
          <li>📊 <strong>Data Analytics:</strong> Transforming raw data into meaningful insights.</li>
          <li>🛡️ <strong>Cybersecurity:</strong> Ethical hacking & security assessments to protect your business.</li>
        </ul>
      </div>

      <div className="technologies">
        <h2>🛠️ Technologies We Use</h2>
        <p>We work with the latest technologies to build future-ready solutions.</p>
        <ul>
          <li>⚡ <strong>Frontend:</strong> React.js, Next.js, Angular, Vue.js</li>
          <li>🖥️ <strong>Backend:</strong> Node.js, Django, FastAPI, Laravel</li>
          <li>📱 <strong>Mobile:</strong> React Native, Flutter, Swift, Kotlin</li>
          <li>☁️ <strong>Cloud & DevOps:</strong> AWS, Azure, Google Cloud, Docker, Kubernetes</li>
          <li>🔍 <strong>AI & Machine Learning:</strong> TensorFlow, OpenAI, Computer Vision</li>
          <li>🔐 <strong>Security & Ethical Hacking:</strong> Penetration testing, Encryption protocols</li>
        </ul>
      </div>

      <style>{`
      body{
        color:black;
      }
        .services-technologies {
          padding: 4rem 2rem;
          text-align: center;
          background-color: #f8f9fa;
        }
        .services, .technologies {
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .services h2, .technologies h2 {
          color: #2563eb;
          margin-bottom: 1rem;
        }
        .services p, .technologies p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 1rem;
        }
        .services ul, .technologies ul {
          list-style: none;
          padding: 0;
        }
        .services ul li, .technologies ul li {
          background: #f0f4ff;
          padding: 0.8rem;
          margin: 0.3rem 0;
          border-radius: 6px;
          font-size: 1.1rem;
        }
        @media (max-width: 768px) {
          .services, .technologies {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>

   </>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
  },
};

export default Service;
