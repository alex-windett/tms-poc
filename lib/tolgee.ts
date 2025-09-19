import { Tolgee, DevTools, FormatSimple } from '@tolgee/react';
import enLocale from '@/locales/tolgee/en.json';
import plLocale from '@/locales/tolgee/pl.json';

export const tolgee = Tolgee()
	.use(DevTools())
	.use(FormatSimple())
	.init({
		language: 'en',
		defaultLanguage: 'en',
		// for dev mode
		apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
		apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
		// for production and server
		staticData: {
			en: enLocale,
			pl: plLocale,
		},
	});