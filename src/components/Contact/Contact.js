import React, { useState } from "react";
import styled from "styled-components/macro";
import Carousel from "../Carousel";
import Hero from "../Hero";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ContactData } from "../data";
import { COLORS, QUERIES } from "../constants";
import MaxWidthWrapper from "../MaxWidthWrapper";
export default function Contact() {
	const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const submitForm = (e) => {
		e.preventDefault();
		console.log(formState);
	};
	return (
		<Wrapper>
			<Carousel
				heading={"Contact Us"}
				subHeading={"Got a Question? Feel free to reach out to us"}
				images={["contact"]}
			/>
			<ContentWrapper>
				<Hero>
					<InfoWrapper>
						<Info>
							<FaHome color={COLORS.primary} size={24} />

							<Title>Address</Title>
							<Detail>{ContactData.address}</Detail>
						</Info>
						<Info>
							<FaPhoneAlt color={COLORS.primary} size={24} />
							<Title>Phones</Title>
							<Detail>
								{ContactData.phone.map((phone) => (
									<Phone key={phone}>{phone}</Phone>
								))}
							</Detail>
						</Info>
						<Info>
							<FaEnvelope color={COLORS.primary} size={24} />
							<Title>E-mail</Title>
							<Detail>{ContactData.email}</Detail>
						</Info>
					</InfoWrapper>
				</Hero>
				<ContactFormWrapper>
					<ContactForm>
						<FormTitle>Get In Touch</FormTitle>
						<Label>Name</Label>
						<Input placeholder='Name' name='name' onChange={handleChange} />
						<Label>Email</Label>
						<Input placeholder='Email' name='email' onChange={handleChange} />
						<Label>Phone</Label>
						<Input placeholder='Phone' name='phone' onChange={handleChange} />
						<Label>Message</Label>
						<TextArea name='message' onChange={handleChange} />
						<Button onClick={submitForm}>Submit</Button>
					</ContactForm>
					<ImageWrapper>
						<Image src={require("../assets/about-1.avif")} />
					</ImageWrapper>
				</ContactFormWrapper>
			</ContentWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div``;
const ContentWrapper = styled(MaxWidthWrapper)``;
const Title = styled.div`
	font-weight: 600;
	color: ${COLORS.primary};
	margin-bottom: 1rem;
`;
const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	@media ${QUERIES.laptopAndUp} {
		flex-direction: revert;
		justify-content: space-evenly;
		& svg {
			width: 36px;
			height: 36px;
		}
	}
`;
const Info = styled.div`
	text-align: center;
	justify-content: center;
	& svg {
		display: block;
		margin: auto;
	}
`;

const Detail = styled.div`
	font-weight: 600;
`;
const Phone = styled.div``;

const ContactFormWrapper = styled.div`
	margin-top: 2rem;
	display: grid;
	gap: 2rem;
	grid-template-columns: 1fr;
	@media ${QUERIES.laptopAndUp} {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const FormTitle = styled(Title)`
	font-size: clamp(1.5rem, 2vw, 2rem);
`;

const ContactForm = styled.form``;
const Input = styled.input`
	padding: 0.25rem 0.25rem;
	display: block;
	width: 100%;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	color: #212529;
	&::placeholder {
		opacity: 0.7;
		font-size: 1.2rem;
	}
`;
const TextArea = styled.textarea`
	padding: 0.75rem 0.25rem;
	width: 100%;
`;

const Label = styled.label`
	font-weight: 600;
`;

const Button = styled.button`
	border: none;
	background: ${COLORS.primary};
	padding: 0.725rem 1rem;
	color: white;
	font-weight: 600;
	border-radius: 5px;
	margin: auto;
	display: block;
`;

const ImageWrapper = styled.div`
	display: none;
	@media ${QUERIES.laptopAndUp} {
		display: revert;
	}
`;
const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	min-width: 350px;
`;
