import React from "react";
import Carousel from "../Carousel/Carousel";
import styled from "styled-components/macro";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { AboutData } from "../data";
import { QUERIES } from "../constants";
import Hero from "../Hero";
export default function About() {
	return (
		<Wrapper>
			<Carousel
				heading={"About Us"}
				subHeading={
					"restoring authenticity to food from the ground up  is the mission that drives us. Restaurization is the realization of a dream."
				}
				images={["about"]}
			/>
			<ContentWrapper>
				<HeroWrapper>
					<Heading>The History</Heading>
					<Content>{AboutData.history}</Content>
				</HeroWrapper>
				<Stories>
					<Story>
						<ImageContainer>
							<StoryImage src={AboutData.images.ourStory} />
						</ImageContainer>
						<StoryContent>
							<StoryHeader>Our Story</StoryHeader>
							<StoryStuff>{AboutData.ourStory}</StoryStuff>
						</StoryContent>
					</Story>
					<Story>
						<ImageContainer>
							<StoryImage src={AboutData.images.since} />
						</ImageContainer>
						<StoryContent>
							<StoryHeader>Since 1987</StoryHeader>
							<StoryStuff>{AboutData.since}</StoryStuff>
						</StoryContent>
					</Story>
				</Stories>
			</ContentWrapper>
		</Wrapper>
	);
}

const ContentWrapper = styled(MaxWidthWrapper)``;

const Heading = styled.h1`
	font-size: clamp(2vw, 3rem, 1.5rem);
	text-align: center;
	margin-bottom: 1rem;
`;
const Content = styled.p`
	white-space: pre-wrap;
`;

const HeroWrapper = styled(Hero)``;

const Wrapper = styled.div``;

const Stories = styled.section`
	margin-top: 3rem;
`;
const Story = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;

	@media ${QUERIES.laptopAndUp} {
		flex-direction: row;
		gap: 3rem;
		&:nth-child(odd) {
			flex-direction: row-reverse;
		}
	}
`;
const ImageContainer = styled.div`
	min-width: 300px;
	flex: 1;
`;
const StoryImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const StoryContent = styled.div`
	flex: 1;
`;
const StoryHeader = styled.h4`
	font-size: 2rem;
	text-align: center;
	color: #ba181b;
	margin-top: 1rem;
	@media ${QUERIES.laptopAndUp} {
		margin-top: 0;
	}
`;
const StoryStuff = styled.p``;
