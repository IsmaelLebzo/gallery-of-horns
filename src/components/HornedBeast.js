import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Hornedbeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfVotes: 0,
    };
  }

  increasNumOfVotes = () => {
    this.setState({
      numOfVotes: this.state.numOfVotes + 1,
    });
  };

  test = () => {
    this.props.show(
      this.props.title,
      this.props.image_url,
      this.props.description
    );
  }

  render() {
    return (
      <div>
        {/* <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.keyword} title={this.props.horns} />
                <p>{this.props.description}</p> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.image_url}
            alt={this.props.title}
            title={this.props.title}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}.<br />
              Number of Votes {this.state.numOfVotes}
            </Card.Text>
            <Button onClick={this.increasNumOfVotes} variant="primary">
              Vote
            </Button>
            {"\n"}
            <Button onClick={this.test.bind(this)} variant="info">
              Show Modal
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Hornedbeast;
