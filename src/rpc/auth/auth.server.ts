import { getRequestEvent } from '$app/server';

export function getName() {
	const event = getRequestEvent();

	const name = event.cookies.get('name');
	if (!name) return null;

	return { name };
}