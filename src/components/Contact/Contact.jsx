import { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    const templateParameters = {
      from_name: name,
      from_email: email,
      to_name: "Ali Hasan Ozan KOÇ",
      message: message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParameters, PUBLIC_KEY)
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Your message sent successfully!");
      })
      .catch(() => toast.error("Your message could not be sent."));
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      <span className="section-subtitle"></span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk to Me</h3>

          <div className="contact-info">
            <div className="contact-card">
              <i className="bx bx-mail-send contact-card-icon"></i>

              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">alihasanozankoc@gmail.com</span>

              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
                className="contact-button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <i className="bx bxl-linkedin-square contact-card-icon"></i>

              <h3 className="contact-card-title">LinkedIn</h3>
              <span className="contact-card-data">alihasanozankoc</span>

              <a
                href="https://www.linkedin.com/in/ali-hasan-ozan-ko%C3%A7-9b0636202/"
                target="_blank"
                className="contact-button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <i className="bx bxl-instagram contact-card-icon"></i>

              <h3 className="contact-card-title">Instagram</h3>
              <span className="contact-card-data">_alii.kocc_</span>

              <a
                href="https://www.instagram.com/_alii.kocc_/"
                target="_blank"
                className="contact-button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Write me your project.</h3>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value.trim())}
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Your name"
                required
              />
            </div>
            <div className="contact-form-div">
              <label className="contact-form-tag">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Your email address"
                required
              />
            </div>
            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Project Description</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="project"
                className="contact-form-input"
                placeholder="Describe your project"
                required
              ></textarea>
            </div>

            <button className="button button-flex">
              Send Message
              <svg
                className="button-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
