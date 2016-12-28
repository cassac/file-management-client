import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sortUsersBy } from '../actions';
import { userSearchCriteria } from '../../../config.js';
import { Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

class SortBar extends Component {
  render() {
    const createSortToggles = () => {
      return userSearchCriteria.map(item => {
        return (
          <Col xs={2} key={item}> 
            <Row className="show-grid" className="text-center">
              <Col xs={12} > 
                {item}
              </Col>
              <Col xs={12} className="text-center" > 
                <Button
                  bsSize="xsmall" 
                  onClick={ () => {console.log('Up')} }
                >
                  <Glyphicon glyph="arrow-up" />
                </Button>
                <Button
                  bsSize="xsmall" 
                  onClick={ ()=> {console.log('Down')} }
                >
                  <Glyphicon glyph="arrow-down" />
                </Button>
              </Col>
            </Row>
          </Col>
        )
      });
    }
    return (
      <Row className="show-grid">
        { createSortToggles() }
      </Row>
    )
  }
}

export default SortBar;