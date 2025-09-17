import express from 'express';

import githubRoute from '../routes/tolgee/github.ts';

const app = express();

const welcomeStrings = [
	'Hello Express!',
	'To learn more about Express on Vercel, visit https://vercel.com/docs/frameworks/backend/express',
];

const verifyWebhookSignatureHeader = (req, secret) => {
	const header = JSON.parse(req.headers['tolgee-signature']);
	const timestamp = header['timestamp'];
	const signature = header['signature'];

	if (header['timestamp'] <= 0) {
		return false;
	}

	const signedPayload = `${timestamp}.${req.body}`; // req.body has to be string!!
	const expectedSignature = crypto.createHmac('sha256', secret).update(signedPayload).digest('hex');
	if (expectedSignature !== signature) {
		return false;
	}

	if (timestamp < Date.now() - 300000) {
		return false;
	}

	return true;
};

app.get('/', (_req, res) => {
	res.send(welcomeStrings.join('\n\n'));
});

app.post('/tolgee/github', (req, res) => {
	const secret = 'whsec_249b7ff6e0dfa1e38906924a8334e969';

	const isValid = verifyWebhookSignatureHeader(req, secret);

	console.log(isValid);
});

app.listen(3001, function () {
	console.log('Example app listening on port ' + 3001 + '!');
});

export default app;
