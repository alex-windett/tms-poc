import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import enLocale from '@/locales/tolgee/en.json';
import plLocale from '@/locales/tolgee/pl.json';
import { useRouter } from 'next/router';
import { TolgeeProvider, DevTools, Tolgee, FormatSimple, useTolgeeSSR } from '@tolgee/react';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const tolgee = Tolgee()
		.use(DevTools())
		.use(FormatSimple())
		.init({
			defaultLanguage: 'en',
			language: router.locale,
			// for dev mode
			apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
			apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
			// for production and server
			staticData: {
				en: enLocale,
				pl: plLocale,
			},
		});

	return (
		<div className={inter.className}>
			<TolgeeProvider tolgee={tolgee} fallback='Loading translations...'>
				<Component {...pageProps} />
			</TolgeeProvider>
		</div>
	);
}
