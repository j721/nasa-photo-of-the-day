import React from "react";
import styled from "styled-components";

const SpaceImage = styled.img`
  width: 56%;
  border-radius: 7%;
`;

const NasaImage = props => {
  return <SpaceImage src={props.image} alt="View of Space" />;
};

export default NasaImage;