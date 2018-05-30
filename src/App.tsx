import * as React from "react";
import MonacoEditor from "react-monaco-editor";
import logger from "./lib/log";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      code: "// type your code..."
    };
  }
  public render() {
    return (
      <div style={{ textAlign: "left" }} className="App">
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          value={this.state.code}
          width="1024"
          height="1024"
        />
      </div>
    );
  }
}

export default App;
