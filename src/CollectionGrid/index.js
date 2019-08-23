import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const CollectionGrid = () => (
  <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column>
        <Segment>Year</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Denom</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Mint</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment># Minted</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Composition</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Melt</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Value</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default CollectionGrid;