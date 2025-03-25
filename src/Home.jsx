import React from "react";

const Home = () => {
  return (
   <> 
    <div className="container">
        <section className="hero">
            <h1>we are not only developers !</h1>
            <p>We can focus on innovative solutions, fast-paced development, and scaling products quickly 
            to address market gaps. Developers wear multiple hats, building and iterating 
            on core features while adapting to evolving challenges.</p>
            <a href="/contact">Contact Us</a>
        </section>
        <section className="about">
        <div className="loud-wrap" >
              <h1>Customer First services</h1>
        </div>
        <div className="content">
              <h2>Innovative Solutions</h2>
              <p>  We offer fresh, creative products/services designed to address specific pain points in the market,
                making life easier or more efficient for our customers.</p>
        </div>
        <div className="content">
            <h2>Service Efficeint</h2>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </section>

      <section className="service-section">
      <h2>Our Services</h2>
      <p>We provide cutting-edge digital solutions to help businesses thrive in the modern era.</p>

      <div className="services-list">
        <div className="service">
          <h3>🌐 Web Development</h3>
          <p>We build high-performance, scalable websites using React, Next.js, and modern web technologies.</p>
        </div>

        <div className="service">
          <h3>📱 Mobile App Development</h3>
          <p>Creating seamless and intuitive mobile experiences for iOS and Android using React Native & Flutter.</p>
        </div>

        <div className="service">
          <h3>☁️ Cloud Solutions</h3>
          <p>Leverage the power of AWS, Azure, and Google Cloud for scalable and secure cloud infrastructure.</p>
        </div>

        <div className="service">
          <h3>🤖 AI & Automation</h3>
          <p>Enhance your business with AI-driven chatbots, automation tools, and intelligent data processing.</p>
        </div>

        <div className="service">
          <h3>📈 Digital Marketing</h3>
          <p>Boost your brand’s presence with SEO, social media marketing, and performance-driven advertising.</p>
        </div>
      </div>

      <button className="cta-button">Explore More Services</button>

      </section>

      <section className="technologies-section">
      <h2>Our Technologies</h2>
      <p>We use the latest and most powerful technologies to deliver high-quality solutions.</p>

      <div className="technologies-list">
        <div className="technology">
          <h3>🌐 Web Development</h3>
          <p>React.js, Next.js, Angular, Vue.js, HTML, CSS, JavaScript</p>
        </div>

        <div className="technology">
          <h3>📱 Mobile App Development</h3>
          <p>React Native, Flutter, Swift, Kotlin</p>
        </div>

        <div className="technology">
          <h3>☁️ Cloud & DevOps</h3>
          <p>AWS, Azure, Google Cloud, Docker, Kubernetes, CI/CD</p>
        </div>

        <div className="technology">
          <h3>🤖 AI & Machine Learning</h3>
          <p>Python, TensorFlow, OpenAI, NLP, Chatbots</p>
        </div>

        <div className="technology">
          <h3>📊 Database & Backend</h3>
          <p>Node.js, Express, Django, PostgreSQL, MongoDB, Firebase</p>
        </div>
      </div>

      </section>

      <section className="contact">
      <h2>Contact Us</h2>
      <p>Have a project in mind? Let's work together to build something amazing!</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Email: contact@buildwith.com</p>
        <p>Phone: +91 9040932842</p>
        <p>Address: 123 Build With Street, Mdu City</p>
      </div>

      <div className="social-links">
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">LinkedIn</a>
        <a href="#" target="_blank">Twitter</a>
      </div>
      </section>
    </div>
    <style>{`
        body{
            margin:0;
            padding:0;
            box-sizing: border-box;
            width:100%;
        }
        .container{
            margin: 100px auto;
            margin-bottom:0;
            padding: 0 1rem;
        }
        .hero,.about,.services,.technologies {
            border-radius:20px;
            text-align: center;
            padding:40px 20px;
            background-color: white;
            color:black;
            margin:20px;
            widht:100%;
        }
        .contact{
            display:flex;
            flex-direction:column;
            height:50%;
            bottom:0;
            margin:0;
            text-align:center;
        }
    
        .hero a{
            background-color:black;
            color:white;
            text-decoration:none;
            border:2px solid black;
            padding:5px 10px;
            border-radius:10px;
        }
        .about, .services, .technologies {
          text-align: center;
        }
        button {
          padding: 0.7rem 1.5rem;
          background-color: #2563eb;
          color: white;
          border: none;
          cursor: pointer;
          margin-top: 1rem;
        }
        .services-section,.technologies-section {
            text-align: center;
            padding: 3rem;
            background-color: #f8f9fa;
            color:black;
          }
          .services-list,.technologies-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
            margin-top: 2rem;
          }
          .service,.technology {
            background: white;
            color:black;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            width: 300px;
          }
          .service h3 {
            color: #2563eb;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
          }
          .cta-button {
            background-color: #2563eb;
            color: white;
            padding: 0.8rem 1.5rem;
            border: none;
            cursor: pointer;
            margin-top: 2rem;
          }
          .technologies-section {
            text-align: center;
            padding: 3rem;
            background-color:inherit;
            color:rgba(255,255,255,0.8);
        //   }
        //   .technologies-list {
        //     display: flex;
        //     flex-wrap: wrap;
        //     justify-content: center;
        //     gap: 1.5rem;
        //     margin-top: 2rem;
        //   }
        //   .technology {
        //     background: white;
        //     padding: 1.5rem;
        //     border-radius: 8px;
        //     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        //     width: 300px;
        //   }
          .technology h3 {
            color: #2563eb;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
          }
        .contact-section {
            text-align: center;
            padding: 3rem;
            background-color: #f8f9fa;
          }
          .contact-form {
            display: flex;
            flex-direction: column;
            max-width: 400px;
            margin: 1rem auto;
          }
          .contact-form input,
          .contact-form textarea {
            padding: 0.8rem;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
          }
          .contact-form button {
            background-color:black;
            border-radius:10px;
            color: white;
            padding: 0.8rem;
            border: none;
            cursor: pointer;
          }
          .contact-info {
            margin-top: 2rem;
          }
          .social-links a {
            margin: 0 10px;
            text-decoration: none;
            color:white;
            border-bottom:2px solid white;
            font-weight: bold;
          }
      `}</style>
    </>
  );
};



export default Home;

