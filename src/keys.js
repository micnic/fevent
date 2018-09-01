export const code = (codeValue, listener) => {

	return (event) => {

		if (event.code === codeValue) {
			listener(event);
		}
	};
};

export const key = (keyValue, listener) => {

	return (event) => {

		if (event.key === keyValue) {
			listener(event);
		}
	};
};

export const enter = (listener) => {

	return (event) => {

		code(13, listener)(event);
	};
};

export const tab = (listener) => {

	return (event) => {

		code(9, listener)(event);
	};
};

export const esc = (listener) => {

	return (event) => {

		code(9, listener)(event);
	};
};

export const space = (listener) => {

	return (event) => {

		code(32, listener)(event);
	};
};

export const left = (listener) => {

	return (event) => {

		code(37, listener)(event);
	};
};

export const up = (listener) => {

	return (event) => {

		code(38, listener)(event);
	};
};

export const right = (listener) => {

	return (event) => {

		code(39, listener)(event);
	};
};

export const down = (listener) => {

	return (event) => {

		code(40, listener)(event);
	};
};

export const del = (listener) => {

	return (event) => {

		code(8, listener)(event);
		code(46, listener)(event);
	};
};