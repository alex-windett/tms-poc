import { NextApiRequest, NextApiResponse } from 'next';
import { verifyWebhookSignatureHeader } from '@/lib/utils/webhook-verification';
import { updateTranslationFile } from '@/lib/services/translation-service';

const secret = 'whsec_249b7ff6e0dfa1e38906924a8334e969';
const githubToken = process.env.GITHUB_TOKEN || '';
const ORG_REPO = process.env.ORG_REPO || '';
const tolgeeApiKey = process.env.TOLGEE_API_KEY || '';
const tolgeeProjectId = process.env.TOLGEE_PROJECT_ID || '';
const tolgeeBaseUrl = process.env.TOLGEE_BASE_URL || 'https://app.tolgee.io';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		console.log('POST request received');
		try {
			const body = req.body;

			const isValid = verifyWebhookSignatureHeader(req, secret);

			if (!isValid) {
				return res.status(401).json({ error: 'Unauthorized' });
			}

			console.log('body', body.eventType);

			if (body.eventType === 'PROJECT_ACTIVITY') {
				updateTranslationFile(body);

				// Replace with your organization/repository
				// const orgRepo = ORG_REPO;
				// await createTranslationPullRequest(orgRepo, githubToken);
			}

			return res.status(200).json({ message: 'OK' });
		} catch (error) {
			console.error('Error processing webhook:', error);
			return res.status(500).json({ error: 'Internal Server Error' });
		}
	} else if (req.method === 'GET') {
		return res.status(200).json({ message: 'OK' });
	} else {
		res.setHeader('Allow', ['GET', 'POST']);
		return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
	}
}
