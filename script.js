document.getElementById('scriptFile').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const scriptText = e.target.result;
            const fileExtension = getFileExtension(file.name);
            const comments = extractComments(scriptText, fileExtension);
            displayComments(comments, file.name); // Pass the file name
        };

        reader.readAsText(file);
    }
});

function getFileExtension(filename) {
    return filename.split('.').pop().toLowerCase();
}

function extractComments(scriptText, fileExtension) {
    if (fileExtension === 'sh' || fileExtension === 'bash') {
        return scriptText.match(/#.*$/gm) || [];
    } else if (fileExtension === 'js' || fileExtension === 'java' || fileExtension === 'cpp' || fileExtension === 'go') {
        return scriptText.match(/\/\/.*|\/\*[^]*?\*\//g) || [];
    } else if (fileExtension === 'py' || fileExtension === 'rb') {
        return scriptText.match(/#.*$/gm) || [];
    }

    return [];
}

function displayComments(comments, fileName) {
    const commentsOutput = document.getElementById('commentsOutput');
    const fileNameElement = document.getElementById('fileName');
    commentsOutput.textContent = comments.join('\n\n');

    if (fileName) {
        fileNameElement.textContent = `Uploaded File: ${fileName}`;
    } else {
        fileNameElement.textContent = '';
    }
}
