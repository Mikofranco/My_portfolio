import React, { useState, useEffect, useRef } from "react"; // Added React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mo from "../component/assets/mo.svg";
import github from "../component/assets/github.svg"
import linkedin from "../component/assets/linkedin.svg"

import {
  faArrowRight,
  faBook,
  faGraduationCap,
  faEnvelope,
  faPhone,
  faCheck,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FrontEndJobs } from "../data";
import "./homePage.css";
import Card from "../component/Card";

const SectionOne = styled.section``;

const ImageContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const InfoSection = styled.p`
  font-size: 32px;
  max-width: 90%;
  padding: 3rem 2rem;
  margin: auto;
  margin-top: 10rem;
  color: #676363;
  letter-spacing: 1px;
  @media (max-width: 1200px) {
    font-size: 28px;
    max-width: 90%;
    padding: 2rem 1rem;
    margin: auto;
    margin-top: 5rem;
  }
  @media (max-width: 750px) {
    font-size: 32px;
    max-width: 90%;
    padding: 1rem 14px;
    margin: auto;
    margin-top: 3rem;
  }
`;
const InfoHeader = styled.h1`
  font-size: 64px;
  font-weight: bolder;
  color: #000;
`;

const SectionTwo = styled.section`
  width: 80%;
  border-radius: 30px;
  margin: auto;
  padding: 7rem;
  background: #ebe9e9;
`;
const Wrapper = styled.div``;

const SectionThree = styled.section`
  background: #f2f1e6;
  text-align: center;
  padding: 7rem 0;
`;
const CvBtn = styled.a`
  text-decoration: none;
  font-size: 24px;
  color: #fff;
  padding: 15px 20px;
  width: fit-content;
  margin: auto;
  margin-top: 15px;
  cursor: pointer;
  background: rgb(0, 128, 128);
  border-radius: 10px;
  display: block;
  margin-top: 2rem;
  display: flex;
  align-items: center;

  &:hover {
    background: rgb(16, 106, 106);
  }
`;

const Cardsection = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  width: fit-content;
  margin: auto;
`;
const CertWrap = styled.ul`
  border: 1px solid #000;
  width: fit-content;
  border-radius: 15px;
  padding: 0;
  margin: auto;
`;
const CertList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  font-size: 24px;
  gap: 5rem;
  list-style: none;
  color: #000;
  border-bottom: 1px solid #000;
`;
const SectionFour = styled.div`
  text-align: center;
  padding: 5rem 7rem;

  @media (max-width: 1200px) {
    padding: 2rem 5rem;
  }
  @media (max-width: 750px) {
    padding: 1rem 3rem;
  }
`;
const SectionFourText = styled.p`
  font-size: 32px;
`;
const SectionFourContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background: #d2ebeb;
  width: fit-content;
  border: 2px solid #aed7d7;
  padding: 1rem;

  @media (max-width: 1200px) {
  }
`;
const SectionFourCardConatiner = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 5rem;

  @media (max-width: 1200px) {
    padding: 1rem 3rem;
  }
`;

function HomePage() {
  const [isSticky, setIsSticky] = useState(false);
  const contactUsRef = useRef(null);
  const homeRef = useRef(null);
  const frontendRef = useRef(null);
  const certificationRef = useRef(null);

  const handleContactButtonClick = () => {
    contactUsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleHomeButtonClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleFrontendBtnClick = () => {
    frontendRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleCertificationBtnClick = () => {
    certificationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-page" ref={homeRef}>
      <header className={isSticky ? "sticky" : ""}>
        <h1 className="logo">Micheal Ayomide Ogbechie</h1>
        <ul>
          <li onClick={handleHomeButtonClick}>Home</li>
          <li onClick={handleFrontendBtnClick}>Frontend</li>
          <li>Backend</li>
          <li onClick={handleCertificationBtnClick}>Certification</li>
          <li onClick={handleContactButtonClick}>Contact</li>
        </ul>
      </header>
      <main>
        <SectionOne className="section-one" >
          <InfoSection>
            <InfoHeader>
              Brief about Micheal
              <FontAwesomeIcon icon={faBook} className="faBook" />
            </InfoHeader>
            A highly motivated and skilled software engineer with great ability
            for communication and maintaining relationships with staff and
            professionals in order to solve complex problems and achieve common
            goals, and eager to contribute to a dynamic team. I bring a strong
            foundation in Html, Css, Javascript, React, Springboot, java....
            <CvBtn href="https://drive.google.com/file/d/1cpMVFw8ZKkzGLgihQp7AD81lwcoZKaHC/view">
              View Cv
              <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
            </CvBtn>
          </InfoSection>
        </SectionOne>

        <SectionTwo ref={frontendRef}>
          <Wrapper>
            <InfoHeader id="adjust">Front-End projects</InfoHeader>
            <Cardsection>
              {FrontEndJobs.map((job) => (
                <Card
                  heading={job.title}
                  description={job.description}
                  image={job.image}
                  link={job.url}
                />
              ))}
            </Cardsection>
          </Wrapper>
        </SectionTwo>

        <SectionThree ref={certificationRef}>
          <InfoHeader>
            Certifications{" "}
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="faGraduationCap"
            />
          </InfoHeader>

          <CertWrap>
            <CertList className="cert-lst">
              National Open University (Environmental Toxicology)
              <FontAwesomeIcon icon={faCheck} className="faCheck" />
            </CertList>
            <CertList className="cert-lst">
              Semicolon Institute (Software Engineering)
              <FontAwesomeIcon icon={faCheck} className="faCheck" />
            </CertList>
            <CertList className="cert-lst" id="lastList">
              Henley Business School (Environmental Toxicology)
              <FontAwesomeIcon icon={faCheck} className="faCheck" />
            </CertList>
          </CertWrap>
        </SectionThree>

        <SectionFour ref={contactUsRef}>
          <InfoHeader>I would love to get in touch</InfoHeader>
          <SectionFourText>
            We're passionate about making connections. Reach out and say hello!
          </SectionFourText>
          <SectionFourCardConatiner>
            <SectionFourContent>
              <FontAwesomeIcon icon={faPhone} className="contact" />
              <div style={{ display: "block" }}>
                <h2>Phone</h2>
                <p>+234 901 148 0776</p>
              </div>
            </SectionFourContent>
            <SectionFourContent>
              <FontAwesomeIcon icon={faEnvelope} className="contact" />
              <div style={{ display: "block" }}>
                <h2>Email</h2>
                <p>ogbechiemicheal@gmail.com</p>
              </div>
            </SectionFourContent>
            <SectionFourContent>
              <FontAwesomeIcon icon={faLocationPin} className="contact" />
              <div style={{ display: "block" }}>
                <h2>Location</h2>
                <p>Lagos, Nigeria</p>
              </div>
            </SectionFourContent>
          </SectionFourCardConatiner>
        </SectionFour>
        <img src={mo} alt="" />
        <div className="social-links" id={isSticky ? "sticky" : ""}>
              <a href="https://github.com/Mikofranco"><img src={github} alt="" style={{display: "block", width: "2rem"}}/></a>
              <a href="https://www.linkedin.com/in/micheal-ogbechie-937827256/"><img src={linkedin} alt="" style={{display: "block", width: "2rem"}}/></a>
              <a href="https://github.com/Mikofranc"><img src={github} alt="" style={{display: "block", width: "2rem"}}/></a>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
