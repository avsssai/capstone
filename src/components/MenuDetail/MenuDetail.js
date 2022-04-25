import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../Carousel";
import { MenuData } from "../data";
import Navbar from "../Navbar";
import styled from "styled-components/macro";
export default function MenuDetail() {
	const { id } = useParams();
	const item = MenuData[id];
	return (
		<Wrapper>
			<Navbar whiteBackground={true} />
		</Wrapper>
	);
}

const Wrapper = styled.div``;
