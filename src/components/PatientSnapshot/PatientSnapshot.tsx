import React from 'react';
import './PatientSnapshot.scss';

interface Props {
  name: string;
  birthDate: string;
  gender: string;
  address: string;
  photo?: string;
}

const PatientSnapshot: React.FC<Props> = (patient: Props) => {
  return(
    <div className="snapshot">
      <i className="material-icons snapshot_photo">account_circle</i>
      <div className="snapshot_info">
        <h3>{patient.name}</h3>
        <dl className="snapshot_list">
          <SnapshotField label='DOB: ' value={patient.birthDate}/>
          <SnapshotField label='Admin. Sex: ' value={patient.gender}/>
          <SnapshotField label='Location: ' value={patient.address}/>
        </dl>
      </div>
    </div>
  );
};

interface FieldProps {
  label: string;
  value: string;
}

const SnapshotField: React.FC<FieldProps> = ({label, value}: FieldProps) => {
  return(
    <div>
      <dt> {label} </dt>
      <dd> {value} </dd>
    </div>
  );
};

export default PatientSnapshot;
