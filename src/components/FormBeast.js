import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

class FormBeast extends React.Component {
  numberOfHorns = async (event) => {
    event.preventDefault();
    let horns = Number(event.target.value);
    await this.props.handleFilter(horns);
  };
  render() {
    return (
      <>
        <Form onChange={this.selectedNumber}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Filter</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="0">Choose how many Horns you want!</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">Wow..</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </>
    );
  }
}
export default FormBeast;
