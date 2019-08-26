import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const Coins = (props) => {
  console.log(props, "props in CollectionGrid")
}

const CollectionGrid = (props,coin) => (

  <div>
  <button class='ui button' onClick={props.showModal.bind(null, coin)}>Add New Coin</button>
  <Grid columns={9} divided style={{fontSize: "22px", textAlign: "center", marginTop: "5%"}}>
    <Grid.Row>
      <Grid.Column>
        Year
      </Grid.Column>
      <Grid.Column>
        Denom
      </Grid.Column>
      <Grid.Column>
        Mint
      </Grid.Column>
      <Grid.Column>
        Mintage
      </Grid.Column>
      <Grid.Column>
        Composition
      </Grid.Column>
      <Grid.Column>
        Melt
      </Grid.Column>
      <Grid.Column>
        Value
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)

export default CollectionGrid;