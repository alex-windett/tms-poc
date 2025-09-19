import { useState } from 'react';
import { useRouter } from 'next/router';

const languages = [
	{ code: 'en', name: 'English', flag: '🇬🇧' },
	{ code: 'pl', name: 'Polski', flag: '🇵🇱' },
];

export default function LanguageDropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const currentLanguage = router.locale || 'en';

	const handleLanguageChange = (langCode: string) => {
		router.push(router.asPath, router.asPath, { locale: langCode });
		setIsOpen(false);
	};

	const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

	return (
		<div className="relative inline-block text-left">
			<div>
				<button
					type="button"
					className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					onClick={() => setIsOpen(!isOpen)}
				>
					<span className="mr-2">{currentLang.flag}</span>
					{currentLang.name}
					<svg
						className="-mr-1 ml-2 h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>

			{isOpen && (
				<div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
					<div className="py-1">
						{languages.map((language) => (
							<button
								key={language.code}
								onClick={() => handleLanguageChange(language.code)}
								className={`${
									currentLanguage === language.code
										? 'bg-gray-100 text-gray-900'
										: 'text-gray-700'
								} group flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`}
							>
								<span className="mr-3">{language.flag}</span>
								{language.name}
							</button>
						))}
					</div>
				</div>
			)}

			{isOpen && (
				<div
					className="fixed inset-0 z-0"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</div>
	);
}