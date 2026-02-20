
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '40px', backgroundColor: 'cyan' }}>
      <h1 style={{ color: '#003366' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%', borderRadius: '10px'}}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%', borderRadius: '10px' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%', height: '100px', borderRadius: '10px'}}
        />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#003366', color: 'white', border: 'none' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
