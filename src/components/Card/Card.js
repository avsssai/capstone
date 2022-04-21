import React from "react";
import styled from "styled-components/macro";

export default function Card({ name, img, ingredients, category, availability, weight, vegetarian, cost }) {
	return (
		<Wrapper>
			<ImageWrapper>
				<Image src={img} />
			</ImageWrapper>
			<Name>{name}</Name>
			<Ingredients>
				{ingredients.map((item) => (
					<Item key={item}>{item}</Item>
				))}
			</Ingredients>
			<Detail>Available for {category}</Detail>
			<Detail>{availability} more items available</Detail>
			<Detail>{weight}g</Detail>
			<Detail>{vegetarian ? "🥗 Vegetarian" : "🍗 Non-Vegetarian"}</Detail>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	padding: 1rem;
	background: white;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	border-radius: 15px;
`;

const ImageWrapper = styled.div`
	margin: -1rem;
`;
const Image = styled.img`
	width: 100%;
	height: 250px;
	display: block;
	object-fit: cover;
	margin-bottom: 1rem;
	border-radius: 15px 15px 0 0;
`;

const Name = styled.h3`
	font-size: clamp(1.5rem, 1.5vw, 1.5rem);
`;
const Ingredients = styled.div``;
const Item = styled.span`
	&:not(:last-of-type)::after {
		content: ", ";
	}
`;

const Detail = styled.div`
	font-weight: 600;
	margin-bottom: 0.25rem;
`;