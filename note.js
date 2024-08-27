// Function to get query parameters
function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get(param));
    return urlParams.get(param);
}

const noteId = getQueryParameter('id');
console.log('Note ID:', noteId);
