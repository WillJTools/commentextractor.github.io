document.getElementById('scriptFile').addEventListener('change', function(event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const scriptText = e.target.result;
      const comments = extractBashComments(scriptText);
      displayComments(comments);
    };

    reader.readAsText(file);
  }
});

function extractBashComments(scriptText) {
  return scriptText.match(/#.*$/gm) || [];
}

function displayComments(comments) {
  const commentsOutput = document.getElementById('commentsOutput');
  commentsOutput.textContent = comments.join('\n\n');
}
