import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Carousel from "./Carousel";
const CarouselComponent = () => {
	return (
		<BrowserRouter>
			<Carousel heading={"test header"} subHeading='test sub header' images={["about", "contact", "menu"]} />
		</BrowserRouter>
	);
};

describe("Carousel", () => {
	it("shows the header", () => {
		render(<CarouselComponent />);
		const headerElement = screen.getByText(/test header/i);
		expect(headerElement).toBeInTheDocument();
	});

	it("shows the subheader", () => {
		render(<CarouselComponent />);
		const subHeaderElement = screen.getByText(/test sub header/i);
		expect(subHeaderElement).toBeInTheDocument();
	});

	it("shows the inhouse navbar initially", () => {
		render(<CarouselComponent />);
		const nav = screen.getByTestId("inhouse-nav");
		expect(nav).toBeVisible();
	});
});
