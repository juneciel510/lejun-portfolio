import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Academic Projects"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2020 - Present"}
            title={"Distributed system for Bank transaction"}
            text={[
              "Back end: Build a cluster of servers using go language with implementation of multi-paxos consensus algorithm and leader detector scheme.",
              "Front end: Using React Javascript to realize bank transaction function like Deposit, Withdraw, checking Balance, etc.",
              "This system also has the reconfiguration function: the number of servers of this cluster could be scaled up and down by reconfiguration.",
            ]}
          />
          <ResumeItem
            year={"      "}
            title={"A simple web server to decrypt cipher text"}
            text={[
              "Use Python Flask to create a simple web server which decrypts cipher text with the implementation of various cipher and decipher schemes, e.g., TripleSDES, pseudo-random generators, etc.",
            ]}
          />
          <ResumeItem
            year={"      "}
            title={
              "Two simple web servers communicating using PKC-based protocol"
            }
            text={[
              "Use Python Flask to create two simple web servers with the implementation of public-key cryptography (PKC)-based key exchange protocol.",
            ]}
          />
          <ResumeItem
            year={"      "}
            title={"Use Scientific Python in Machine learning"}
            text={[
              "Data Visualisation.",
              "Classifier design and performance evaluation.",
              "Use popular machine learning libraries for the experiments in neural networks.",
            ]}
          />
          <ResumeItem
            year={"      "}
            title={"Use R to do the Statistical Modeling and Simulation"}
            text={["Use R to do the Statistical Modeling and Simulation."]}
          />
          <ResumeItem
            year={"      "}
            title={
              "Simulation of the routing protocol of RF Mesh system for smart meters"
            }
            text={[
              "Use Omnet++ to simulate the routing protocol of RF Mesh system for smart meters. The smart meters could be scaled up to hundreds of thousands.",
            ]}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={briefcase} title={"Side Projects"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2021 - Present"}
            title={"Responsive Portfolio Website"}
            text={[
              "Created using different technologies, e.g., React Js, Styled COmponents, etc.",
              "Integrated PDF views, send contact form to email, filter blogs with tags, use various animations and more.",
            ]}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2016 - 2019"}
            title={"Project Coordinator"}
            subTitle={"Hangzhou Manguo Network Technology Co., Ltd"}
            text={[
              "Project involved: Online reading website and app.",
              "Plan and coordinate a program and its activities.",
              "Help build positive relations within the team and external parties.",
              "Maintain and monitoring project plans, project schedules, work hours, budgets, and expenditures. ",
              "Develop an in-depth understanding of project scope and particulars e.g., time frames, financial, outcomes, etc.",
            ]}
          />
          <ResumeItem year={"2016"} title={"Maternity Leave"} text={[" "]} />
          <ResumeItem
            year={"2010 - 2016"}
            title={"Project Manager Assistant & Document Engineer"}
            subTitle={"Wanin Educational Multimedia Technology Co., Ltd"}
            text={[
              "Project involved: Document Camera, Webcasting System, HD Lens High-Definition Camera. ",
              "Organize review and revision timely in close collaboration with R&D, marketing and production department.",
              "Communicate with customers about engineering, quality, component details of products as technical contact.",
              "Help to develop and maintain documents, including research, usability tests, user manuals, product specifications, functional and design specifications, installation manual and promotional presentations.",
            ]}
          />
          <ResumeItem
            year={"2009 - 2010"}
            title={"Maternity Leave"}
            text={[" "]}
          />
          <ResumeItem
            year={"2006 - 2009"}
            title={"Technical Writer"}
            subTitle={"Wanin Educational Multimedia Technology Co., Ltd"}
            text={[
              "Collaborate with R&D developers and Product Engineers to capture requirements, specifications, and development flow to compile technical documentation. ",
              "Maintain and update technical documentation database, including datasheet, manual, flow documentation, etc.",
              "Contribute to the development of documentation standards, templates, tools, and work processes used by the team and other parties that participate in delivering documentation.",
            ]}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2020 - Present"}
            title={"Master Candidate in Computer Science"}
            subTitle={"University of Stavanger, Norway"}
            text={[
              "Average grade til now: B ",
              "Course taken til now: Distributed System, Algorithm Theory, Machine Learning, Security and vulnerability in networks, Statistical modelling and simulation, Wireless communication",
            ]}
          />

          <ResumeItem
            year={"2003 - 2006"}
            title={"Master in Optical Information Engineering"}
            subTitle={"Zhejiang University, China"}
            text={[" "]}
          />
          <ResumeItem
            year={"1999 - 2003"}
            title={"Bachelor in Information Engineering"}
            subTitle={"Zhejiang University, China"}
            text={["GPA: 3.42 out of 4"]}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
  @media screen and (max-width: 502px) {
    .u-small-title-margin {
    }
    .small-title {
      padding-bottom: 0.8rem;
    }
  }
`;
export default Resume;
