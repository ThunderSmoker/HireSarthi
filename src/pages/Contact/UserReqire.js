import React from 'react';
import Section from './Section'
import ContactContent from './UserReqireContent';
import MetaTags from "react-meta-tags";

const UserReqire = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Job Requirements | HireSarthi - Job Listing</title>
            </MetaTags>
            <Section/>
            <ContactContent/>
        </React.Fragment>
    )
}

export default UserReqire;
