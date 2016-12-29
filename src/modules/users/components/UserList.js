import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import UserListItem from './UserListItem';

class UserList extends Component {
  componentDidMount() {
    const listItems = document.querySelectorAll('.userListItem');
    listItems.forEach(item => {
      item.addEventListener('mouseenter', ({target}) => {
        target.classList.add('hoverItem');
        target.lastChild.classList.remove('showOnHover');
      });
      item.addEventListener('mouseleave', ({target}) => {
        target.classList.remove('hoverItem');
        target.lastChild.classList.add('showOnHover');
      });
    });
  }
  renderUsers() {
    return this.props.users.map(user => (
        <UserListItem 
          key={user._id}
          user={user}
        />
    ));
  }
  render() {
    return (
      <Grid className='text-center'>
        { this.renderUsers() }
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.results
  }
}

export default connect(mapStateToProps, null)(UserList);