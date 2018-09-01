export const button = (buttonValue, listener) => {

	return (event) => {

		if (event.button === buttonValue) {
			listener(event);
		}
	};
};

export const buttons = (buttonsValue, listener) => {

	return (event) => {

		if (event.buttons === buttonsValue) {
			listener(event);
		}
	};
};

export const main = (listener) => {

	return (event) => {

		button(0, listener)(event);
	};
};

export const auxiliary = (listener) => {

	return (event) => {

		button(1, listener)(event);
	};
};

export const secondary = (listener) => {

	return (event) => {

		button(2, listener)(event);
	};
};