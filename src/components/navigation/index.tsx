import React from 'react';
import { withRouter } from 'react-router';

import { Container } from '../../styles';
import items from './items';
import { Column, Grid, Item, Spacer } from './styles';

function Navigation() {
    return (
        <Spacer>
            <Container>
                <Grid>
                    {Object.keys(items).map((key, columnIndex) => (
                        <Column key={`navigation-column-${columnIndex}`}>
                            {items[key].map(({ to, content }, itemIndex) => (
                                <Item
                                    key={`navigation-column${columnIndex}-item-${itemIndex}`}
                                    to={to}
                                    active={window.location.pathname === to}
                                >
                                    {content}
                                </Item>
                            ))}
                        </Column>
                    ))}
                </Grid>
            </Container>
        </Spacer>
    );
}

export default withRouter(Navigation);