import React from "react";
import "../styles/App.css";

const App = () => {
  const [value, setValue] = React.useState("");

  return (
    <section className="app">
      <div className="textarea">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="textarea"
          name=""
          id=""
        />
      </div>
      <div className="preview">
        <h1>
          {/* {strArr} */}
          <strong>Heading</strong>
        </h1>
        {value.length === 0 && <p className="loading">loading...</p>}
      </div>
    </section>
  );
};

export default App;
