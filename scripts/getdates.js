// Copyright Information
const copyrightInfo = document.getElementById('copyrightInfo');
const currentYear = new Date().getFullYear();
copyrightInfo.innerHTML = `&copy; ${currentYear} Kaneene Joseph Rodney, Uganda`;

// Last Modified Information
const lastModified = document.getElementById('lastModified');
const lastModifiedDate = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastModifiedDate}`;