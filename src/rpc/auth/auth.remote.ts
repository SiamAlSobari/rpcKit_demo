import { form, getRequestEvent } from '$app/server';
import { error, redirect } from '@sveltejs/kit';

export const login = form((data) => {
	const e = getRequestEvent();
	const name = data.get('name');

	if (!name || typeof name !== 'string' || !name.trim()) {
		error(400, 'Name is required');
	}

	e.cookies.set('name', name, { path: '/', httpOnly: true });
	redirect(303, '/');
});
