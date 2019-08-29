import React from 'react';
import { Grid } from 'semantic-ui-react';

const Coins = (props) => {
  console.log(props, "props in CollectionGrid")
}

const CollectionGrid = (props, coin) => (

  <div>
  <button className='ui button' onClick={props.showModal.bind(null, coin)}>Add New Coin</button><br/>
  
  <Grid columns={7} style={{fontSize: "22px", textAlign: "center", fontWeight: 'bold'}}>
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
  </Grid>
  </div>
)

export default CollectionGrid;