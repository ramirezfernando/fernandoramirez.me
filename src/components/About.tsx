import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";

import "../styles/About.css";
import fern from '../assets/fern.jpeg';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

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
            <Avatar className='w-[200px] h-[200px]'>
              <AvatarImage src={fern} alt="@shadcn" />
              <AvatarFallback>FR</AvatarFallback>
            </Avatar>
        </Grid>
        <Grid item sm={12} md={8}>
          <Fade in timeout={{ enter: 1200 }}>
            <div>
              <p>
                Hi{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏼
                </span>{" "}
                I'm Fernando, a recent CS graduate from the University of Houston. 
                I'm interested in anything tech &mdash; especially backend development and
                distributed systems. I love working on projects that have meaningful impact.
                <br />
                <br />
                {' '} Currently, I'm a software engineer at {" "} 
                <a
                  href="https://www.microsoft.com/en-us/"
                  className='underline-offset-4'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Microsoft
                </a> {" "} working on developer productivity and tooling for one of the largest monorepos in Office 365. {" "}
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
                {" "}team, where I worked on improving the free trial for over 1 million customers! {" "}            
                Prior to that, I was a teaching assistant for the following courses: {" "}
                <a
                  href="https://cougargrades.io/c/COSC%203380"
                  className='underline-offset-4'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COSC 3380: Database Systems
                </a>
                , and {" "}
                <a
                  href="https://cougargrades.io/c/COSC%201336"
                  className='underline-offset-4'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COSC 1336: Computer Science and Programming
                </a>.
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
                <a
                  href="https://www.linkedin.com/in/fndo/"
                  className='underline-offset-4'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  connect!
                </a>
              </p>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;