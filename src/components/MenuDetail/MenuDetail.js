import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuDetailNavbar from "./MenuDetailNavbar";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaUserAlt } from "react-icons/fa";
// import { selectItemById } from "../../redux/selectors";
import { COLORS, QUERIES } from "../constants";
import Modal from "../Modal/Modal";
import Options from "../Options";
import { getSingleItemSuccess, removeSelectedItem, submitReview } from "../../redux/actions/menuDetailActions";
// import { useGetData } from "../../hooks/useGetData";
import axios from "axios";

export default function MenuDetail() {
	const { id } = useParams();
	const dispatch = useDispatch();
	// const item = useSelector((state) => selectItemById(state, id));
	// const [status, data, error] = useGetData(getSingleMenuItemById, "menuDetail", id);
	const currentItem = useSelector((state) => state.menuDetail);
	useEffect(() => {
		const fetchSingleMenuItem = async (id) => {
			const res = await axios.get(`http://localhost:5000/data/${id}`).catch((err) => console.log("Err: ", err));
			dispatch(getSingleItemSuccess(res));
		};

		if (id && id !== "") fetchSingleMenuItem(id);
		return () => {
			dispatch(removeSelectedItem());
		};
	}, [id, dispatch]);
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
	} = currentItem.data;
	const reviewOptions = ["Satisfied", "Average", "Not Satisfied"];
	const [isOpen, setIsOpen] = useState(false);
	const [currentModal, setCurrentModal] = useState("reviewForm");
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		phone: "",
		foodQuality: null,
		menuVariety: null,
		service: null,
		atmosphere: null,
		message: "",
		ratings: 0,
	});
	const selectOption = (e, stateName) => {
		console.log(formState);
		setFormState((state) => ({
			...state,
			[e.target.name]: e.target.value,
		}));
	};
	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const submitForm = () => {
		// console.log(formState);
		setCurrentModal("review");
	};

	const ratings = {
		1: "😶",
		2: "🙄",
		3: "😐",
		4: "😋",
		5: "😁",
	};

	const selectRating = (key) => {
		setFormState({
			...formState,
			ratings: key,
		});
	};

	const sendReview = () => {
		console.log(formState);
		// submitReview(item, formState, id);
		console.log("stuff", currentItem.data, formState, id);
		dispatch(submitReview(currentItem.data, formState, id));
		setIsOpen(false);
		setCurrentModal("reviewForm");
	};
	if (currentItem.status === "pending") return "Loading...";
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
							{/* <FaWeightHanging /> */}
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
					{reviews?.map((review) => (
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
				{currentModal === "reviewForm" ? (
					<Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} header='Feedback' border={true}>
						<BorderWrapper>
							<FormWrapper>
								<Input name='name' placeholder='Name' value={formState.name} onChange={handleChange} />
								<Input
									name='email'
									placeholder='Email'
									value={formState.email}
									onChange={handleChange}
								/>
								<Input
									name='phone'
									fullWidth
									placeholder='Phone Number'
									value={formState.phone}
									onChange={handleChange}
								/>
							</FormWrapper>
							<Options
								items={reviewOptions}
								header='Food Quality'
								handleChange={selectOption}
								stateName='foodQuality'
								checkedName={formState["foodQuality"]}
							/>
							<Options
								items={reviewOptions}
								header='Menu Variety'
								handleChange={selectOption}
								stateName='menuVariety'
								checkedName={formState["menuVariety"]}
							/>
							<Options
								items={reviewOptions}
								header='Service'
								handleChange={selectOption}
								stateName='service'
								checkedName={formState["service"]}
							/>
							<Options
								items={reviewOptions}
								header='Atmosphere'
								handleChange={selectOption}
								stateName='atmosphere'
								checkedName={formState["atmosphere"]}
							/>
							<Message
								name='message'
								placeholder='Message'
								onChange={handleChange}
								value={formState.message}
							/>
							<Detail>
								<Buttons>
									<Button onClick={submitForm}>Next</Button>
									<Button onClick={() => setIsOpen(false)}>Cancel</Button>
								</Buttons>
							</Detail>
						</BorderWrapper>
					</Modal>
				) : currentModal === "review" ? (
					<Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} header='Rating' border={true}>
						<Ratings>
							{Object.entries(ratings).map(([key, value]) => (
								<Rating
									key={key}
									onClick={() => selectRating(key)}
									value={key}
									selected={formState.ratings === key}>
									{value}
								</Rating>
							))}
						</Ratings>
						<Button onClick={sendReview}>Submit</Button>
					</Modal>
				) : (
					""
				)}
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

const Input = styled.input`
	padding: 0.25rem 0.25rem;
	display: block;
	grid-column: ${(p) => p.fullWidth && "1/-1"};
	font-size: 1.5rem;
	margin-bottom: 1rem;
	color: #212529;
	&::placeholder {
		opacity: 0.7;
		font-size: 1.2rem;
	}
`;

const FormWrapper = styled.div`
	display: grid;

	padding: 1rem;
	gap: 1rem;

	@media ${QUERIES.tabletAndUp} {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}
`;

const BorderWrapper = styled.div`
	border: 1px solid #d3d3d3;
	margin: 1rem;
`;

const Message = styled.textarea`
	width: 95%;
	resize: none;
	margin: 0 0.5rem;
	border-color: #d3d3d3;
`;

const Buttons = styled.div`
	text-align: center;
	display: flex;
`;

const Button = styled.button`
	background: ${COLORS.primary};
	padding: 0.25rem 0.75rem;
	color: white;
	border: 1px solid white;
	text-align: center;
	margin: 5px;
	cursor: pointer;
	display: block;
`;

const Ratings = styled.div`
	margin: 2rem 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Rating = styled.span`
	font-size: 2rem;
	border-bottom: ${(p) => p.selected && "2px solid red"};
	cursor: pointer;
	&:hover {
		border-bottom: 2px solid red;
	}
`;
