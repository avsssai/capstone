import React from "react";
import styled from "styled-components/macro";
import { FaTag, FaHashtag, FaCookieBite, FaWeightHanging, FaLeaf } from "react-icons/fa";
import { COLORS } from "../constants";

export default function Card({ name, image, description, categoryId, availibilityCount, weight, isVegetarian, cost }) {
	return (
		<Wrapper>
			<ImageWrapper>
				<Image src={image} />
			</ImageWrapper>
			<Name>{name}</Name>
			<Detail>
				<FaCookieBite color={COLORS.primary} />
				{description}
			</Detail>
			{/* <Ingredients>
				{ingredients.map((item) => (
					<Item key={item}>{item}</Item>
				))}
			</Ingredients> */}
			<Detail>
				<FaTag color={COLORS.primary} />
				Available for {categoryId}
			</Detail>
			<Detail>
				<FaHashtag color={COLORS.primary} />
				{availibilityCount} more items available
			</Detail>
			<Detail>
				<FaWeightHanging color={COLORS.primary} />
				{weight}g
			</Detail>
			<Detail>
				<FaLeaf color={COLORS.primary} />
				{isVegetarian ? "Vegetarian" : "Non-Vegetarian"}
			</Detail>
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
	height: 100%;
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
// const Ingredients = styled.div`
// 	font-weight: 600;
// 	display: flex;
// 	align-items: center;
// `;
// const Item = styled.span`
// 	&:not(:last-of-type)::after {
// 		content: ", ";
// 	}
// `;

const Detail = styled.div`
	font-weight: 600;
	margin-bottom: 0.25rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	& svg {
		flex-shrink: 0;
	}
`;
