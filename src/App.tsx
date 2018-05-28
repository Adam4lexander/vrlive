import * as React from "react";
import MonacoEditor from "react-monaco-editor";
import "./App.css";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      code: "// type your code..."
    };
  }
  public render() {
    return (
      <div className="App">
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          value={this.state.code}
        />
      </div>
    );
  }
}

export default App;
