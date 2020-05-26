import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const noAvatarURl = "http://noavatar.be/get/jklk/200";

interface AvatarProps {
  size: "sm" | "md" | "lg" | undefined;
  url: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ size = "md", url, className }) => {
  if (url === undefined || url === null) {
    url = noAvatarURl;
  }
  return <Contatiner size={size} url={url} className={className} />;
};

interface ContatinerProps {
  size: "sm" | "md" | "lg" | undefined;
  url: string;
}

const Contatiner = styled.div<ContatinerProps>`
    ${(props) => getSize(props.size)}
    background-image:url(${(props) => props.url});
    background-size: cover;
    border-radius:50%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
`;

const getSize = (size: "sm" | "md" | "lg" | undefined) => {
  let num = 0;
  if (size === "sm") {
    num = 30;
  } else if (size === "md") {
    num = 50;
  } else if (size === "lg") {
    num = 150;
  }
  return `
          width: ${num}px;
          height: ${num}px;
          `;
};

export default Avatar;
