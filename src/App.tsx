import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';


import { getSentimentsData, getOverAllScore } from './utils';
import { DIMENSTION, SentimentData } from './model';

export interface Props {}

interface State {
  sentimentsData: SentimentData[];
  dimension: string;
}
class App extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      sentimentsData: [],
      dimension: ''
    }
  }

  selectDimesion(dimension: DIMENSTION) {
    const sentimentsData = getSentimentsData(dimension);
    this.setState({
      dimension,
      sentimentsData
    });
  }

  componentDidMount() {
    this.selectDimesion('location');
  }

  render() {
    const { sentimentsData, dimension } = this.state;
    return (
      <div className="App">
        <header>
          <h2>Select Dimension</h2>
          <Button onClick={() => {this.selectDimesion('location')}} disabled={ dimension === 'location' }>Location</Button>
          &nbsp;&nbsp;<Button onClick={() => {this.selectDimesion('designation')}} disabled={ dimension === 'designation' }>Designation</Button>
          &nbsp;&nbsp;<Button onClick={() => {this.selectDimesion('department')}}  disabled={ dimension === 'department' }>Deparment</Button>
        </header>
        <div className="sentiments-data">
          <table className="table table-striped sentiments-table">
            <thead>
              <tr>
                <th>Segment</th>
                <th>Sentiment Score</th>
                <th>Participation Percentage</th>
              </tr>
            </thead>
            <tbody>
              {
                sentimentsData.map((data: any) => (
                  <tr key={data.segment}>
                    <td>{data.segment}</td>
                    <td>{data.sentiment}</td>
                    <td>{data.percentage}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <h5>The overall sentiments scrore is {getOverAllScore(sentimentsData)}</h5>
      </div>
    );
  }
}

export default App;
