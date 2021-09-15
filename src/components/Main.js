import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hornedbeast from "./HornedBeast";
import BeastArr from "./HornedBeast.json";
import SelectedBeast from "./SelectedBeast";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showedTitle: "",
      showedImg: "",
      showedDescr: "",
      showModal: false,
    };
  }

  handleClose = () => {
    this.setState({ showModal: false });
  };
  show = (title, imag, descr) => {
    this.setState({
      showedTitle: title,
      showedImg: imag,
      showedDescr: descr,
      showModal: true,
    });
  };
  render() {
    let newArr = BeastArr.map((Element) => {
      return (
        <>
          <Hornedbeast
            title={Element.title}
            image_url={Element.image_url}
            description={Element.description}
            keyword={Element.keyword}
            horns={Element.horns}
          />
          <SelectedBeast
            showModal={this.state.showModal}
            handleClose={this.handleClose}
            showedTitle={this.state.showedTitle}
            showedImg={this.state.showedImg}
            showedDescr={this.state.showedDescr}
          />
        </>
      );
    });
    return newArr;
  }
}
export default Main;
