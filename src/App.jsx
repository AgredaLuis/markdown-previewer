import "./App.css";

import { useState } from "react";
import { marked } from "marked";

//a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

function App() {
  const [text, setText] = useState(`
  # H1
## H2
[title](https://www.example.com)
\`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  1. First item
2. Second item
3. Third item

> blockquote

![alt text](image.jpg)

**bold text**

`);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1>Markdown Previewer</h1>
          <textarea
          className="textarea"
            name="editor"
            id="editor"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
          <div
          className="texto"
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(text),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
