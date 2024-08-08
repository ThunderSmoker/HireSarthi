import React from 'react';
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const ServicePage = () => {
    const servicePage = [
        {
            id: 1,
            serviceIcon: "uim-bookmark",
            serviceName: "Smart Resume Parser",
            serviceText: "Efficiently parse and analyze resumes to match the best candidates with job requirements."
        },
        {
            id: 2,
            serviceIcon: "uim-layers-alt",
            serviceName: "AI Assist Interview & Analysis",
            serviceText: "Leverage AI to assist in interviews and provide detailed analysis of candidates."
        },
        {
            id: 3,
            serviceIcon: "uim-graph-bar",
            serviceName: "Application Status Tracking",
            serviceText: "Track the status of applications in real-time for better transparency and management."
        },
        {
            id: 4,
            serviceIcon: "uim-anchor",
            serviceName: "Skill-Based Job Match",
            serviceText: "Match candidates to jobs based on their skills and expertise for a perfect fit."
        },
        {
            id: 5,
            serviceIcon: "uim-airplay",
            serviceName: "Gamified Assessment",
            serviceText: "Engage candidates through gamified assessments and hackathons to test their skills."
        },
        {
            id: 6,
            serviceIcon: "uim-object-ungroup",
            serviceName: "Collaborative Hiring",
            serviceText: "Work on projects or internships with potential candidates to assess their real-world skills."
        },
        {
            id: 7,
            serviceIcon: "uim-history",
            serviceName: "Boot Camps and Career Fairs",
            serviceText: "Organize boot camps and career fairs to connect with potential candidates and enhance recruitment."
        },
        {
            id: 8,
            serviceIcon: "uim-telegram-alt",
            serviceName: "Transparent Profiles",
            serviceText: "Provide transparent profiles for candidates and employers for better visibility and trust."
        },
        {
            id: 9,
            serviceIcon: "uim-rocket",
            serviceName: "Unified Hiring",
            serviceText: "Manage all communication, meetings, and interviews within a single platform."
        },
        {
            id: 10,
            serviceIcon: "uim-graph-bar",
            serviceName: "Personalized Feedback",
            serviceText: "Offer tailored feedback to candidates based on their performance and interactions."
        },
        {
            id: 11,
            serviceIcon: "uim-bookmark",
            serviceName: "Analytics",
            serviceText: "Gain insights through comprehensive analytics to improve recruitment strategies."
        },
        {
            id: 12,
            serviceIcon: "uim-anchor",
            serviceName: "Regionalization",
            serviceText: "Adapt recruitment strategies to various regions for localized hiring solutions."
        }
    ];

    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="section-title text-center">
                                <h3 className="title mb-3">Providing our trusted <span className="text-warning">Services</span></h3>
                                <p className="text-muted">Explore our wide range of services designed to enhance your hiring and job-seeking experience.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {servicePage.map((service, key) => (
                            <Col lg={4} md={6} key={key}>
                                <Card className="service-box mt-4 border-0">
                                    <CardBody className="p-4">
                                        <div className="service-icon icons-md">
                                            <Icon icon={service.serviceIcon} color="#02af74" />
                                        </div>
                                        <div className="mt-4">
                                            <h5>{service.serviceName}</h5>
                                            <p className="text-muted">{service.serviceText}</p>
                                        </div>
                                        <div className="learn-more">
                                            <Link to="#" className="form-text text-primary">Learn More <i className="uil uil-angle-right-b"></i></Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default ServicePage;
