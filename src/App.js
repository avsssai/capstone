import Carousel from "./components/Carousel/Carousel";
import styled from "styled-components";

function App() {
	return (
		<>
			<Wrapper>
				<Carousel heading={"Welcome to SkyWave Restaurant"} subHeading={"Healthy, Authentic and Safe Food"} />
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	min-height: 200vh;
`;

export default App;
