import express from 'express';

import githubRoute from '../routes/tolgee/github.ts';

const app = express();

const welcomeStrings = [
	'Hello Express!',
	'To learn more about Express on Vercel, visit https://vercel.com/docs/frameworks/backend/express',
];

app.get('/', (_req, res) => {
	res.send(welcomeStrings.join('\n\n'));
});

app.post('/tolgee/github', githubRoute);

app.listen(3001, function () {
	console.log('Example app listening on port ' + 3001 + '!');
});

export default app;
