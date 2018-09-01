export const prevent = (listener) => {

	return (event) => {

		event.preventDefault();
		listener(event);
	};
};

export const repeat = (listener) => {

	return (event) => {

		if (event.repeat) {
			listener(event);
		}
	};
};

export const self = (listener) => {

	return (event) => {

		if (event.currentTarget === event.target) {
			listener(event);
		}
	};
};

export const stop = (listener) => {

	return (event) => {

		event.stopPropagation();
		listener(event);
	};
};

export const stopOther = (listener) => {

	return (event) => {

		event.stopImmediatePropagation();
		listener(event);
	};
};