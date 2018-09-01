# fevent
Functional event handling for lazy people

## Usage

```js
import { ctrl, enter } from 'fevent';

const onCtrlEnter = (event) => {
	// Do something on Ctrl + Enter
};

document.addEventListener('keyup', ctrl(enter(onCtrlEnter)));
```

```js
import { ctrl, key, prevent } from 'fevent';

const onCtrlKeyA = (event) => {
	// Do something on Ctrl + A, default behavior prevented
};

document.addEventListener('keyup', prevent(ctrl(key('A', onCtrlKeyA))));
```

```js
import { once } from 'fevent';

const onClickOnce = (event) => {
	// Do something on click, but only once
};

document.addEventListener('click', once(onClickOnce));
```