
import gic from '../img/resume/gic.jpeg'

const jobexp = [
    {
        id: 1,
        title: "Software Engineer (Machine Learning)",
        subTitle: "Xnergy Autonomous Power Technologies",
        date: "June 2021 - Aug 2021",
        image: gic,
        text: [
        `Implemented a end-to-end predictive pipeline for predicting battery State-of-Health projections
        based on charge data from Xnergy charge receiving units, deployed on to Xnergy’s
        fleet of chargers, using Alibaba Cloud tools`,
        `Development involved analysing the problem, data and performing
        research into domain specific methods and using Python to implement the algorithm`,
        `Developed and integrated a encrypted bootloader for protection of proprietary firmware on Xnergy Micro-Controllers using C`],
        link: "https://www.xnergytech.com/"
    },
    {
        id: 2,
        title: "Data Science Intern",
        subTitle: "GIC Private Limited",
        date: "Dec 2020 - May 2021",
        image: gic,
        text: [
        `Performed SQL and PySpark queries for data pre-processing, used in XGBoost 
        and Tree-based models to predict Asset Risk scores for internal processes.`,
        `Identified fraudulent trades placed by EQ portfolio managers(PM)and traders through analysis of
         trading data and external market data using deep learning, feature engineering and explainable AI`],
        link: "HTTPS://WWW.GIC.COM.SG/"
    },
    {
        id: 3,
        title: "Teaching Assistant",
        subTitle: "National University of Singapore",
        date: "Jan 2020 - May 2020",
        image: gic,
        text: [
        `Taught 26 students to develop medium-scale software programs using object-oriented design principles 
        and advanced programming constructs using Java Classes and Streams`,
        `Guided students on OOP,functional programming and the 4 pillars of Java – Encapsulation, Inheritance, 
        Polymorphism and Abstraction`],
        link: "https://www.nus.edu.sg/"
    }
]

export default jobexp;
