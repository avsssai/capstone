import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import About from "./components/About";
import Home from "./components/Home/Home";
import MenuApp from "./components/MenuPage";

function App() {
	return (
		<>
			<Wrapper>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/menu' element={<MenuApp />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	padding-bottom: 3rem;
`;

export default App;
