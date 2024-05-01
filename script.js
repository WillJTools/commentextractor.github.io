document.getElementById('scriptFile').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const fileNameElement = document.getElementById('fileName');
  const commentsOutputElement = document.getElementById('commentsOutput');

  fileNameElement.textContent = `Uploaded file: ${file.name}`;

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const scriptText = e.target.result;
      const comments = extractComments(scriptText);
      displayComments(comments, commentsOutputElement);
    };

    reader.readAsText(file);
  }
});

function extractComments(scriptText) {
  return scriptText.match(/\/\/.*|\/\*[^]*?\*\//g) || [];
}

function displayComments(comments, outputElement) {
  const formattedComments = comments.map(comment => `// ${comment.trim()}`).join('\n');
  outputElement.textContent = formattedComments;
}
