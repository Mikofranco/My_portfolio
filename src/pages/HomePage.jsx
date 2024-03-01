import React, { useState, useEffect } from "react"; // Added React
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FrontEndJobs } from "../data";
import bg_img from "../asset/pexels-engin-akyurt-1446948.jpg";
import ButtonOne from "../component/Animation/ButtonOne";

const SectionOne = styled.section`
  /* Add your styles here */
`;
const LinkBtns = styled.span`
  border: none;
  outline: none;
  background-color: none;
  color: #fff;
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 0.5px;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  /* max-width: 900px; */
  display: flex;
  gap: 15px;
`;
const Card = styled.div`
  max-width: 1600px;
`;

const Image = styled.img`
  /* Add your styles here */
  width: 100%;
  aspect-ratio: 16/9;
`;
const InfoSection = styled.p`
  font-size: 32px;
  max-width: 90%;
  padding: 3rem 5rem;
  margin: auto;
  margin-top: 10rem;
  background-color: rgba(28, 28, 49, 0.5);
  letter-spacing: 1px;
`;

const SectionTwo = styled.section`
  /* Add your styles here */
  width: 95%;
  border: 2px solid red;
  margin: auto;
`;

const SectionThree = styled.section`
  /* Add your styles here */
`;
const CvBtn = styled.div`
  width: fit-content;
  margin: auto;
  margin-top: 15px;
`;

const List = styled.li`
  /* Add your styles here */
`;

function HomePage() {
  const navigate = useNavigate(); // Moved useNavigate inside the component
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
    <div className="home-page">
      <header className={isSticky ? 'sticky' : ''}>
        <h1 className="logo">Micheal Ayomide Ogbechie</h1>
        <nav>
          <ul>
            <li>
              <LinkBtns>Home</LinkBtns>
            </li>
            <li>
              <LinkBtns>Frontend</LinkBtns>
            </li>
            <li>
              <LinkBtns>Backend</LinkBtns>
            </li>
            <li>
              <LinkBtns>Certification</LinkBtns>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <SectionOne className="section-one">
          <InfoSection>
            A highly motivated and skilled software engineer with great ability
            for communication and maintaining relationships with staff and
            professionals in order to solve complex problems and achieve common
            goals, and eager to contribute to a dynamic team. I bring a strong
            foundation in programming languages.
          </InfoSection>
          <CvBtn>
            <ButtonOne />
          </CvBtn>
        </SectionOne>

        <SectionTwo>
          <ImageContainer>
            {FrontEndJobs.map((item, index) => (
              <Card key={index} onClick={() => navigate("www.google.com")}> {/* Added key prop and fixed onClick */}
                <div>
                  <p>{item.title}</p>
                  <Image src={item.image} alt={item.title} />
                </div>
              </Card>
            ))}
          </ImageContainer>
        </SectionTwo>
      </main>
    </div>
  );
}

export default HomePage;
