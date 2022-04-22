const SIZES = {
	minTablet: 500,
	minLaptop: 1100,
	minDesktop: 1500,
};

export const COLORS = {
	primary: "hsl(359, 77%, 41%)",
};

export const QUERIES = {
	tabletAndUp: `(min-width: ${SIZES.minTablet / 16}rem)`,
	laptopAndUp: `(min-width: ${SIZES.minLaptop / 16}rem)`,
	desktopAndUp: `(min-width: ${SIZES.minDesktop / 16}rem)`,
};
