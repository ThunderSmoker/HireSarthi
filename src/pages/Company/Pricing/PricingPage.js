import React from 'react';
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const PricingPage = () => {
    const recruiterPlans = [
        {
            id: 1,
            pricingIcon: "uim-telegram-alt",
            pricingName: "Basic",
            pricingPrice: "$19.99",
            pricingSuccessClass: "btn-soft-primary",
            pricingDetails: [
                {
                    id: 1,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Job postings & application tracking"
                },
                {
                    id: 2,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Basic analytics reports"
                },
                {
                    id: 3,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Access to candidate profiles"
                },
                {
                    id: 4,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Skill-based job matching"
                },
                {
                    id: 5,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Gamified assessments"
                },
                {
                    id: 6,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Collaborative hiring tools"
                },
            ]
        },
        {
            id: 2,
            pricingIcon: "uim-rocket",
            pricingName: "Pro",
            pricingPrice: "$39.99",
            pricingSuccessClass: "btn-primary",
            pricingDetails: [
                {
                    id: 1,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Everything in Basic"
                },
                {
                    id: 2,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Advanced analytics reports"
                },
                {
                    id: 3,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Skill-based job matching"
                },
                {
                    id: 4,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Gamified assessments"
                },
                {
                    id: 5,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Collaborative hiring tools"
                },
                {
                    id: 6,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Career fair participation"
                },
            ]
        },
        {
            id: 3,
            pricingIcon: "uim-bag",
            pricingName: "Enterprise",
            pricingPrice: "$79.99",
            pricingSuccessClass: "btn-soft-primary",
            pricingDetails: [
                {
                    id: 1,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Everything in Pro"
                },
                {
                    id: 2,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Collaborative hiring tools"
                },
                {
                    id: 3,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Career fair participation"
                },
                {
                    id: 4,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Custom integration options"
                },
                {
                    id: 5,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Personalized support"
                },
                {
                    id: 6,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Free trial for first month"
                },
            ]
        }
    ];

    const jobSeekerPlans = [
        {
            id: 1,
            pricingIcon: "uim-rocket",
            pricingName: "Basic Access",
            pricingPrice: "$0.00",
            pricingSuccessClass: "btn-soft-secondary",
            pricingDetails: [
                {
                    id: 1,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Apply for jobs"
                },
                {
                    id: 2,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Standard resume features"
                },
                {
                    id: 3,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Advanced resume parsing"
                },
                {
                    id: 4,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Personalized feedback"
                },
                {
                    id: 5,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Mentorship sessions"
                },
                {
                    id: 6,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Participation in career fairs"
                },
            ]
        },
        {
            id: 2,
            pricingIcon: "uim-airplay",
            pricingName: "Premium Membership",
            pricingPrice: "$29.99",
            pricingSuccessClass: "btn-primary",
            pricingDetails: [
                {
                    id: 1,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Everything in Basic Access"
                },
                {
                    id: 2,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Advanced resume parsing"
                },
                {
                    id: 3,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Personalized feedback"
                },
                {
                    id: 4,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Mentorship sessions"
                },
                {
                    id: 5,
                    pricingInnerClassName: "pricing-item text-decoration-line-through",
                    pricingInnerIcon: "mdi mdi-close-thick bg-soft-muted me-2",
                    pricingInnerText: "Participation in career fairs"
                },
            ]
        },
        {
            id: 3,
            pricingIcon: "uim-rocket",
            pricingName: "Pro Membership",
            pricingPrice: "$49.99",
            pricingSuccessClass: "btn-primary",
            pricingDetails: [
                {
                    id: 1,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Everything in Premium Membership"
                },
                {
                    id: 2,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Mentorship sessions"
                },
                {
                    id: 3,
                    pricingInnerClassName: "pricing-item",
                    pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
                    pricingInnerText: "Participation in career fairs"
                },
            ]
        }
    ];

    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center">
                                <span className="badge bg-soft-warning fs-15 mb-2">Pricing Plans</span>
                                <h3>Choose Your Plan</h3>
                                <p className="text-muted">Select the best plan that suits your needs, whether you are a recruiter or a job seeker.</p>
                            </div>
                        </Col>
                    </Row>

                    {/* Recruiters Section */}
                    <Row className="mt-5">
                        <Col lg={12}>
                            <div className="text-center mb-4">
                                <h2 className="fs-24">For Recruiters</h2>
                                <p className="text-muted">Find the best plan to manage your hiring process effectively.</p>
                            </div>
                        </Col>
                        {recruiterPlans.map((plan, key) => (
                            <Col lg={4} md={6} className="mt-4" key={key}>
                                <Card className="pricing-box bg-light-recruiter">
                                    <CardBody className="p-4 px-lg-5">
                                        <div className="pricing-icon bg-light-recruiter rounded-circle icons-md">
                                            <Icon icon={plan.pricingIcon} className="text-primary" />
                                        </div>
                                        <div className="pricing-name text-center mt-4 pt-2">
                                            <h4 className="fs-18">{plan.pricingName}</h4>
                                        </div>
                                        <div className="pricing-price text-center mt-4">
                                            <h2 className="fw-semibold">{plan.pricingPrice}<small className="fs-16">/mo</small></h2>
                                        </div>
                                        <ul className="list-unstyled pricing-details text-muted mt-4">
                                            {plan.pricingDetails.map((detail, key) => (
                                                <li key={key} className={detail.pricingInnerClassName}>
                                                    <i className={detail.pricingInnerIcon}></i> {detail.pricingInnerText}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-center mt-4 mb-2">
                                            <Link to="#" className={`btn ${plan.pricingSuccessClass} rounded-pill`}>Purchase Now <i className="uil uil-arrow-right"></i></Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {/* Job Seekers Section */}
                    <Row className="mt-5">
                        <Col lg={12}>
                            <div className="text-center mb-4">
                                <h2 className="fs-24">For Job Seekers</h2>
                                <p className="text-muted">Choose the plan that helps you to enhance your job search experience.</p>
                            </div>
                        </Col>
                        {jobSeekerPlans.map((plan, key) => (
                            <Col lg={4} md={6} className="mt-4" key={key}>
                                <Card className="pricing-box bg-light-job-seeker">
                                    <CardBody className="p-4 px-lg-5">
                                        <div className="pricing-icon bg-light-job-seeker rounded-circle icons-md">
                                            <Icon icon={plan.pricingIcon} className="text-primary" />
                                        </div>
                                        <div className="pricing-name text-center mt-4 pt-2">
                                            <h4 className="fs-18">{plan.pricingName}</h4>
                                        </div>
                                        <div className="pricing-price text-center mt-4">
                                            <h2 className="fw-semibold">{plan.pricingPrice}<small className="fs-16">/mo</small></h2>
                                        </div>
                                        <ul className="list-unstyled pricing-details text-muted mt-4">
                                            {plan.pricingDetails.map((detail, key) => (
                                                <li key={key} className={detail.pricingInnerClassName}>
                                                    <i className={detail.pricingInnerIcon}></i> {detail.pricingInnerText}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-center mt-4 mb-2">
                                            <Link to="#" className={`btn ${plan.pricingSuccessClass} rounded-pill`}>Purchase Now <i className="uil uil-arrow-right"></i></Link>
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

export default PricingPage;
