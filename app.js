const google = require('./google');
const emailFinder = require('./email-finder');

const searchForm = document.getElementById('searchForm');
const loadingIndicator = document.getElementById('loadingIndicator');
const errorIndicator = document.getElementById('errorIndicator');
const emailList = document.getElementById('emailList');

const numberOfPagesToSearch = 10;

const search = event => {
  event.preventDefault();

  if (searchForm.submit.disabled) {
    return;
  }

  const companyName = searchForm.companyName.value;

  searchForm.submit.disabled = true;
  loadingIndicator.style.display = 'block';
  errorIndicator.style.display = 'none';
  emailList.style.display = 'none';

  while (emailList.firstChild) {
    emailList.removeChild(emailList.firstChild);
  }

  google.search(companyName, numberOfPagesToSearch, (err, results) => {
    const emails = findEmailsFromSearchResults(results);

    if (!emails.length) {
      emails.push('No emails were found :/');
    }

    fillEmailList(emails);

    searchForm.submit.disabled = false;
    loadingIndicator.style.display = 'none';
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
