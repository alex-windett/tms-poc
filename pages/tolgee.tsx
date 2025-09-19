import Navigation from '@/components/Navigation';

import { T, useTranslate } from '@tolgee/react';

export default function Tolgee() {
	const { t } = useTranslate();

	return (
		<main className='min-h-screen bg-gradient-to-br from-green-50 to-teal-100'>
			<Navigation currentPage='tolgee' />
			<div className='flex items-center justify-center p-4 pt-8'>
				<div className='max-w-2xl mx-auto text-center'>
					<div className='bg-white rounded-2xl shadow-xl p-8 md:p-12'>
						<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-4'>Tolgee</h1>
						<p className='text-xl text-gray-600 mb-8'>
							Open-source translation management platform
						</p>

						<div className='bg-blue-50 rounded-lg p-4 mb-6'>
							<p>{t('account.ap_loyalty_offer.allergen_notification', { dogName: 'Spot' })}</p>
							<p>{t('account.ap_loyalty_offer.choose_gift.subtitle', { dogName: 'Spot' })}</p>
						</div>

						<div className='bg-blue-50 rounded-lg p-4 mb-6'>
							<p className='text-blue-700 mb-2'>Webhook endpoint:</p>
							<code className='text-sm font-mono text-gray-800'>POST /api/tolgee/github/web</code>
						</div>

						<div className='text-sm text-gray-500'>
							<p>Learn more at:</p>
							<a
								href='https://tolgee.io'
								target='_blank'
								rel='noopener noreferrer'
								className='text-green-600 hover:text-green-800 underline'
							>
								https://tolgee.io
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
