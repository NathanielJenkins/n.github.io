import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
	position: relative;
	color: white;
	height: 20vh;
	width: 100vw;
	overflow: hidden;
	background: #232526; /* fallback for old browsers */

	.cc {
		position: absolute;
		bottom: 0;
        right: 0;
        padding 1%; 
        color: grey; 
	}
`;

const Footer = () => {
	return (
		<FooterStyled>
			<div className="cc">Nathan Jenkins-Boale</div>
		</FooterStyled>
	);
};

export default Footer;
