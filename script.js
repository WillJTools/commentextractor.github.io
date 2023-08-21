document.getElementById('scriptFile').addEventListener('change', function(event) {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const scriptText = e.target.result;
        const comments = extractComments(scriptText);
        displayComments(comments);
      };
  
      reader.readAsText(file);
    }
  });
  
  function extractComments(scriptText) {
    // Implement a function to extract comments from the script text.
    // This can vary depending on the script language. For example, in JavaScript:
    // const comments = scriptText.match(/\/\/.*|\/\*[^]*?\*\//g);
    // In Python, you can use regular expressions to capture comments.
    // Adjust this function according to the script formats you want to support.
  }
  
  function displayComments(comments) {
    const commentsOutput = document.getElementById('commentsOutput');
    commentsOutput.textContent = comments.join('\n\n');
  }
  
