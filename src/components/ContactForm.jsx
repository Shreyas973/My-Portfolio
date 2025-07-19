// ContactForm.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = ({ formSubmitted, setFormSubmitted }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);

    try {
      await fetch('https://script.google.com/macros/s/AKfycby3N5NhYho4IdJ4aNM62iu38gJtS4ML0g_2EEvzQyiB92hbmxmmNVRx6uVQgAcyr2_8/exec', {
        method: 'POST',
        body: form,
      });

      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 1000);
    } catch (error) {
      console.error('Error submitting to Google Sheet:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-12"
    >
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
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/shreyas-s29" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
              <i className="fab fa-linkedin-in text-xl text-white"></i>
            </a>
            <a href="https://github.com/Shreyas973" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
              <i className="fab fa-github text-xl text-white"></i>
            </a>
          </div>
        </div>
        <a href="/images/Shreyas(Resume).pdf"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full font-medium transition duration-300">
          Download Resume
        </a>
      </div>

      <div className="md:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500" />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500" />
          <textarea name="message" placeholder="Your Message" rows="5" required value={formData.message} onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
          <button type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full font-medium transition duration-300">
            Send Message
          </button>

          {formSubmitted && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-500 text-center mt-4">
              Message sent successfully!
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;