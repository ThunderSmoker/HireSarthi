import React from 'react';
import Section from '../../Blog/BlogModern/Section';
import BlogModernContent from '../../Blog/BlogModern/BlogModernContent';
import MetaTags from "react-meta-tags";

const BlogModern = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Blog Modern | HireSarthi - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section/>
            <BlogModernContent/>
        </React.Fragment>
    )
}

export default BlogModern
