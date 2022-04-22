import styled from "styled-components/macro";
import { QUERIES } from "../constants";

const Hero = styled.div`
	padding: 1rem;
	border-top: 10px solid #ba181b;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	margin-top: -4rem;
	background: white;
	border-radius: 5px;
	@media ${QUERIES.tabletAndUp} {
		padding: 4rem;
	}
`;

export default Hero;
