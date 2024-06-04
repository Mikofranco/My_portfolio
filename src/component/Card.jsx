import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBook } from "@fortawesome/free-solid-svg-icons";
import"./cardone.css"

const Button = styled.a`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  width: 100%;
  background: teal;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  padding: 15px 20px;
  margin-left: 2rem;
  @media (max-width: 750px) {
    font-size: 18px;
    padding: 10px 15px;
  }
`;


const Card = (props) => {
  return (
    <div className="card-one" href={props.link}>
      <div className="image-box">
        <img src={props.image} />
      </div>
      <div className="content">
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
        <Button href={props.link} className="btn">
          View Site
          <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
        </Button>
      </div>
    </div>
  );
};

export default Card;
