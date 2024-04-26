//copyright year
document.querySelector('#year').textContent = new Date().getFullYear();

//date of last modification
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;