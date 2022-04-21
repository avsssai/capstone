import React, { useState } from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../constants";
import { FaUtensils, FaBars } from "react-icons/fa";

export default function Navbar() {
	const [showNav, setShowNav] = useState(false);
	const changeShowNav = () => {
		if (window.scrollY >= 20) {
			setShowNav(true);
		} else {
			setShowNav(false);
		}
	};
	window.addEventListener("scroll", changeShowNav);
	return (
		<Wrapper showNav={showNav}>
			<Logo>
				<FaUtensils color='red' size={24} />
				SkyWave
			</Logo>
			<TabletAndUp>
				<FaBars size={24} color={"white"} />
			</TabletAndUp>
			<SideNav>
				<Nav>Home</Nav>
				<Nav>Menu</Nav>
				<Nav>About Us</Nav>
				<Nav>Contact</Nav>
			</SideNav>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	text-transform: uppercase;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	background: ${(p) => (p.showNav ? "white" : null)};
	color: ${(p) => (!p.showNav ? "white" : "black")};
	box-shadow: ${(p) => (p.showNav ? "0 2px 5px 0 rgba(0,0,0,0.16)" : null)};
	transition: all 0.5s ease;
	font-weight: 600;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
`;

const SideNav = styled.ul`
	display: none;
	@media ${QUERIES.laptopAndUp} {
		display: flex;
		gap: 1rem;
	}
`;
const Nav = styled.li`
	list-style: none;
	padding: 8px;
	cursor: pointer;
	&:hover {
		background: #f5f3f4;
		border-radius: 10px;
		color: #ba181b;
	}
`;

const TabletAndUp = styled.div`
	@media ${QUERIES.laptopAndUp} {
		display: none;
	}
`;
