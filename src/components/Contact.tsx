import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:mahith1010@gmail.com" data-cursor="disable">
                mahith1010@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.S. Computer Science, Arizona State University</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href="https://github.com/mahithw" target="_blank" data-cursor="disable" className="contact-social">
              Github <MdArrowOutward />
            </a>
            <a href="https://linkedin.com/in/mahithw" target="_blank" data-cursor="disable" className="contact-social">
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Let's build something <br /> <span>real.</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Mahith Wuppandla
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
