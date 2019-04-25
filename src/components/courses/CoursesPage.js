import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuidv4 from "uuid/v4";
import propTypes from "prop-types";
import * as createActions from "../../redux/actions/courseActions";

class CoursesPage extends Component {
  state = {
    title: "",
    courses: [],
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    const id = uuidv4();
    this.props.actions.createCourse({ title, id });
    this.setState({ title: "" });
  };
  render() {
    const { title } = this.state;
    const { courses } = this.props;
    return (
      <div>
        <h2 className="mt-3">Courses</h2>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
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
  courses: propTypes.array.isRequired,
  actions: propTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    courses: state.courses.courses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(createActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoursesPage);
