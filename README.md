# Email crawler

Uses the Google Custom Search API and look for emails related to the given keyword.

## Develop

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

From your command line:

```bash
git clone https://github.com/gfpacheco/email-crawler
cd email-crawler
npm install
```

I jusk ask you to change the `apiKey` const value before use. I only have 100 calls to the api per day.
Activate your Custom Search API [here](https://console.cloud.google.com/apis/api/customsearch/overview)
and get your key! It's free!

After that, run:

```bash
npm start
```

## Distribute

> The current setup only builds the app for OSX, change `package.json` to build for other platforms.

To package the app for distribution:

```bash
npm run dist
```

## Release

You need two things before using the release script:

1. Update the repository field in `package.json` to match one you have the correct access rights.
2. Generate a [GitHub Personal access tokens](https://github.com/settings/tokens)

Then:

```bash
npm run release -- GITHUB_TOKEN
```
