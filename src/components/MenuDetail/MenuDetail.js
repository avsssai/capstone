import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MenuDetailNavbar from "./MenuDetailNavbar";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { FaEdit, FaUserAlt, FaWeightHanging } from "react-icons/fa";
import { selectItemById } from "../../redux/selectors";
import { COLORS, QUERIES } from "../constants";
import Modal from "../Modal/Modal";
import Options from "../Options";

export default function MenuDetail() {
	const { id } = useParams();
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
	const [isOpen, setIsOpen] = useState(false);
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
						<PriceDetail>₹ {price}</PriceDetail>

						<Detail>Available for {categoryId}</Detail>
						<Detail>{availibilityCount} items available</Detail>
						<Detail>{isVegetarian ? "Vegetarian" : "Non-Vegetarian"}</Detail>
						<Detail>
							<FaWeightHanging />
							Weighs {weight}g
						</Detail>
						<Detail>
							<h4>Ingredients</h4>
							{description}
						</Detail>
						<Detail>
							<h4>What are you waiting for?</h4>
							<ul>
								<li>Come and taste the food at the restaurant. </li>
								<li>Dont like the food? share your feedback! love to learn.. </li>
								<li>Visit us today!</li>
							</ul>
						</Detail>
					</Details>
				</Item>
				{/* <Card {...item} /> */}
				<ReviewsWrapper>
					<Header>
						<ReviewTitle>Reviews</ReviewTitle>
					</Header>
					<Content>
						<WriteAReview>
							<SectionHeading>Leave a review!</SectionHeading>
							<IconWrapper>
								<FaEdit size={24} color={COLORS.primary} onClick={() => setIsOpen(true)} />
							</IconWrapper>
						</WriteAReview>
					</Content>
					{reviews.map((review) => (
						<Review key={review.date}>
							<ReviewIconWrapper>
								<FaUserAlt size={48} color={COLORS.primary} />
							</ReviewIconWrapper>
							<ReviewDetail>
								<h5>{review.name}</h5>
								<DateStr>{new Date(review.date).toDateString()}</DateStr>
								<Detail>{review.message}</Detail>
							</ReviewDetail>
						</Review>
					))}
				</ReviewsWrapper>
				<Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} header='Leave a review'>
					<Options items={["one", "two", "three"]} />
				</Modal>
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
	border-radius: 15px;
`;
const Details = styled.div``;
const PriceDetail = styled.div`
	color: ${COLORS.primary};
	font-weight: bolder;
	margin-bottom: 1rem;
`;
const Title = styled.h2``;
const Detail = styled.div`
	& h4 {
		margin-bottom: 1rem;
		margin-top: 1rem;
	}
`;

const ReviewsWrapper = styled.section`
	margin-top: 1rem;
`;
const Header = styled.div`
	border-bottom: 1px solid;
`;
const ReviewTitle = styled.h5`
	font-size: 1.23rem;

	padding: 0.25rem 1rem;
	border-bottom: 4px solid red;
	width: fit-content;
`;

const Content = styled.div`
	&:first-child {
		text-align: center;
	}
`;

const WriteAReview = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 1rem 0;
	font-weight: 600;
	align-items: center;
	padding-bottom: 1rem;
	border-bottom: 1px solid lightgray;
`;
const Review = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const ReviewDetail = styled.div``;
const DateStr = styled.div`
	font-size: 0.75rem;
	color: gray;
	margin-bottom: 1rem;
`;
const ReviewIconWrapper = styled.div`
	flex-shrink: 0;
	align-self: flex-start;
`;
const SectionHeading = styled.div`
	text-align: center;
	flex: 10;
`;
const IconWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	flex: 1;
	flex-shrink: 0;
	cursor: pointer;
`;
