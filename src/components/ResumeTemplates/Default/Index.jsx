import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Basics from './Sections/Basics';
import Awards from './Sections/Awards';
import Education from './Sections/Education';
import Interests from './Sections/Interests';
import Languages from './Sections/Languages';
import Publications from './Sections/Publications';
import References from './Sections/References';
import Skills from './Sections/Skills';
import Volunteer from './Sections/Volunteer';
import Work from './Sections/Work';

const useStyles = makeStyles((theme) => ({
    resumeDefaultTemplate: {
        padding: '0 25px',
        '& h3': { margin: '0' },
        color: theme.palette.text.primary,
        '& a': {
            color: '#8da4f7',
        },
        '& a:visited': {
            color: '#48578a',
        },
        '& p': {
            margin: 0,
            marginBlockStart: 0,
            marginBlockEnd: 0,
        },
    },
}));

const Default = ({
    resume: {
        basics,
        work,
        skills,
        education,
        awards,
        volunteer,
        publications,
        languages,
        interests,
        references,
    },
}) => {
    const classes = useStyles();
    return (
        <div className={classes.resumeDefaultTemplate}>
            {basics?.enabled && (
                <Basics
                    basics={basics.value}
                />
            )}
            {work?.enabled && (
                <Work
                    work={work.value}
                />
            )}
            {skills?.enabled && (
                <Skills
                    skills={skills.value}
                />
            )}
            {education?.enabled && (
                <Education
                    education={education.value}
                />
            )}
            {awards?.enabled && (
                <Awards
                    awards={awards.value}
                />
            )}
            {volunteer?.enabled && (
                <Volunteer
                    volunteer={volunteer.value}
                />
            )}
            {publications?.enabled && (
                <Publications
                    publications={publications.value}
                />
            )}
            {languages?.enabled && (
                <Languages
                    languages={languages.value}
                />
            )}
            {interests?.enabled && (
                <Interests
                    interests={interests.value}
                />
            )}
            {references?.enabled && (
                <References
                    references={references.value}
                />
            )}
        </div>
    );
};

export default Default;
