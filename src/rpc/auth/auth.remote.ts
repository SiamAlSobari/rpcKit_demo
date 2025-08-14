import { form, getRequestEvent, query } from '$app/server';
import { redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { getName } from './auth.server';

const loginSchema = z.object({
	name: z.string().min(1, 'Name is required')
});

export const login = form((data) => {
	const e = getRequestEvent();
	const result = loginSchema.safeParse({
		name: data.get('name')
	});
	// 	const result = loginSchema.safeParse({
	// 	name: data.get('name'),
	// 	email: data.get('email')
	// });

	// if (!result.success) {
	// 	// Bentuk object { fieldName: message }
	// 	const fieldErrors: Record<string, string> = {};
	// 	for (const issue of result.error.issues) {
	// 		const field = issue.path[0] as string;
	// 		if (!fieldErrors[field]) {
	// 			fieldErrors[field] = issue.message;
	// 		}
	// 	}
	// 	return { errors: fieldErrors };
	// }
	if (!result.success) {
		return { error: result.error.issues[0].message };
	}
	e.cookies.set('name', result.data.name, {
		path: '/',
		httpOnly: true
	});

	redirect(303, '/');
});

export const me = query(() => {
	return getName();
});

export const logout = form(() => {
	const e = getRequestEvent();
	e.cookies.delete('name', { path: '/' });
});
