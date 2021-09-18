import React from "react";
import FormBeast from "./FormBeast";
import Hornedbeast from "./HornedBeast";
import BeastArr from "./HornedBeast.json";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfHorns: 0,
    };
  }
  handleFilter = (numOfHorns) => {
    this.setState({
      numOfHorns: numOfHorns,
    });
  };
  render() {
    let filterArr = BeastArr.filter(value => {
      if (this.state.numOfHorns !== 0) {
        return value.horns === this.state.numOfHorns;
      } else {
        return value;
      }
    });
    filterArr.map((value) => {
      return <Hornedbeast horns={value.horns} />;
    });
    return (
      <>
        <h1>Hello and Welcome to my App!</h1>
        
        <FormBeast handleFilter={this.handleFilter} />
      </>
    );
  }
}
export default Header;
