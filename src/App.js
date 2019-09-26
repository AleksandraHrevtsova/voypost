import React, { Component } from 'react';
import TripsList from './components/Trips/TripsList';
import TripFilter from './components/Trips/TripsFilter';
import Legend from './components/Legend/Legend';
import Priority from './utils/Priority';

const fiterTrips = (trips, filter) => {
  return trips.filter(trip =>
    trip.fromName.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    trips: [],
    filter: '',
    isCreating: false,
    isEditing: false,
    selectedTripsId: null,
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { trips, filter } = this.state;
    const filteredTrips = filrerTrips(trips, filter);

    return (
      <div>
        <button type="button">Add Post</button>
        <Legend items={legendOptions} />

        <TripsFilter value={filter} onChangeFilter={this.changeFilter} />
        <TripsList items={filteredTrips} />
      </div>
    );
  }
}
