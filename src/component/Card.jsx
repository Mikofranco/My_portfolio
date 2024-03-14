import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBook } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  max-width: 500px;
  box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
  padding: 3rem;
  background: #f9fcfc;
  margin: auto;
  transition: ease 0.6s;
`;
const Heading = styled.h1`
  font-size: 43px;
  color: Teal;
`;
const Description = styled.p`
  background-color: #f2f1e6;
  padding: 2rem;
  border-radius: 10px;
  font-size: 22px;
`;
const ImageContainer = styled.div`
  max-width: 450px;
  aspect-ratio: 16/11;
  padding: 0 2rem;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border: 1px solid gray;
`;
const Button = styled.a`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  width: 100%;
  background: teal;
  color: #fff;
  font-size: 22px;
  border-radius: 5px;
  padding: 15px 20px;
  margin-left: 2rem;
`;

const Card = (props) => {
  return (
    <Container>
      <Heading>{props.heading}</Heading>
      <Description>{props.description}</Description>
      <ImageContainer>
        <Image src={props.image} />
      </ImageContainer>
      <Button href={props.link}>
        View Site
        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
      </Button>
    </Container>
  );
};

export default Card;
