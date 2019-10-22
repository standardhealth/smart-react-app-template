import React from 'react';
import './PathwaySelection.css';

interface Props {
  pathways: Array<string>;
}

const PathwaySelection: React.FC<Props> = ({pathways}: Props) => {
  return(
    <div className='pathway_selection'>
      <label htmlFor='pathway'>Pathway: </label>
      <select id='pathway' name='pathway'>
        {pathways.map((pathway) => <option value='s'>{pathway}</option>)}
      </select>
    </div>
  );
};

export default PathwaySelection;
