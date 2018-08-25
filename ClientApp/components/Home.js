import React, { Component } from "react";
import { Container, Header, Input, Form } from 'semantic-ui-react';

import { VictoryChart, VictoryLine, VictoryTheme} from 'victory';

export class Home extends Component {

    state = {
        age: 27,
        aor: 65,
        currretire: 2000
    } 


    _dataOnChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {

    return (
        <Container style={{ paddingTop: '40px' }}>
            <Header as="h1">When where and how to save money!</Header>
            <p>Your age is: {this.state.age}</p>
            <p>Your age of retirement is: {this.state.aor}</p>
            <p>Your current 401k is: {this.state.currretire}</p>
           
            <Form>
                <Form.Group inline widths="equal">
                    <Form.Input control={Input} fluid label="Current Age" name="age" onChange={this._dataOnChange}></Form.Input>
                    <Form.Input control={Input} fluid label="Age of Retirement" name="aor" onChange={this._dataOnChange}></Form.Input>
                </Form.Group>
                <Form.Field inline control={Input} label="Current Savings"></Form.Field>
                <Form.Field inline control={Input} label="401k Balance" type="currency" name="currretire" onChange={this._dataOnChange} className="money"></Form.Field>
                <Form.Field inline control={Input} label="% Paycheck contributions per pay period"></Form.Field>
                <Form.Field inline control={Input} label="Current Age"></Form.Field>
                <Form.Field inline control={Input} label="Current Age"></Form.Field>
            </Form>
            <Container style={{height:'30vh',width:'30vw'}}>
            <VictoryChart
                theme={VictoryTheme.material}
            >
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" }
                        }}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 },
                        { x: 10, y: 2 },
                        { x: 15, y: 3 },
                        { x: 20, y: 5 },
                        { x: 40, y: 4 },
                        { x: 50, y: 7 }
                    ]}
                />
                </VictoryChart>
            </Container>
        <ul>
          <li>
            <strong>Client-side navigation</strong>. For example, click{" "}
            <em>Counter</em> then <em>Back</em> to return here.
          </li>
          <li>
            <strong>Webpack dev middleware</strong>. In development mode,
            there's no need to run the <code>webpack</code> build tool. Your
            client-side resources are dynamically built on demand. Updates are
            available as soon as you modify any file.
          </li>
          <li>
            <strong>Hot module replacement</strong>. In development mode, you
            don't even need to reload the page after making most changes. Within
            seconds of saving changes to files, rebuilt React components will be
            injected directly into your running application, preserving its live
            state.
          </li>
          <li>
            <strong>Efficient production builds</strong>. In production mode,
            development-time features are disabled, and the <code>webpack</code>{" "}
            build tool produces minified static CSS and JavaScript files.
          </li>
        </ul>
        <h4>Going further</h4>
        <p>
          For larger applications, or for server-side prerendering (i.e., for{" "}
          <em>isomorphic</em> or <em>universal</em> applications), you should
          consider using a Flux/Redux-like architecture. You can generate an
          ASP.NET Core application with React and Redux using{" "}
          <code>dotnet new reactredux</code> instead of using this template.
        </p>
        </Container>
    );
  }
}
