import React from "react";
import styled from "styled-components";

const SpaceImage = styled.img`
  width: 50%;
  border-radius: 14%;
`;

const NasaImage = props => {
  return <SpaceImage src={props.image} alt="View of Space" />;
};

export default NasaImage;