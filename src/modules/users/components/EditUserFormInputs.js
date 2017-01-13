import React, { Component } from 'react';
import { Control, Form } from 'react-redux-form';
import { Grid, Row, Col, Checkbox } from 'react-bootstrap';
import FlashMessage from '../../common/components/FlashMessage';

class EditUserFormInputs extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true
    }
  }
  render() {
    return (
       <Grid style={{width: 'inherit'}}>
        <Row className='text-center'>
          <Col xs={6}>
            <Row className="show-grid">
              <Col>
                <label>Username</label>
                <Control.text 
                  model="editUser.username" 
                  defaultValue={this.props.users.editUsername || ''}
                  className='form-control'
                />
              <br/>
              </Col>
              <Col>
                <label>Email</label>
                <Control.text 
                  model="editUser.email" 
                  defaultValue={this.props.users.editUserEmail || ''}
                  className='form-control'
                />
              <br/>
              </Col>
              <Col>
                <label>Company</label>
                <Control.text 
                  model="editUser.company" 
                  defaultValue={this.props.users.editUserCompany || ''}
                  className='form-control'
                />
                <FlashMessage />
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <br />
            <Checkbox 
              inline={true}
              onChange={()=> this.setState({disabled: !this.state.disabled })}
            >
            Check to update password
            </Checkbox>
            <br />
            <label>New Password</label>
            <Control 
              model="editUser.password" 
              className='form-control'
              type='password'
              disabled={this.state.disabled}
            />
            <label>Confirm New Password</label>
            <Control 
              model="editUser.confirmPassword" 
              className='form-control'
              type="password"
              disabled={this.state.disabled}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default EditUserFormInputs;