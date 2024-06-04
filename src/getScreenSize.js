import { useMediaQuery } from "@chakra-ui/react";

export const useGetScreenSize = () => {
	let isMobileScreen = false;
	let isTabScreen = false;
	let isDestopScreen = false;
	const [isMobile] = useMediaQuery("(max-width: 767px)");
	const [isTablet] = useMediaQuery(
		"(min-width: 768px) and (max-width: 1023px)",
	);
	const isDesktop = !(isMobile || isTablet);

	if (isMobile) {
		isMobileScreen =true;
	} else if (isTablet) {
		isTabScreen= true;
	} else {
		isDestopScreen=true;
	}
	return {
		mobile: isMobileScreen, tab: isTabScreen, pc: isDestopScreen
	};
};