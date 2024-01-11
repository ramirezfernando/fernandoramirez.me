import Fade from "@mui/material/Fade";
import '../styles/Contact.css';
import { BLUE, YELLOW, PINK } from '../constants';

const Contact = () => {
  return (
    <div className={`contact-container`}>
      <Fade in timeout={{ enter: 1200 }}>
        <div className='contact-content'>
          <h2>
            Got an <span style={{ color: PINK }}>interesting</span>{' '}
            project you're working on, or just want to say{' '}
            <span style={{ color: PINK }}>hi</span>?
          </h2>
          <p>
            I'd love to hear from you!
            <br />
            <br />
            The best way to reach me is to shoot me an email at{' '}
            <a
              href='mailto:ramirez.fernando2003@gmail.com'
              style={{ color: YELLOW }}
              target='_blank'
              rel='noopener noreferrer'
            >
                ramirez.fernando2003@gmail.com
            </a>
            .
            <br />
            <br />
            You can also connect with me on{' '}
            <a
              href='https://www.linkedin.com/in/fndo/'
              style={{ color: BLUE }}
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;