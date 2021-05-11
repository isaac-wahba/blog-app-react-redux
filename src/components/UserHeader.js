/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';
class UserHeader extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return <div className='header'>Loading</div>;
    }
    return <div className='header'>{user.name}</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
}

export default connect(mapStateToProps)(UserHeader);
