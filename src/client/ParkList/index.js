import React from 'react';
import axios from 'axios';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ParkListItem from '../ParkListItem';

class ParkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: []
    };
  }

  async componentDidMount() {
    const parksList = await axios.get('/themeparks/all');
    this.setState({
      parks: parksList.data
    });
  }

  render() {
    return (
      <div>
        <div>
          <List>
            <h1>Parks List</h1>
            {this.state.parks.map((park, idx) => {
              return (
                // <ParkListItem
                //   key={idx}
                //   name={park.name}
                //   onClick={() => this.props.onUpdatePark(park)}
                // />
                <ListItem button onClick={() => this.props.onUpdatePark(park)}>
                  <ListItemText primary={park.name} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
    );
  }
}

export default ParkList;
