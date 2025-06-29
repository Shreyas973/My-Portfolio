// components/ContactForm.js
import { useState } from 'react';

const ContactForm = ({ formSubmitted, setFormSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);

    // Reset form
    setFormData({ name: '', email: '', message: '' });

    // Hide success after 5s
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-12">
      {/* Contact Info */}
      <div className="md:w-1/2">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <p className="flex items-center text-gray-300 mb-4">
            <i className="fas fa-envelope text-pink-500 mr-3 text-xl"></i>
            shreyas.s29032004@gmail.com
          </p>
          <p className="flex items-center text-gray-300 mb-8">
            <i className="fas fa-phone text-pink-500 mr-3 text-xl"></i>
            +91 9731804929
          </p>
        </div>

        {/* Social Links */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/shreyas-s29"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
            >
              <i className="fab fa-linkedin-in text-xl text-white"></i>
            </a>
            <a
              href="https://github.com/Shreyas973"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
            >
              <i className="fab fa-github text-xl text-white"></i>
            </a>
          </div>
        </div>

        <a
          href="/images/resume.pdf"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full font-medium transition duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Form */}
      <div className="md:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full font-medium transition duration-300"
          >
            Send Message
          </button>

          {formSubmitted && (
            <div className="text-green-500 text-center mt-4">
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
