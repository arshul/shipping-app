import React, { Component } from "react";
import { Container, Header } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react' 

const stateOptions = [ {  value: 'UP', text: 'Uttar Pradesh' },{ value: 'PB', text: 'Punjab'},{ value: 'HR', text: 'Haryana'}]
class GetLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return <div>
            <Container fluid>
                <Header as='h2'>Dogs Roles with Humans</Header>
                <Dropdown placeholder='State' search selection options={stateOptions} />
            </Container>
        </div>
    }
}
export default GetLocation;