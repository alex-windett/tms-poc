import LanguageDropdown from './LanguageDropdown';

interface NavigationProps {
	currentPage?: 'home' | 'lokalise' | 'tolgee';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
	return (
		<nav className='bg-white shadow-sm border-b border-gray-200'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<div className='flex items-center'>
						<a
							href='/'
							className={`text-xl font-bold transition-colors duration-200 ${
								currentPage === 'home' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
							}`}
						>
							Translation Webhook Server
						</a>
					</div>
					<div className='flex items-center space-x-4'>
						<a
							href='/'
							className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
								currentPage === 'home'
									? 'text-blue-600 bg-blue-50'
									: 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
							}`}
						>
							Home
						</a>
						<a
							href='/lokalise'
							className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
								currentPage === 'lokalise'
									? 'text-purple-600 bg-purple-50'
									: 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
							}`}
						>
							Lokalise
						</a>
						<a
							href='/tolgee'
							className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
								currentPage === 'tolgee'
									? 'text-green-600 bg-green-50'
									: 'text-gray-700 hover:text-green-600 hover:bg-green-50'
							}`}
						>
							Tolgee
						</a>
						<LanguageDropdown />
					</div>
				</div>
			</div>
		</nav>
	);
}
