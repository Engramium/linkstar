// Utility function to check if an object is empty
export const isObjectEmpty = (obj = {}) => {
	return Object.keys(obj).length === 0;
};

// Function to handle dynamic classes
export const handleDynamicClasses = (hoverEffect = {}, ...args) => {
	const classLists = [];
	const otherClasses = [...args].toString().replace(/,/gi, ' ');

	const addClassIf = (condition, className) => {
		if (condition) {
			classLists.push(className);
		}
	};

	// Hover styles
	addClassIf(hoverEffect?.headingColor, 'has-hover-link-star-heading-color');
	addClassIf(
		hoverEffect?.paragraphColor,
		'has-hover-link-star-paragraph-color'
	);
	addClassIf(hoverEffect?.iconBgColor, 'has-hover-link-star-icon-bg-color');
	addClassIf(
		hoverEffect?.iconFillColor,
		'has-hover-link-star-icon-fill-color'
	);
	addClassIf(
		hoverEffect?.iconStrokeColor,
		'has-hover-link-star-icon-stroke-color'
	);
	addClassIf(hoverEffect?.bgColor, 'has-hover-link-star-bg-color');

	return classLists.toString().replace(/,/gi, ' ') + ' ' + otherClasses;
};

export const getCssAttributes = (attributes) => {
	const { hoverEffect } = attributes;
	const {
		headingColor,
		paragraphColor,
		iconBgColor,
		iconFillColor,
		iconStrokeColor,
		bgColor,
	} = hoverEffect;

	const styles = {
		'--link-star-heading-color': headingColor ? headingColor : undefined,
		'--link-star-paragraph-color': paragraphColor
			? paragraphColor
			: undefined,
		'--link-star-icon-bg-color': iconBgColor ? iconBgColor : undefined,
		'--link-star-icon-fill-color': iconFillColor
			? iconFillColor
			: undefined,
		'--link-star-icon-stroke-color': iconStrokeColor
			? iconStrokeColor
			: undefined,
		'--link-star-bg-color': bgColor ? bgColor : undefined,
	};

	return styles;
};
