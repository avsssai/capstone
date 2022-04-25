import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../Card";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Menu({ data, status }) {
	if (status === "loading") {
		return <h1>Loading...</h1>;
	} else {
		return (
			<Wrapper>
				{data.map((card) => (
					<Link to={`/menu/${card.id}`} key={card.id}>
						<Card {...card} />
					</Link>
				))}
			</Wrapper>
		);
	}
}

const Wrapper = styled(MaxWidthWrapper)`
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
	gap: 1rem;
	grid-auto-rows: 1fr;
	& a {
		text-decoration: none;
		color: inherit;
	}
`;
