import React from "react";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, World!"
        }
    }

    componentDidMount() {
        console.log("É executado após o componente ser montado");
        
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default Test;
