import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Icon } from '@iconify/react';

const Features = () => {
    const features = [
        {
            id: 1,
            featureIcon: "uim-bookmark",
            featureName: "Smart Resume Parser"
        },
        {
            id: 2,
            featureIcon: "uim-layers-alt",
            featureName: "AI Assist Interview & Analysis"
        },
        {
            id: 3,
            featureIcon: "uim-graph-bar",
            featureName: "Application Status Tracking"
        },
        {
            id: 4,
            featureIcon: "uim-anchor",
            featureName: "Skill-Based Job Match"
        },
        {
            id: 5,
            featureIcon: "uim-airplay",
            featureName: "Gamified Assessment"
        },
        {
            id: 6,
            featureIcon: "uim-object-ungroup",
            featureName: "Collaborative Hiring"
        },
        {
            id: 7,
            featureIcon: "uim-history",
            featureName: "Boot Camps & Career Fairs"
        },
        {
            id: 8,
            featureIcon: "uim-telegram-alt",
            featureName: "Transparent Profiles"
        },
        {
            id: 9,
            featureIcon: "uim-rocket",
            featureName: "Unified Hiring"
        },
        {
            id: 10,
            featureIcon: "uim-graph-bar",
            featureName: "Personalized Feedback"
        },
        {
            id: 11,
            featureIcon: "uim-bookmark",
            featureName: "Analytics"
        },
        {
            id: 12,
            featureIcon: "uim-anchor",
            featureName: "Regionalization"
        }
    ];

    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className="section-title text-center mb-5">
                                <h3 className="title mb-4">Key Features</h3>
                                <p className="para-desc text-muted mx-auto">
                                    Discover the innovative features that make HireSarthi the ultimate platform for both recruiters and job seekers.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {features.map((feature, key) => (
                            <Col lg={4} md={6} className="mt-4 pt-2" key={key}>
                                <div className="about-feature p-3 d-flex align-items-center rounded-3">
                                    <div className="feature-icon flex-shrink-0">
                                        <Icon icon={feature.featureIcon} className="text-primary" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="fs-18 mb-0">{feature.featureName}</h6>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Features;
