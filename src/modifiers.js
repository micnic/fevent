export const alt = (listener) => {

	return (event) => {

		if (event.altKey) {
			listener(event);
		}
	};
};

export const ctrl = (listener) => {

	return (event) => {

		if (event.ctrlKey) {
			listener(event);
		}
	};
};

export const meta = (listener) => {

	return (event) => {

		if (event.metaKey) {
			listener(event);
		}
	};
};

export const shift = (listener) => {

	return (event) => {

		if (event.shiftKey) {
			listener(event);
		}
	};
};