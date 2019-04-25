import React, { Component } from "react";
import { Link } from "react-router-dom";

class CoursesPage extends Component {
  state = {
    title: "",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { title } = this.state;
    return (
      <div>
        <h2 className="mt-3">Courses</h2>
        <form onSubmit={this.handleSubmit}>
          <h3>Add Course</h3>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter Course Title"
              onChange={this.handleChange}
              value={title}
              required
            />
          </div>
          <button className="btn btn-primary btn-lg" type="submit">
            Submit
          </button>
        </form>
        <p className="lead">The list of courses will be here</p>
      </div>
    );
  }
}

export default CoursesPage;
