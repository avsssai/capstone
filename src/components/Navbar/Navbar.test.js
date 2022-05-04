import { render, screen, fireEvent, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

const RouterContext = () => {
	return (
		<BrowserRouter>
			<Navbar />
		</BrowserRouter>
	);
};

describe("Navbar", () => {
	it("shows navbar on render", () => {
		render(<RouterContext />);
		const nav = screen.getByTestId("nav");
		expect(nav).toBeVisible();
	});

	it("shows the navbar links to be color white on initial render", () => {
		render(<RouterContext />);
		const nav = screen.getByTestId("nav");
		expect(within(nav).getAllByRole("link")[0]).toHaveStyle("color: white");
	});

	it("navbar backgrond changes to white on scroll", () => {
		render(<RouterContext />);
		const nav = screen.getByTestId("nav");
		fireEvent.scroll(window, { target: { scrollY: 100 } });
		expect(nav).toHaveStyle("background: white");
	});

	it("changes the navbar links to color black", () => {
		render(<RouterContext />);
		const nav = screen.getByTestId("nav");
		fireEvent.scroll(window, { target: { scrollY: 100 } });
		expect(within(nav).getAllByRole("link")[0]).toHaveStyle("color: black");
	});
});
