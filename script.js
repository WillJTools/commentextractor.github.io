document.getElementById('scriptFile').addEventListener('change', function(event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const scriptText = e.target.result;
      const fileExtension = getFileExtension(file.name);
      const comments = extractComments(scriptText, fileExtension);
      displayComments(comments);
    };

    reader.readAsText(file);
  }
});

function getFileExtension(filename) {
  return filename.split('.').pop().toLowerCase();
}

function extractComments(scriptText, fileExtension) {
  if (fileExtension === 'js') {
    return scriptText.match(/\/\/.*|\/\*[^]*?\*\//g) || [];
  } else if (fileExtension === 'py') {
    return scriptText.match(/#.*$/gm) || [];
  } else if (fileExtension === 'java') {
    return scriptText.match(/\/\/.*|\/\*[^]*?\*\//g) || [];
  } else if (fileExtension === 'bash') {
    return scriptText.match(/#.*$/gm) || [];
  } else if (fileExtension === 'rb') {
    return scriptText.match(/#.*$/gm) || [];
  } else if (fileExtension === 'cpp') {
    return scriptText.match(/\/\/.*|\/\*[^]*?\*\//g) || [];
  } else if (fileExtension === 'go') {
    return scriptText.match(/\/\/.*|\/\*[^]*?\*\//g) || [];
  }
  
  return [];
}

function displayComments(comments) {
  const commentsOutput = document.getElementById('commentsOutput');
  commentsOutput.textContent = comments.join('\n\n');
}
