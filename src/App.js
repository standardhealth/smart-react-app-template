import React from 'react';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import logo from './logo.svg';
import { getPatientRecord } from 'util/fhir_extract';
import { AllergiesVisualizer, CarePlansVisualizer, ConditionsVisualizer, EncountersVisualizer,
  ImmunizationsVisualizer, MedicationsVisualizer, ObservationsVisualizer, PatientVisualizer,
  ProceduresVisualizer, ReportsVisualizer} from 'fhir-visualizers';

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
    };
  }

  componentDidMount() {
    const patientRecordPromise = getPatientRecord(this.props.client);
    patientRecordPromise.then(patientRecord => this.setState({patientRecord}));
  }

  updateStateElement = (elementName, text) => {
    this.setState({[elementName]: text});
  };

  getResourceByType = (resourceType) => {
    return this.state.patientRecord.filter(resource => resource.resourceType == resourceType);
  };

  render() {
    const {patient} = this.props;
    return (
      <div>
        <div>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"/>
          <Header logo={logo} title='SMART App'/>
          <Navigation name={getPatientName(patient.name)}
                      birthDate={patient.birthDate}
                      gender={patient.gender}
                      address={patient.address}/>
        </div>
        <div>
          <h1> {getPatientName(patient.name)} </h1>
          {`Fetched ${this.state.patientRecord.length} resources`}
        </div>
        <PatientVisualizer patient={patient}/>
        <ConditionsVisualizer rows = {this.getResourceByType('Condition')}/>
        <ObservationsVisualizer rows = {this.getResourceByType('Observation')} />
        <ReportsVisualizer rows = {this.getResourceByType('DiagnosticReport')} />
        <MedicationsVisualizer rows = {this.getResourceByType('MedicationRequest')} />
        <AllergiesVisualizer rows = {this.getResourceByType('AllergyIntolerance')} />
        <CarePlansVisualizer rows = {this.getResourceByType('CarePlan')} />
        <ProceduresVisualizer rows = {this.getResourceByType('Procedure')} />
        <EncountersVisualizer rows = {this.getResourceByType('Encounter')} />
        <ImmunizationsVisualizer rows = {this.getResourceByType('Immunization')} />
      </div>
    );
  }
}

export default App;
