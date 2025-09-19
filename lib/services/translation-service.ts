import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';

function updateNestedTranslation(obj: any, keyPath: string, value: string): any {
	const keys = keyPath.split('.');
	let current = obj;

	for (let i = 0; i < keys.length - 1; i++) {
		if (!(keys[i] in current)) {
			current[keys[i]] = {};
		}
		current = current[keys[i]];
	}

	current[keys[keys.length - 1]] = value;
	return obj;
}

export function updateTranslationFile(translationData: any): void {
	const modifiedEntities = translationData.activityData?.modifiedEntities?.Translation;
	console.log('modifiedEntities', JSON.stringify(modifiedEntities, null, 2));

	if (!modifiedEntities || !Array.isArray(modifiedEntities)) {
		return;
	}

	modifiedEntities.forEach((entity: any) => {
		const languageTag = entity.relations?.language?.data?.tag;
		const keyName = entity.relations?.key?.data?.name;
		const newText = entity.modifications?.text?.new;

		if (!languageTag || !keyName || !newText) {
			return;
		}

		// Define both JSON and YAML file paths
		const jsonFilePath = path.join(process.cwd(), 'locales', 'tolgee', `${languageTag}.json`);
		const yamlFilePath = path.join(process.cwd(), 'locales', 'tolgee', `${languageTag}.yaml`);

		try {
			let translations = {};

			// Try to read existing translations from any existing file
			if (fs.existsSync(jsonFilePath)) {
				const fileContent = fs.readFileSync(jsonFilePath, 'utf8');
				translations = JSON.parse(fileContent);
			} else if (fs.existsSync(yamlFilePath)) {
				const fileContent = fs.readFileSync(yamlFilePath, 'utf8');
				translations = (yaml.load(fileContent) as any) || {};
			} else {
				// Check for .yml extension as well
				const ymlFilePath = path.join(process.cwd(), 'locales', 'tolgee', `${languageTag}.yml`);
				if (fs.existsSync(ymlFilePath)) {
					const fileContent = fs.readFileSync(ymlFilePath, 'utf8');
					translations = (yaml.load(fileContent) as any) || {};
				}
			}

			updateNestedTranslation(translations, keyName, newText);

			// Write to both JSON and YAML files
			fs.writeFileSync(jsonFilePath, JSON.stringify(translations, null, 2));
			fs.writeFileSync(
				yamlFilePath,
				yaml.dump(translations, {
					indent: 2,
				})
			);

			console.log(`Updated ${languageTag}.json and ${languageTag}.yaml with key: ${keyName}`);
		} catch (error) {
			console.error(`Error updating translation files for ${languageTag}:`, error);
		}
	});
}
