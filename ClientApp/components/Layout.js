import React, { Component } from "react";
import { NavMenu } from "./NavMenu";
import { Container } from 'semantic-ui-react';
export class Layout extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="col-sm-3">
                <NavMenu />
            </div>
            <Container >
                
                <Container className="col-sm-9">{this.props.children}</Container>
            </Container>
        </div>
    );
  }
}
