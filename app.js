const google = require('./google');
const emailFinder = require('./email-finder');

const searchForm = document.getElementById('searchForm');
const loadingIndicator = document.getElementById('loadingIndicator');
const notFoundIndicator = document.getElementById('notFoundIndicator');
const errorIndicator = document.getElementById('errorIndicator');
const emailList = document.getElementById('emailList');

const numberOfPagesToSearch = 10;

const search = event => {
  event.preventDefault();
  document.body.className = 'searched';

  if (searchForm.submit.disabled) {
    return;
  }

  const keywords = searchForm.keywords.value;

  searchForm.submit.disabled = true;
  loadingIndicator.style.display = 'block';
  notFoundIndicator.style.display = 'none';
  errorIndicator.style.display = 'none';
  emailList.style.display = 'none';

  while (emailList.firstChild) {
    emailList.removeChild(emailList.firstChild);
  }

  google.search(keywords, numberOfPagesToSearch, (err, results) => {
    const emails = findEmailsFromSearchResults(results);

    fillEmailList(emails);

    searchForm.submit.disabled = false;
    loadingIndicator.style.display = 'none';
    notFoundIndicator.style.display = err || emails.length ? 'none' : 'block';
    errorIndicator.style.display = err ? 'block' : 'none';
    emailList.style.display = err ? 'none' : 'block';
  });
};

const findEmailsFromSearchResults = results => {
  const snippets = results.map(result => result.snippet);

  return snippets.reduce(
    (emails, snippet) => emails.concat(emailFinder.findEmails(snippet)),
    []
  );
};

const fillEmailList = emails => {
  emails.forEach(email => {
    const listItem = document.createElement('li');
    listItem.innerText = email;
    emailList.appendChild(listItem);
  });
};

searchForm.onsubmit = search;
