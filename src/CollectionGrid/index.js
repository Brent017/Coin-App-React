import React from 'react';
import { Grid } from 'semantic-ui-react';

const Coins = (props) => {
  console.log(props, "props in CollectionGrid")
}

const CollectionGrid = (props, coin) => (

  <div>
  <button className='ui button' onClick={props.showModal.bind(null, coin)}>Add New Coin</button><br/>
  
  <Grid columns={7} style={{fontSize: "22px", textAlign: "center", marginTop: "5%"}}>
    <Grid.Row>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
        My Cache
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>
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
        Metals
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