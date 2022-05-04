import React from "react";
import styled from "styled-components";
import CarouselImage from "../CarouselImage/CarouselImage";
import Navbar from "../Navbar";
export default function Carousel({ heading, subHeading, images }) {
	const [showNav, setShowNav] = React.useState(false);
	const changeShowNav = () => {
		if (window.scrollY < 80) {
			setShowNav(true);
		} else {
			setShowNav(false);
		}
	};
	window.addEventListener("scroll", changeShowNav);
	return (
		<Wrapper>
			<CarouselWrapper>
				<CarouselImage images={[...images]} />
			</CarouselWrapper>
			{/* <ImageWrapper src={require(`../assets/${image}.avif`)} lazy alt='background image of vegetables' /> */}
			<InHouseNav showNav={showNav} data-testid='inhouse-nav'>
				<Navbar />
			</InHouseNav>
			<Content>
				<Heading>{heading}</Heading>
				<SubHeading>{subHeading}</SubHeading>
			</Content>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: min(800px, 60vh);
	position: relative;
`;
const ImageWrapper = styled.img`
	height: 100%;
	width: 100%;
	display: block;
	object-fit: cover;
	filter: brightness(50%);
`;
const CarouselWrapper = styled.div`
	height: 100%;
`;

const Content = styled.div`
	position: absolute;
	width: 100%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: white;
	text-align: center;
`;

const Heading = styled.h1`
	font-size: clamp(2rem, 4vw, 4rem);
	margin-bottom: 1rem;
`;

const SubHeading = styled.h3`
	font-size: clamp(1.2rem, 2vw, 1.75rem);
	font-weight: 300;
	text-transform: uppercase;
`;

const InHouseNav = styled.div`
	position: absolute;
	background: transparent;
	top: 0;
	left: 0;
	color: white;
`;
