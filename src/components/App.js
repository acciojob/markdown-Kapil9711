import React from "react";
import "../styles/App.css";

const App = () => {
  const [value, setValue] = React.useState("");
  console.log(value);
  let strArr = [];
  let str = "";
  if (!value.includes("\\n")) strArr.push(<h1>{value}</h1>);
  else {
    for (let i = 0; i < value.length; i++) {
      const ch = value[i];
      if (ch === "#") continue;
      if (ch === "\\" && value[i + 1] === "n") {
        strArr.push(<h1>{str}</h1>);
        strArr.push(<h1></h1>);
        str = "";
        i++;
      } else str += ch;
    }
  }

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
          {strArr}
          {/* <pre>{value}</pre> */}
        </h1>
        {value.length === 0 && <p className="loading">loading...</p>}
      </div>
    </section>
  );
};

export default App;
