const searchForm = document.getElementById('searchForm');
const loadingIndicator = document.getElementById('loadingIndicator');
const emailList = document.getElementById('emailList');

const search = event => {
  event.preventDefault();

  const companyName = searchForm.companyName.value;

  searchForm.enabled = false;
  loadingIndicator.style.display = 'block';
  emailList.style.display = 'none';

  while (emailList.firstChild) {
    emailList.removeChild(emailList.firstChild);
  }

  // TODO: actually make search request
  setTimeout(findEmailsFromSearchResults, 1000);
};

const findEmailsFromSearchResults = () => {
  // TODO: parse search response and find the emails
  const emails = [
    'contact@company-name.com',
    'support@company-name.com',
  ];
  showEmails(emails);
};

const showEmails = emails => {
  searchForm.enabled = true;
  loadingIndicator.style.display = 'none';

  emails.forEach(email => {
    const listItem = document.createElement('li');
    listItem.innerText = email;
    emailList.appendChild(listItem);
  });

  emailList.style.display = 'block';
};

searchForm.onsubmit = search;
