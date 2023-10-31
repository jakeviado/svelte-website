import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		
	  adapter: adapter({
		// default options are shown. On some platforms
		// these options are set automatically — see below
		pages: '(root)',
		assets: '(root)',
		fallback: undefined,
		precompress: false,
		strict: true
	  })
	}
  };

