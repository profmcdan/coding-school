import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { createCourse } from "../../redux/actions/courseActions";

class CoursesPage extends Component {
  state = {
    title: "",
    courses: null,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    const course = { title };
    this.props.dispatch(createCourse(course));
    this.setState({ title: "" });
  };
  render() {
    const { title, courses } = this.state;
    return (
      <div>
        <h2 className="mt-3">Courses</h2>
        {courses && courses.map(course => <li>{course.title}</li>)}
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

CoursesPage.propTypes = {
  dispatch: propTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    courses: state.courses,
  };
};

// const mapDispatchToProps = () => {};

export default connect(mapStateToProps)(CoursesPage);
