export const inViewVariants = {
	fromRight: {
		x: 25,
		opacity: 0,
	},
	fromLeft: {
		x: -25,
		opacity: 0,
	},
	fromDown: {
		y: 25,
		opacity: 0,
	},
	fromTop: {
		y: -25,
		opacity: 0,
	},
	fromNothing: {
		opacity: 0
	},

	visible: (opacity?: number | string) => ({
		x: 0,
		y: 0,
		opacity: opacity || 1,
	}),
};
