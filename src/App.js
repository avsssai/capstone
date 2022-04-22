import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import MenuApp from "./components/MenuPage";

function App() {
	return (
		<>
			<Wrapper>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/menu' element={<MenuApp />} />
					<Route exact path='/about' element={<About />} />
					<Route exact path='/contact' element={<Contact />} />
				</Routes>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	padding-bottom: 3rem;
`;

export default App;
