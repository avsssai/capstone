import React from "react";
import styled from "styled-components";
import Card from "../Card";
import { QUERIES } from "../constants";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Menu({ data }) {
	return (
		<Wrapper>
			{data.map((card) => (
				<Card {...card} key={card.id} />
			))}
		</Wrapper>
	);
}

const Wrapper = styled(MaxWidthWrapper)`
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
	gap: 1rem;
`;
