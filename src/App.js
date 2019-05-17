import React, { Component } from "react";
import axios from 'axios';
import NavigationBar from "./components/NavigationBar";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      navigationBarData: [],
    }
  }

  componentDidMount(){
    axios.get("navigation-bar-data.json").then(res=>this.setState({navigationBarData: res.data}) );
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <NavigationBar navigationBarData={this.state.navigationBarData} />
      </div>
    );
  }
}

export default App;
