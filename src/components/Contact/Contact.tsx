import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <p className="contact-label">CONTACT</p>
      <h2 className="contact-heading">
        Don't be shy! Hit me up! <span>&#x1F447;</span>
      </h2>

      <div className="contact-items">
        <div className="contact-item">
          <div className="contact-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7843e9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="contact-info">
            <h3>Location</h3>
            <p>Kigali, Rwanda</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7843e9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className="contact-info">
            <h3>Mail</h3>
            <a href="mailto:nsumbaherve11@gmail.com">nsumbaherve11@gmail.com</a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7843e9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="contact-info">
            <h3>Phone</h3>
            <a href="tel:+250799902073">+250 799 902 073</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
