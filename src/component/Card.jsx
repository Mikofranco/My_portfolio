import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBook } from "@fortawesome/free-solid-svg-icons";
import "./cardone.css";

const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  /*   */
  background: teal;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  padding: 15px 20px;
  margin-left: 2rem;
  border: none;
  @media (max-width: 750px) {
    font-size: 18px;
    padding: 10px 15px;
  }
`;

const Card = (props) => {
  const handleCardClick = () => {
    window.location.href = props.link;
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    window.location.href = props.link;
  };

  return (
    <div className="card-one" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="image-box">
        <img src={props.image} alt={props.heading} />
      </div>
      <div className="content">
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
        <br /><br />
        <Button onClick={handleButtonClick} className="btn">
          View Site
          <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
        </Button>
      </div>
    </div>
  );
};

export default Card;
