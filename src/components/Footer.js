import React, { Component } from 'react';
import {List} from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return (
        <footer>
            <div>
                Footer Component
            </div>
            <List>
                <List.Item>
                    <List.Icon name='users' />
                    <List.Content>Mitchell Baller</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='marker' />
                    <List.Content>Cleveland, Ohio</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='mail' />
                    <List.Content>mitchell.baller@case.edu</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='linkify' />
                    <List.Content>
                        <a href='http://www.github.com/mitchellballer'>github.com/mitchellballer</a>
                    </List.Content>
                </List.Item>
            </List>
        </footer>
        )
    }
}

export default Footer;