const tasks = {};

export function debounce(callBack: any, nameTask: any, duration = 1000) {
	// get task
	// eslint-disable-next-line
	// @ts-ignore
	let task = tasks[nameTask];

	// remove timeout if it has
	task && clearTimeout(task);

	// set new task or update

	// eslint-disable-next-line
	// @ts-ignore
	tasks[nameTask] = setTimeout(callBack, duration);
}
