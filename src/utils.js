export const once = (listener) => {

	return (event) => {

		times(1, listener)(event);
	};
};

export const thrice = (listener) => {

	return (event) => {

		times(2, listener)(event);
	};
};

export const timeout = (timeValue, listener) => {

	return (event) => {

		setTimeout(listener, timeValue, event);
	};
};

export const times = (timesValue, listener) => {

	let counter = 0;

	return (event) => {

		if (counter < timesValue) {
			counter++;
			listener(event);
		}
	};
};

export const twice = (listener) => {

	return (event) => {

		times(2, listener)(event);
	};
};