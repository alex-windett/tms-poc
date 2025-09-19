import Navigation from '@/components/Navigation';

export default function Lokalise() {
	return (
		<main className='min-h-screen bg-gradient-to-br from-purple-50 to-pink-100'>
			<Navigation currentPage='lokalise' />

			<div className='flex items-center justify-center p-4 pt-8'>
				<div className='max-w-2xl mx-auto text-center'>
					<div className='bg-white rounded-2xl shadow-xl p-8 md:p-12'>
						<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-4'>Lokalise</h1>
						<p className='text-xl text-gray-600 mb-8'>
							Translation management platform for modern teams
						</p>

						<div className='text-sm text-gray-500'>
							<p>Learn more at:</p>
							<a
								href='https://lokalise.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-purple-600 hover:text-purple-800 underline'
							>
								https://lokalise.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}