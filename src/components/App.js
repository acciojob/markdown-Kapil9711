import React from "react";
import "../styles/App.css";

const App = () => {
  const [value, setValue] = React.useState("");
  console.log(value);
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
        <pre>{value}</pre>
        {value.length === 0 && <p className="loading">loading...</p>}
      </div>
    </section>
  );
};

export default App;
