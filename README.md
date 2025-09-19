# Translation Webhook Server

A Next.js application for handling Tolgee translation webhooks. This server receives webhook notifications from Tolgee and automatically updates translation files in your repository.

## Features

- 🚀 Built with Next.js 14 and TypeScript
- 🔗 Webhook endpoint for Tolgee integration
- 📝 Automatic translation file updates (JSON and YAML)
- 🎨 Modern, responsive UI
- ⚡ Fast and efficient API routes

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Set up environment variables:
   Create a `.env.local` file with the following variables:

```env
GITHUB_TOKEN=your_github_token
ORG_REPO=your_org/your_repo
TOLGEE_API_KEY=your_tolgee_api_key
TOLGEE_PROJECT_ID=your_tolgee_project_id
TOLGEE_BASE_URL=https://app.tolgee.io
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production

Build the application:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm start
# or
yarn start
```

## API Endpoints

### POST /api/tolgee/github/web

Webhook endpoint for receiving Tolgee translation updates.

**Headers:**

- `Content-Type: application/json`
- `tolgee-signature`: Webhook signature for verification

**Body:**

```json
{
	"eventType": "PROJECT_ACTIVITY",
	"activityData": {
		"modifiedEntities": {
			"Translation": [
				{
					"relations": {
						"language": {
							"data": {
								"tag": "en"
							}
						},
						"key": {
							"data": {
								"name": "welcome.message"
							}
						}
					},
					"modifications": {
						"text": {
							"new": "Welcome to our application!"
						}
					}
				}
			]
		}
	}
}
```

## Project Structure

```
├── app/
│   ├── api/
│   │   └── tolgee/
│   │       └── github/
│   │           └── web/
│   │               └── route.ts    # Webhook API route
│   ├── globals.css                 # Global styles
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Home page
├── lib/
│   ├── services/
│   │   └── translation-service.ts  # Translation file management
│   └── utils/
│       └── webhook-verification.ts # Webhook signature verification
├── locales/
│   └── tolgee/                     # Translation files
│       ├── en.json
│       ├── en.yaml
│       ├── pl.json
│       └── pl.yaml
└── ...config files
```

## How It Works

1. Tolgee sends a webhook to `/api/tolgee/github/web` when translations are updated
2. The webhook signature is verified for security
3. Translation files are automatically updated in both JSON and YAML formats
4. Files are saved to the `locales/tolgee/` directory

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **js-yaml** - YAML file processing
- **Node.js** - Runtime environment

## License

MIT
