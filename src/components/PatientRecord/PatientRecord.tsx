import React, { FC } from 'react';
import { usePatient } from '../PatientProvider';

import {
  AllergiesVisualizer,
  CarePlansVisualizer,
  ConditionsVisualizer,
  EncountersVisualizer,
  ImmunizationsVisualizer,
  MedicationsVisualizer,
  ObservationsVisualizer,
  PatientVisualizer,
  ProceduresVisualizer,
  ReportsVisualizer
} from 'fhir-visualizers';

type PatientRecordProps = {
  resources: ReadonlyArray<Record<string, any>>;
};

const getResourceByType = (patientRecord: ReadonlyArray<any>, resourceType: string) => {
  return patientRecord.filter(resource => resource.resourceType === resourceType);
};

const PatientRecord: FC<PatientRecordProps> = ({ resources }) => {
  const patient = usePatient();

  return (
    <div>
      <PatientVisualizer patient={patient} />
      <ConditionsVisualizer rows={getResourceByType(resources, 'Condition')} />
      <ObservationsVisualizer rows={getResourceByType(resources, 'Observation')} />
      <ReportsVisualizer rows={getResourceByType(resources, 'DiagnosticReport')} />
      <MedicationsVisualizer rows={getResourceByType(resources, 'MedicationRequest')} />
      <AllergiesVisualizer rows={getResourceByType(resources, 'AllergyIntolerance')} />
      <CarePlansVisualizer rows={getResourceByType(resources, 'CarePlan')} />
      <ProceduresVisualizer rows={getResourceByType(resources, 'Procedure')} />
      <EncountersVisualizer rows={getResourceByType(resources, 'Encounter')} />
      <ImmunizationsVisualizer rows={getResourceByType(resources, 'Immunization')} />
    </div>
  );
};

export default PatientRecord;
