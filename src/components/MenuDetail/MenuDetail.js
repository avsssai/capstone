import React from "react";
import { useParams } from "react-router-dom";
import MenuDetailNavbar from "./MenuDetailNavbar";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { selectItemById } from "../../redux/selectors";
import Card from "../Card";
import { QUERIES } from "../constants";

export default function MenuDetail() {
	const { id } = useParams();
	console.log(id);
	const item = useSelector((state) => selectItemById(state, id));
	const {
		name,
		description,
		availibilityCount,
		price,
		image,
		ratingsCount,
		ratingsValue,
		weight,
		categoryId,
		isVegetarian,
		reviews,
	} = item;
	console.log(image);
	return (
		<>
			<MenuDetailNavbar />;
			<Wrapper>
				<ImageWrapper>
					<Image src={`http://localhost:3000/${image}`} />
				</ImageWrapper>
				<Item>
					<Details>
						<Title>{name}</Title>
						<Detail>Available for {categoryId}</Detail>
						<Detail>{availibilityCount} items available</Detail>
						<Detail>{isVegetarian ? "Vegetarian" : "Non-Vegetarian"}</Detail>
						<Detail>Weighs {weight}g</Detail>
					</Details>
				</Item>
				{/* <Card {...item} /> */}
			</Wrapper>
		</>
	);
}

const Wrapper = styled(MaxWidthWrapper)`
	margin-top: 5rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 3rem;
	@media ${QUERIES.laptopAndUp} {
		grid-template-columns: 1fr 1fr;
	}
`;

const Item = styled.section``;
const ImageWrapper = styled.section`
	max-height: 500px;
`;
const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
const Details = styled.div``;
const Title = styled.h2``;
const Detail = styled.div``;
