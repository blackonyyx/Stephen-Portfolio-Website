import Title from '../Components/Title';
import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import SmallTitle from './SmallTitle';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';
import GitHubIcon from '@material-ui/icons/GitHub';
import jobexp  from '../data/jobexp';
import projects from '../data/projects';
import cca from '../data/cca';

function Resume() {
    const briefcase = <WorkIcon />
    const edu = <SchoolIcon />
    const proj = <GitHubIcon />
    let lastJ = jobexp.at(-1).id
    let lastCCA = cca.at(-1).id
    let lastProj = projects.at(-1).id

    return (
            <ResumeStyled>
                <Title title="Resume" span="Resume" />
                <InnerLayout>
                    <div>
                        <SmallTitle icon={briefcase} title={"Working Experience"}/>
                    </div>
                    <div className="resume-content">
                        {
                        jobexp.map((x)=> {
                            if (x.id === lastJ) {
                                return (
                                    <div className="u-margin-bottom"> 
                                        <ResumeItem date={x.date} title={x.title} subTitle={x.subTitle} text={x.text} link={x.link} />
                                    </div>
                                )
                            }
                            return <ResumeItem date={x.date} title={x.title} subTitle={x.subTitle} text={x.text} link={x.link} />
                        })}
                        {/* <ResumeItem year={'2021 May - Aug'} 
                        title = {"Software Engineer (Machine Learning)"} 
                        subTitle={"Xnergy Autonomous Power Technologies"}
                        text= {[ `Implemented a end-to-end predictive pipeline for predicting battery State-of-Health projections
                         based on charge data from Xnergy charge receiving units, deployed on to Xnergy’s fleet of chargers, using Alibaba Cloud tools`, 
                        `Developed and integrated a encrypted bootloader for protection of proprietary firmware on Xnergy Micro-Controllers using C`]} />
                         <ResumeItem year={'2021 May - Aug'} 
                        title = {"Software Engineer (Machine Learning)"} 
                        subTitle={"Xnergy Autonomous Power Technologies"}
                        text= {[ `Implemented a end-to-end predictive pipeline for predicting battery State-of-Health projections
                         based on charge data from Xnergy charge receiving units, deployed on to Xnergy’s fleet of chargers, using Alibaba Cloud tools`, 
                        `Developed and integrated a encrypted bootloader for protection of proprietary firmware on Xnergy Micro-Controllers using C`]} />
                         <ResumeItem year={'2021 May - Aug'} 
                        title = {"Software Engineer (Machine Learning)"} 
                        subTitle={"Xnergy Autonomous Power Technologies"}
                        text= {[ `Implemented a end-to-end predictive pipeline for predicting battery State-of-Health projections
                         based on charge data from Xnergy charge receiving units, deployed on to Xnergy’s fleet of chargers, using Alibaba Cloud tools`, 
                        `Developed and integrated a encrypted bootloader for protection of proprietary firmware on Xnergy Micro-Controllers using C`]} /> */}
                    </div>
                    <div>
                        <SmallTitle icon={edu} title={"Education and Co-Curricular"}/>
                    </div>
                    <div className="resume-content">
                    {cca.map((x)=> {
                            if (x.id === lastCCA) {
                                return (
                                    <div className="u-margin-bottom"> 
                                        <ResumeItem date={x.date} title={x.title} subTitle={x.subTitle} text={x.text} link={x.link} />
                                    </div>
                                )
                            }
                            return <ResumeItem date={x.date} title={x.title} subTitle={x.subTitle} text={x.text} link={x.link} />
                    })}
                    </div>
                    <div>
                        <SmallTitle icon={proj} title={"Projects"}/>
                    </div>
                    <div className="resume-content">
                    
                     {projects.map((x)=> {
                            if (x.id === lastProj) {
                                return (
                                    <div className="u-margin-bottom"> 
                                        <ResumeItem date={x.date} title={x.title} subTitle={x.subTitle} text={x.text} link={x.link} />
                                    </div>
                                )
                            }
                            return <ResumeItem date={x.date} title={x.title} subTitle={x.subTitle} text={x.text} link={x.link} />
                        })}
                    </div>
                </InnerLayout>
            </ResumeStyled>
        
    )
}

const ResumeStyled = styled.section`
    .small-title {
        padding-bottom: 3rem;
        margin-top: 4rem;
    }

    .resume-content {
        border-left: 2px solid var(--border-color);
    }

`;

export default Resume;
