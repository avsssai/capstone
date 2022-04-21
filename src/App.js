import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home/Home";
import MenuApp from "./components/MenuPage";

function App() {
	return (
		<>
			<Wrapper>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/menu' element={<MenuApp />} />
				</Routes>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	padding-bottom: 3rem;
`;

export default App;
