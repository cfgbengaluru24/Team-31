import React from 'react';

const testimonials = [
  {
    username: 'Goskonda Sanjana Reddy',
    text: "I am writing to express my gratitude for allowing me to volunteer in your organization. I have always admired the noble work done by the Rohini Foundation. I worked as a volunteer for 2 months at the Rohini Foundation, where I assisted in the dental screening camps and COVID-19 vaccination drive. I enjoyed being able to contribute to this noble work. I will always be grateful for this opportunity. Thank you, Rohini Foundation, for making me a part of this noble endeavour.",
  },
  {
    username: 'Bondugula Mahitha Reddy',
    text: "I would like to express my heartfelt gratitude to the Rohini Foundation for allowing me to volunteer. The primary goal of the Rohini Foundation is to enhance children's oral health, which has a positive impact on their overall well-being. My month-long volunteering experience with the Rohini Foundation has helped me improve my public relations skills, and I am always proud to be a part of your organization. I would be even happier if I were given more opportunities to work with the Rohini Foundation.",
  },
  {
    username: 'Cheruku Nitya Reddy',
    text: "I would like to express that my experience with Rohini Foundation has been excellent. I have volunteered during blood donation camps, dental screening, and treatment camps for underprivileged children. Rohini Foundation is a place where I can continue the volunteering that I love and expand my skills through your programs. Through my association with Rohini Foundation, I have experienced positive outcomes in this role. Thank you, Rohini Foundation, for this opportunity. I look forward to learning more and contributing my strengths to your organization.",
  },
  {
    username: 'Abhinav Reddy Desai',
    text: "It gives me immense pleasure to say that the Rohini Foundation consistently provides oral health care to underprivileged children. I am pleased to work with such an organization. I have been volunteering with them during dental screening and dental treatment camps for a month. It has been a great learning experience for me in the field of healthcare. I have improved my interpersonal communication skills. Working with your organization has professionally improved my skills. I have always been fond of the Rohini Foundation and would like to work with your organization more.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Volunteers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-box">
            <p className="username">{testimonial.username}</p>
            <p className="text">{testimonial.text}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .testimonials-container {
          text-align: center;
          margin-top: 40px;
          padding: 0 20px;
        }

        .testimonials-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 20px;
          color: #333;
          position: relative;
          display: inline-block;
        }

        .testimonials-title::after {
          content: '';
          display: block;
          width: 50%;
          margin: 10px auto 0;
          height: 3px;
          background: #0070f3;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          justify-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .testimonial-box {
          width: 100%;
          max-width: 500px;
          padding: 20px;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .username {
          font-weight: bold;
          color: #0070f3;
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .text {
          color: #555;
          font-size: 1rem;
          line-height: 1.5;
          text-align: justify;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
