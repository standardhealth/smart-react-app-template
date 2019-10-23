import React from 'react';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import logo from './logo.svg';
import {getPatientRecord} from './util/fhir_extract';

// get name from resource
const getPatientName = (name = [] ) => {
  const entry = name.find(n => n.use === 'official') || name[0];
  return entry ? `${entry.given.join(' ')} ${entry.family}` : 'No name';
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patientRecord: []
        }

    }
    componentDidMount() {
        getPatientRecord(this.props.client, this.updateStateElement);
    }

    updateStateElement = (elementName, text) => {
        this.setState({ [elementName]: text });
    }


    render() {
        return (
            <div >
              <h1> {getPatientName(this.props.patient.name)} </h1>
              {`Fetched ${this.state.patientRecord.length} resources`}
            </div>
          );
    }

}

export default App;
