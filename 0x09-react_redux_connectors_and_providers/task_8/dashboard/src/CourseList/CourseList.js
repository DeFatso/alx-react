import React from 'react';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelectors';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  table: {
    width: "100%",
    margin: "0 auto",
    border: "1px solid black"
  }
});

class CourseList extends React.Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow = (id, checked) => {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  }

  renderCourses() {
    if (this.props.listCourses.length === 0) {
      return <CourseListRow textFirstCell="No course available yet" />;
    } else {
      return this.props.listCourses.map((course) => (
        <CourseListRow
          key={course.id}
          id={course.id}
          textFirstCell={course.name}
          textSecondCell={course.credit}
          isChecked={course.isSelected}
          onChangeRow={this.onChangeRow}
        />
      ));
    }
  }

  render() {
    return (
      <table className={css(styles.table)} id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          {this.renderCourses()}
        </tbody>
      </table>
    );
  }
}

CourseList.defaultProps = {
  listCourses: []
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
    isSelected: PropTypes.bool
  })),
  fetchCourses: PropTypes.func.isRequired,
  selectCourse: PropTypes.func.isRequired,
  unSelectCourse: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    listCourses: getListCourses(state)
  };
};

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);