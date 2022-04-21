import React, { useState } from "react";
import styled from "styled-components/macro";
import Carousel from "../Carousel/Carousel";
import { MenuData } from "../data";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Menu from "../Menu/Menu";
const MenuApp = () => {
	const filters = ["all", "breakfast", "lunch", "dinner"];
	const [selection, setSelection] = useState("all");
	const dataToSend = (criteria, arr) => {
		if (criteria === "all") return arr;
		return arr.filter((item) => item.category.toLowerCase() === criteria);
	};
	return (
		<Wrapper>
			<Carousel
				heading={"Menu"}
				subHeading={
					"if more of us valued food and cheer and song above hoarded gold, it would be a merrier world. - JRR Tolkien"
				}
				image={"menu"}
			/>
			<Filters>
				{filters.map((filter) => (
					<Filter key={filter} onClick={() => setSelection(filter)} active={selection === filter}>
						{filter}
					</Filter>
				))}
			</Filters>
			<Menu data={dataToSend(selection, MenuData)} />
		</Wrapper>
	);
};

const Wrapper = styled.div``;

const Filters = styled(MaxWidthWrapper)`
	margin: 1rem auto;
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(4, 1fr);
	justify-content: center;
`;
const Filter = styled.div`
	padding: 1rem;
	border-radius: 15px;
	text-align: center;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	text-transform: capitalize;
	background: ${(p) => (p.active ? "#BA181B" : "white")};
	color: ${(p) => (p.active ? "white" : "black")};
	cursor: pointer;
`;

export default MenuApp;
