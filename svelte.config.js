import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html' // si tu utilises des routes dynamiques
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/Dubois-Guillaume.github.io' : ''
		}
	}
};

export default config;
