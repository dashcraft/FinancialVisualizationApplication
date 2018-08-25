import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Menu, Button, Container } from 'semantic-ui-react';



@withRouter
export class NavMenu extends Component {
    constructor(props) {
        super(props);

    }
  render() {
      const { location } = this.props;
      console.log(this.props);
      return (
      <div>
            <Menu pointing inverted style={{
                borderRadius: '0px'}}>
   
                  <Menu.Item active={location.pathname === '/'} onClick={this.handleItemClick}>
                <NavLink to={"/"} exact activeClassName="active">
                  <span className="glyphicon glyphicon-home" /> Home
                </NavLink>
                        </Menu.Item>
                  <Menu.Item active={location.pathname === '/counter'} onClick={this.handleItemClick}>
                <NavLink to={"/counter"} activeClassName="active">
                  <span className="glyphicon glyphicon-education" /> Counter
                </NavLink>
                        </Menu.Item>
                  <Menu.Item active={location.pathname === '/fetchdata'} onClick={this.handleItemClick}>
                <NavLink to={"/fetchdata"} activeClassName="active">
                  <span className="glyphicon glyphicon-th-list" /> Fetch data
                </NavLink>
                        </Menu.Item>
    
        </Menu>
      </div>
    );
  }
}
