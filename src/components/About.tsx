import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";

import "../styles/About.css";
import fern from '../assets/fern.jpeg';

const About = () => {
  return (
    <div className="about-container px-4 md:px-0">
      <Grid
        container
        style={{
          textAlign: "left",
          maxWidth: "80rem",
          marginBottom: "3rem",
        }}
      >
        <Grid
          item
          sm={12}
          md={4}
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "2rem 0px 3rem 0px",
            justifyContent: "center",
          }}
        >
            {/* TODO: Lazy load image*/}
              <img
                style={{ opacity: 1 }}
                src={fern}
                alt="me"
              />
        </Grid>
        <Grid item sm={12} md={8}>
          <Fade in timeout={{ enter: 1200 }}>
            <div>
              <p>
                Hi{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏼
                </span>{" "}
                I'm Fernando, a senior at the University of Houston studying CS. 
                I'm interested in anything tech &mdash; especially backend development and
                distributed systems. I love working on projects that have meaningful impact.
                <br />
                <br />
                {' '} Currently, I work as a teaching assistant for{" "}
                <a
                  href="https://publications.uh.edu/preview_course_nopop.php?catoid=44&coid=210742"
                  className='underline-offset-4'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COSC 3380: Database Systems
                </a>
                {" "}at the University of Houston. 
                
                After graduation, I'll be joining {" "}
                <a
                  href="https://www.microsoft.com/en-us/"
                  className='underline-offset-4'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Microsoft
                </a>
                {" "}as a software engineer.
                
                I've previously worked as a software engineer intern at {" "}
                <a
                  href="https://aws.amazon.com/"
                  className='underline-offset-4'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon Web Services (AWS)
                </a>
                {" "} on the {" "}
                <a
                  href="https://aws.amazon.com/blogs/mt/announcing-aws-cloudtrail-lake-a-managed-audit-and-security-lake/"
                  className='underline-offset-4'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CloudTrail Lake
                </a>
                {" "}team, where I worked on improving the free trial for over 1 million customers!
                <br />
                <br />
                If I'm not coding away, you can find me playing video games, or finding my new favorite restaurant.
                <br />
                <br />
                Check out some of my past{" "}
                <Link
                  to={`/projects`}
                  className='underline-offset-4'
                >
                  projects
                </Link>{" "}
                and feel free to{" "}
                <Link
                  to={`/contact`}
                  className='underline-offset-4'
                >
                  connect!
                </Link>
              </p>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;