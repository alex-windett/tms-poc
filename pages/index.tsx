import Navigation from '@/components/Navigation';

export default function Home() {
	return (
		<main className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
			<Navigation currentPage='home' />

			{/* Main Content */}
			<div className='flex items-center justify-center p-4 pt-8'>
				<div className='max-w-4xl mx-auto text-center'>
					<div className='bg-white rounded-2xl shadow-xl p-8 md:p-12'>
						<div className='mb-8'>
							<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-4'>Welcome</h1>
							<p className='text-xl text-gray-600 mb-8'>
								A Next.js application for handling translation webhooks
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8 mb-8'>
							<div className='bg-blue-50 rounded-lg p-6'>
								<h2 className='text-2xl font-semibold text-blue-900 mb-4'>🚀 Next.js Powered</h2>
								<p className='text-blue-700'>
									Built with Next.js 14 and TypeScript for modern web development
								</p>
							</div>

							<div className='bg-green-50 rounded-lg p-6'>
								<h2 className='text-2xl font-semibold text-green-900 mb-4'>🔗 Webhook Ready</h2>
								<p className='text-green-700'>Handles Tolgee translation webhooks via API routes</p>
							</div>
						</div>

						<div className='bg-gray-50 rounded-lg p-6 mb-8'>
							<h3 className='text-xl font-semibold text-gray-900 mb-4'>Available Endpoints</h3>
							<div className='space-y-2 text-left'>
								<div className='flex items-center justify-between bg-white rounded p-3'>
									<code className='text-sm font-mono text-gray-800'>
										POST /api/tolgee/github/web
									</code>
									<span className='text-sm text-gray-500'>Webhook endpoint</span>
								</div>
								<div className='flex items-center justify-between bg-white rounded p-3'>
									<code className='text-sm font-mono text-gray-800'>GET /</code>
									<span className='text-sm text-gray-500'>This page</span>
								</div>
							</div>
						</div>

						{/* Platform Navigation Section */}
						<div className='bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 mb-8 border border-gray-200'>
							<div className='text-center mb-6'>
								<h2 className='text-3xl font-bold text-gray-900 mb-2'>Explore Platforms</h2>
								<p className='text-gray-600'>
									Learn about different translation management platforms
								</p>
							</div>

							<div className='grid md:grid-cols-2 gap-6'>
								<a
									href='/lokalise'
									className='group bg-white hover:bg-purple-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300'
								>
									<div className='flex items-center mb-4'>
										<div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors duration-200'>
											<span className='text-2xl'>🌍</span>
										</div>
										<div>
											<h3 className='text-xl font-bold text-gray-900 group-hover:text-purple-900 transition-colors duration-200'>
												Lokalise
											</h3>
											<p className='text-sm text-gray-500'>Professional Platform</p>
										</div>
									</div>
									<p className='text-gray-600 mb-4'>
										Enterprise-grade translation management with advanced collaboration features
									</p>
									<div className='flex items-center text-purple-600 font-medium group-hover:text-purple-700'>
										<span>Learn more</span>
										<svg
											className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M9 5l7 7-7 7'
											/>
										</svg>
									</div>
								</a>

								<a
									href='/tolgee'
									className='group bg-white hover:bg-green-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-300'
								>
									<div className='flex items-center mb-4'>
										<div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors duration-200'>
											<span className='text-2xl'>🔓</span>
										</div>
										<div>
											<h3 className='text-xl font-bold text-gray-900 group-hover:text-green-900 transition-colors duration-200'>
												Tolgee
											</h3>
											<p className='text-sm text-gray-500'>Open Source</p>
										</div>
									</div>
									<p className='text-gray-600 mb-4'>
										Open-source translation platform with in-context editing and developer tools
									</p>
									<div className='flex items-center text-green-600 font-medium group-hover:text-green-700'>
										<span>Learn more</span>
										<svg
											className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M9 5l7 7-7 7'
											/>
										</svg>
									</div>
								</a>
							</div>
						</div>

						<div className='text-sm text-gray-500'>
							<p>Environment variables required:</p>
							<ul className='mt-2 space-y-1'>
								<li>• GITHUB_TOKEN</li>
								<li>• ORG_REPO</li>
								<li>• TOLGEE_API_KEY</li>
								<li>• TOLGEE_PROJECT_ID</li>
								<li>• TOLGEE_BASE_URL</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}