import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      capital: "",
      flag: "",
      region: "",
    };
  }
  componentDidMount() {
    fetch("https://restcountries.com/v3.1/name/france")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          name: res[0].name.common,
          capital: res[0].capital,
          flag: res[0].flags.png,
          region: res[0].region,
        });
      });
    // console.log(this.state.flags);
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.capital}</p>
        <img src={this.state.flag} alt="drapeau" />
        <p>{this.state.population}</p>
        <p>{this.state.region}</p>
      </div>
    );
  }
}

export default App;
