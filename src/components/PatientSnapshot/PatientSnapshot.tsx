import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './PatientSnapshot.scss';

interface Props {
  name: string;
  birthDate: string;
  gender: string;
  address: string;
  photo?: string;
}

/**
 * A snapshot of the patient's information.
 *
 * @param patient - The patient used in the snapshot
 * @constructor
 */
const PatientSnapshot: FC<Props> = (patient: Props) => {
  return (
    <div className="patient-snapshot">
      <FontAwesomeIcon icon="user-circle" className="patient-snapshot__photo" />

      <div className="patient-snapshot__info">
        <div className="patient-name">{patient.name}</div>

        <dl className="patient-snapshot__list">
          <SnapshotField label="DOB: " value={patient.birthDate}/>
          <SnapshotField label="Admin. Sex: " value={patient.gender}/>
          <SnapshotField label="Location: " value={patient.address}/>
        </dl>
      </div>
    </div>
  );
};

interface FieldProps {
  label: string;
  value: string;
}

/**
 * A field and its description
 *
 * @param label - the field text
 * @param value - the value of the field
 * @constructor
 */
const SnapshotField: React.FC<FieldProps> = ({ label, value }: FieldProps) => {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
};

export default PatientSnapshot;
