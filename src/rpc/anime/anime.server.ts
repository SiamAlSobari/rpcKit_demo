export const AllAnimes = async () => {
	return await fetch('https://api.jikan.moe/v4/anime').then((res) => res.json());
};
