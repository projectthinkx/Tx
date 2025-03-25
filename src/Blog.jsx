import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "🚀 The Future of AI in Web Development",
      date: "March 10, 2025",
      summary: "Artificial Intelligence is transforming web development with automation, chatbots, and personalized experiences. Learn how AI can boost your website performance.",
    },
    {
      id: 2,
      title: "📱 Why Mobile-First Design is Essential in 2025",
      date: "March 5, 2025",
      summary: "With over 70% of users browsing via mobile, designing for mobile-first is no longer optional. Discover the best practices for a mobile-friendly website.",
    },
    {
      id: 3,
      title: "☁️ Cloud Computing Trends: What’s Next?",
      date: "February 28, 2025",
      summary: "Cloud technologies are evolving rapidly. From edge computing to serverless, explore the latest trends shaping the cloud industry.",
    },
    {
      id: 4,
      title: "🔒 Cybersecurity Best Practices for Startups",
      date: "February 20, 2025",
      summary: "Data breaches are on the rise. Here’s a guide to securing your startup from cyber threats and protecting sensitive user data.",
    },
  ];

  return (
    <section id="blog" className="blog-section">
      <h2>📝 Latest Blog Posts</h2>
      <p>Stay updated with the latest trends and insights in technology and innovation.</p>

      <div className="blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p className="blog-date">📅 {post.date}</p>
            <p className="blog-summary">{post.summary}</p>
            <a href="#" className="read-more">Read More →</a>
          </div>
        ))}
      </div>

      <style>{`
        .blog-section {
          padding: 4rem 2rem;
          text-align: center;
          background-color: #f9f9f9;
        }
        .blog-section h2 {
          color: #2563eb;
          margin-bottom: 1rem;
        }
        .blog-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .blog-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
        }
        .blog-card:hover {
          transform: translateY(-5px);
        }
        .blog-card h3 {
          color: #333;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        .blog-date {
          font-size: 0.9rem;
          color: #777;
        }
        .blog-summary {
          font-size: 1rem;
          color: #555;
          margin: 0.8rem 0;
        }
        .read-more {
          text-decoration: none;
          color: #2563eb;
          font-weight: bold;
          transition: color 0.3s;
        }
        .read-more:hover {
          color: #1a4fd1;
        }
        @media (max-width: 768px) {
          .blog-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;
