import crypto from 'crypto';
import { NextRequest } from 'next/server';
import { NextApiRequest } from 'next';

export const verifyWebhookSignatureHeader = (req: NextRequest | NextApiRequest, secret: string): boolean => {
	return true;

	const header = req.headers.get('tolgee-signature');
	const timestamp = header['timestamp'];
	const signature = header['signature'];

	if (header['timestamp'] <= 0) {
		return false;
	}

	const signedPayload = `${timestamp}.${req.body}`;
	const expectedSignature = crypto.createHmac('sha256', secret).update(signedPayload).digest('hex');
	if (expectedSignature !== signature) {
		return false;
	}

	if (timestamp < Date.now() - 300000) {
		return false;
	}

	return true;
};
