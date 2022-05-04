import React from "react";
import Carousel from "../Carousel/Carousel";
import Menu from "../Menu";
import styled from "styled-components/macro";
import { MenuData } from "../data";
import { useGetData } from "../../hooks/useGetData";
import { getAllItems } from "../../redux/actions/menuActions";
export default function Home() {
	const [status, data] = useGetData(getAllItems, "menu");
	return (
		<>
			<Carousel
				heading={"Welcome to SkyWave Restaurant"}
				subHeading={"Healthy, Authentic and Safe Food"}
				images={["capstone-home", "home-2", "home-3"]}
			/>
			<Section>
				<Header>Menu</Header>
				<SubHeader>
					if more of us valued food and cheer and song above hoarded gold, it would be a merrier world.
				</SubHeader>
			</Section>
			<Menu data={data} status={status} />
		</>
	);
}

const Section = styled.section`
	text-align: center;
	margin: 1rem 0;
`;

const Header = styled.h1`
	text-decoration: underline;
	text-decoration-thickness: 5px;
	text-underline-offset: 4px;
	text-decoration-color: #ba181b;
	font-size: clamp(2vw, 3rem, 1.5rem);
	margin-bottom: 0.5rem;
`;

const SubHeader = styled.h5`
	text-transform: uppercase;
`;
