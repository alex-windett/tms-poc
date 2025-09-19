# Tolgee Upload GitHub Action

This GitHub Action automatically uploads English translation files (`en.yml` and `en.json`) to Tolgee when they are modified.

## Setup Instructions

### 1. Configure Repository Secrets

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

- **`TOLGEE_API_KEY`**: Your Tolgee Project API Key
  - Get this from: Tolgee Dashboard → Your Project → Integrations → API Keys
- **`TOLGEE_PROJECT_ID`**: Your Tolgee Project ID
  - Found in the Tolgee project URL or project settings

### 2. Configure Repository Variables (Optional)

Add this variable to your GitHub repository (Settings → Secrets and variables → Actions → Variables):

- **`TOLGEE_BASE_URL`**: Your Tolgee instance URL (defaults to `https://app.tolgee.io`)
  - Only needed if you're using a self-hosted Tolgee instance

### 3. File Structure

The workflow looks for English translation files in these locations:

```
locales/en.yml
locales/en.json
locales/**/en.yml  # Any subdirectory
locales/**/en.json # Any subdirectory
```

### 4. Triggering the Workflow

The workflow automatically triggers when:

- **Pull Request Merged**: Only when a PR that modifies English translation files is merged into the `main` branch

### 5. Workflow Features

- ✅ **Multi-file Support**: Uploads all found English translation files
- ✅ **Format Detection**: Automatically detects JSON/YAML format
- ✅ **Error Handling**: Fails the workflow if any upload fails
- ✅ **Detailed Logging**: Shows upload status for each file
- ✅ **Summary Report**: Provides a summary in the GitHub Actions UI

## Example Usage

1. Create a branch and modify `locales/en.yml` or `locales/en.json`
2. Create a pull request to the `main` branch
3. Merge the pull request
4. GitHub Action automatically uploads the files to Tolgee
5. Check the Actions tab for upload status

## Troubleshooting

### Common Issues

1. **401 Unauthorized**: Check your `TOLGEE_API_KEY` secret
2. **404 Not Found**: Verify your `TOLGEE_PROJECT_ID` secret
3. **File not found**: Ensure files exist in the expected paths

### Debugging

Check the GitHub Actions logs for detailed error messages and HTTP responses from the Tolgee API.

## API Reference

This workflow uses the Tolgee Import API:
- **Endpoint**: `POST /v2/projects/{projectId}/import`
- **Documentation**: https://docs.tolgee.io/api/add-files