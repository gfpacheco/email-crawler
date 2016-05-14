const emailFinderRegex = /[\w.+-]+\s?@\s?[\w.+-]+\.[\w.+-]+/g;

const emailFinder = module.exports;

emailFinder.findEmails = snippet => {
  const matches = snippet.match(emailFinderRegex);

  if (matches) {
    return matches.map(match => {
      let email = match.replace(/[^\w.+-@]/g, '');
      email = email.replace(/\.$/, '');
      return email;
    });
  }

  return [];
};
