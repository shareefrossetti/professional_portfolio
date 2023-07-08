import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';

export const Projects = () => {




  const projects = [
    {
      title: "Youtube Clone",
      description: "A Youtube Clone built with React JS and Material UI",
      imgUrl: projImg1,
      id: 1,
    },
    {
      title: "Recipe Search",
      description: "Design & Development",
      imgUrl: projImg2,
      id: 2,
    },
    {
      title: "Shoppy Admin Dashboard",
      description: "Design & Development",
      imgUrl: projImg3,
      id: 3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg4,
      id: 4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg6,
    },
  ];

  const handleClick = (e) => {
    // console.log(projects, e.target.innerHTML)
      if (e.target.innerHTML === projects[0].title) window.location.href = 'https://youtubeclone-sr.netlify.app/';
      if (e.target.innerHTML === projects[1].title) window.location.href = 'https://recipe-search-sr.netlify.app/';
      if (e.target.innerHTML === projects[2].title) window.location.href = 'https://shoppy-dashboard-sr.netlify.app/';
    };






  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In my full stack development projects, I have successfully designed and implemented end-to-end solutions, leveraging my expertise in front-end technologies and back-end frameworks to create robust and scalable applications with seamless integration of databases and APIs.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                  onClick={handleClick}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
