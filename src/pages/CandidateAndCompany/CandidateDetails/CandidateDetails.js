import React from 'react';
import { Container, Row } from 'reactstrap';
import LeftSideContent from './LeftSideContent';
import RightSideContent from './RightSideContent';
import Section from './Section';
import MetaTags from "react-meta-tags";

const CandidateDetails = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Candidate Details | HireSarthi - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section/>
            <section className="section">
            <Container >
            <Row>
            <LeftSideContent/>  
            <RightSideContent/>  
            </Row>   
            </Container>
            </section> 
        </React.Fragment>
    )
}

export default CandidateDetails
