import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Import Images
import AboutImage from "../../../assets/images/about/img-01.jpg";

const About = () => {
    return (
        <React.Fragment>
            <section className="section overflow-hidden">
                <Container>
                    <Row className="align-items-center g-0">
                        <Col lg={6}>
                            <div className="section-title me-lg-5">
                                <h6 className="sub-title">About Us</h6>
                                <h2 className="title mb-4">Why <span className="text-warning fw-bold">35,000+</span> People Trust HireSarthi?</h2>
                                <p className="text-muted">
                                    HireSarthi offers a comprehensive platform that integrates advanced hiring solutions with innovative technology. We provide everything you need to streamline the hiring process, from AI-assisted interviews to skill-based job matching and gamified assessments. Discover why thousands trust us to connect talent with opportunity.
                                </p>

                                <Row mt={4} pt={2}>
                                    <Col md={6}>
                                        <ul className="list-unstyled about-list text-muted mb-0 mb-md-3">
                                            <li> Smart Resume Parsing</li>
                                            <li> AI-Driven Interview Assistance</li>
                                            <li> Real-Time Application Tracking</li>
                                            <li> Skill-Based Job Matching</li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className="list-unstyled about-list text-muted">
                                            <li> Gamified Assessments & Hackathons</li>
                                            <li> Collaborative Hiring Opportunities</li>
                                            <li> Boot Camps and Career Fairs</li>
                                            <li> Transparent Candidate & Employer Profiles</li>
                                        </ul>
                                    </Col>
                                </Row>
                                <div className="mt-3">
                                    <Link to="#" className="btn btn-primary btn-hover">Learn More <i className="uil uil-angle-right-b align-middle"></i></Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="about-img mt-4 mt-lg-0">
                                <img src={AboutImage} alt="About HireSarthi" className="img-fluid rounded" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default About;
