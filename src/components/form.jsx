import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("myText", text);
    setText("")
  }

  function handleInput(e) {
    setText(e.target.value);
  }

  function upperCase() {
    setText(text.toUpperCase());
  }

  function lowerCase() {
    setText(text.toLowerCase());
  }

 function capitalizeEachWord() {
   setText(
     text
       .toLowerCase()
       .split(" ")
       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
       .join(" ")
   );
 }



  function resetText() {
    setText("");
  }

  const charCount = text.length;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div>
      <form className="container mt-4" onSubmit={handleSubmit}>
        <textarea
          className="form-control mb-3"
          rows="15"
          value={text}
          onChange={handleInput}
          placeholder="Enter your text"
        />

        <div className="d-flex gap-3">
          <button type="submit" className="btn btn-primary" disabled={!text}>
            Submit
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={upperCase}
            disabled={!text}
          >
            Uppercase
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={lowerCase}
            disabled={!text}
          >
            Lowercase
          </button>

          <button
            type="button"
            className="btn btn-success"
            onClick={capitalizeEachWord}
            disabled={!text}
          >
            Capitalize First Letter
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={resetText}
            disabled={!text}
          >
            Reset
          </button>
        </div>

        <div className="d-flex gap-3 mt-2">
          <span className="badge bg-dark">Characters: {charCount}</span>
          <span className="badge bg-dark">Words: {wordCount}</span>
        </div>
      </form>

      <div className="preview container mt-3">
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Form;
