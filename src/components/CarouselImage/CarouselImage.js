import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default function CarouselImage({ images }) {
	let settings = {
		arrows: false,
		infinite: true,
		speed: 7000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<Slider {...settings}>
			{images.map((image) => (
				<div>
					<ImageWrapper src={require(`../assets/${image}.avif`)} lazy key={image} />
				</div>
			))}
		</Slider>
	);
}

// const Wrapper = styled.div`
// 	height: 100%;
// 	border: 1px solid red;
// 	position: relative;
// `;

const ImageWrapper = styled.img`
	height: 100%;
	width: 100%;
	display: block;
	object-fit: cover;
	filter: brightness(50%);
`;
