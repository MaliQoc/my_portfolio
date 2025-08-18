import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">

        {/* Footer Bottom: Sosyal İkonlar + Tasarımcı Yazısı */}
        <div className="footer-bottom">
          <div className="footer-social">
            <a
              href="https://www.instagram.com/_alii.kocc_/"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://github.com/MaliQoc"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ali-hasan-ozan-ko%C3%A7-9b0636202/"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-linkedin"></i>
            </a>
          </div>

          <span className="footer-copy">&copy; Designed by Ali Hasan Ozan KOÇ.</span>
        </div>
      </div>
    </footer>
  );
}
