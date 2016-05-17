# Email crawler

Uses the Google Custom Search API and look for emails related to the given keyword.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

From your command line:

```bash
# Clone this repository
git clone https://github.com/gfpacheco/email-crawler
# Go into the repository
cd email-crawler
# Install dependencies
npm install
```

I jusk ask you to change the `apiKey` const value before use. I only have 100 calls to the api per day.
Activate your Custom Search API [here](https://console.cloud.google.com/apis/api/customsearch/overview)
and get your key! It's free!

After that, run:

```bash
# Run the app
npm start
```
