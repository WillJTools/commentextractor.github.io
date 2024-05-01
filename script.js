document.getElementById('scriptFile').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const fileNameElement = document.getElementById('fileName');
  const commentsOutputElement = document.getElementById('commentsOutput');

  fileNameElement.textContent = `Uploaded file: ${file.name}`;

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const scriptText = e.target.result;
      const fileExtension = getFileExtension(file.name);
      const comments = extractComments(scriptText, fileExtension);
      displayComments(comments, commentsOutputElement);
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
  } else if (fileExtension === 'py') {
    return scriptText.match(/#.*$/gm) || [];
  } else if (fileExtension === 'js') {
    return scriptText.match(/\/\/.*|\/\*[^]*?\*\//g) || [];
  } else if (fileExtension === 'php') {
    return scriptText
