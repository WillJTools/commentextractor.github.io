document.getElementById('scriptFile').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const fileNameElement = document.getElementById('fileName');
  const commentsOutputElement = document.getElementById('commentsOutput');

  fileNameElement.textContent = `Uploaded file: ${file.name}`;

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const scriptText = e.target.result;
      commentsOutputElement.textContent = scriptText;
    };

    reader.readAsText(file);
  }
});
