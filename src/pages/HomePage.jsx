import React, { useState, useEffect, useRef } from "react"; // Added React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mo from "../component/assets/mo.svg";
import github from "../component/assets/github.svg";
import linkedin from "../component/assets/linkedin.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderStyle.css";

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
import Slider from "react-slick";
import { useGetScreenSize } from "../getScreenSize";
import { useNavigate } from "react-router-dom";

const SectionOne = styled.section`
  @media (max-width: 750px) {
    max-width: 750px;
    padding: 5rem 1rem 1rem 1rem;
  }
`;

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
    font-size: 20px;
    max-width: 90%;
    padding: 1rem 14px;
    margin: auto;
    margin-top: 0rem;
  }
`;
const InfoHeader = styled.h1`
  font-size: 52px;
  font-weight: bolder;
  color: #000;

  @media (max-width: 750px) {
    font-size: 32px;
    margin-top: 1rem;
  }
`;

const SectionTwo = styled.section`
  /* width: 80%; */
  border-radius: 30px;
  margin: auto;
  padding: 7rem;
  background: #ebe9e9;
  @media (max-width: 750px) {
    padding: 1rem;
  }
`;
const Wrapper = styled.div``;

const SectionThree = styled.section`
  background: #f2f1e6;
  text-align: center;
  padding: 7rem 0;
  width: 100%;
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

  @media (max-width: 750px) {
    padding: 5px 10px;
    font-size: 18px;
    gap: 3rem;
  }
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
  color: #223f3f;
  @media (max-width: 1200px) {
    font-size: 28px;
  }
`;
const SectionFourContent = styled.div`
  display: flex;
  align-items: center;
  background: #d2ebeb;
  width: fit-content;
  gap: 16px;
  border: 2px solid #aed7d7;
  padding: 1rem;

  @media (max-width: 1200px) {
  }
`;
const SectionFourCardConatiner = styled.div`
  max-width: 1000px;
  display: flex;
  gap: 1rem;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 5rem;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }

  @media (max-width: 750px) {
    padding: 1rem 3rem;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function HomePage() {
  const { mobile, tab, pc } = useGetScreenSize();
  const [isSticky, setIsSticky] = useState(false);
  const contactUsRef = useRef(null);
  const homeRef = useRef(null);
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const certificationRef = useRef(null);

  const navigate = useNavigate();

  const handleContactButtonClick = () => {
    contactUsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleHomeButtonClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleFrontendBtnClick = () => {
    frontendRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleBackendBtnClick = () => {
    backendRef.current.scrollIntoView({ behavior: "smooth" });
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: mobile ? 1 : tab ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="home-page" ref={homeRef}>
      <header className={isSticky ? "sticky" : ""}>
        <h1 className="logo">Micheal Ayomide Ogbechie</h1>
        <ul>
          <li onClick={handleHomeButtonClick}>Home</li>
          <li onClick={handleFrontendBtnClick}>Frontend</li>
          <li>
            <a
              href="https://github.com/Mikofranco?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend
            </a>
          </li>

          <li onClick={handleCertificationBtnClick}>Certification</li>
          <li onClick={handleContactButtonClick}>Contact</li>
        </ul>
      </header>
      <main>
        <SectionOne className="section-one">
          <InfoSection>
            <InfoHeader>
              Brief about Micheal
              <FontAwesomeIcon icon={faBook} className="faBook" />
            </InfoHeader>
            A highly motivated and skilled software engineer with great ability
            for communication and maintaining relationships with staff and
            professionals in order to solve complex problems and achieve common
            goals, and eager to contribute to a dynamic team. I bring a strong
            foundation in Html, Css, Javascript, Next js, Typescript, React,
            Springboot, java....
            <CvBtn href="https://drive.google.com/file/d/1oUcA-GADq_lur1CzKBBPeHkrPrqmk_27/view?usp=sharing">
              View Cv
              <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
            </CvBtn>
          </InfoSection>
        </SectionOne>

        <SectionTwo ref={frontendRef}>
          <Wrapper>
            <InfoHeader id="adjust">Front-End projects</InfoHeader>
            <Slider {...settings}>
              {FrontEndJobs.map((job) => (
                <Card
                  onClick={() => navigate(job.url)}
                  heading={job.title}
                  description={job.description}
                  image={job.image}
                  link={job.url}
                />
              ))}
            </Slider>
          </Wrapper>
        </SectionTwo>

        <SectionTwo ref={backendRef}>
          <Wrapper>
            <InfoHeader id="adjust">Back-End projects</InfoHeader>
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
              Henley Business School
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
            <SectionFourContent id="sect-four-content">
              <FontAwesomeIcon icon={faPhone} className="contact" />
              <div style={{ display: "block" }}>
                <h2 style={{ color: "#000" }}>Phone</h2>
                <p style={{ color: "#000" }}>+234 901 148 0776</p>
              </div>
            </SectionFourContent>

            <SectionFourContent id="sect-four-content">
              <FontAwesomeIcon icon={faEnvelope} className="contact" />
              <div style={{ display: "block" }}>
                <h2 style={{ color: "#000" }}>Email</h2>
                <p style={{ color: "#000" }}>ogbechiemicheal@gmail.com</p>
              </div>
            </SectionFourContent>

            <SectionFourContent id="sect-four-content">
              <FontAwesomeIcon icon={faLocationPin} className="contact" />
              <div style={{ display: "block" }}>
                <h2 style={{ color: "#000" }}>Location</h2>
                <p style={{ color: "#000" }}>Lagos, Nigeria</p>
              </div>
            </SectionFourContent>
          </SectionFourCardConatiner>
        </SectionFour>

        <img src={mo} alt="" />
        <div className="social-links" id={isSticky ? "sticky" : ""}>
          <a href="https://github.com/Mikofranco">
            <img className="link-img" src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/micheal-ogbechie-937827256/">
            <img src={linkedin} alt="" />
          </a>
          {/* <a href="https://github.com/Mikofranc">
            <img src={github} alt="" />
          </a> */}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
