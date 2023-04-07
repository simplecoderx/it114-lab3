import React, { useState } from 'react';
import './PersonList.css'
import Person from './Person';

function PersonList(props) {
  const [people, setPeople] = useState(props.children);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleAdd = () => {
    if (name.trim() !== '' && age.trim() !== '' && parseInt(age) > 0) {
      const newPerson = <Person name={name} age={age} />;
      setPeople(prevPeople => [...prevPeople, newPerson]);
      setName('');
      setAge('');
    }else {
    alert('Invalid inputs. Please try again!');
  }
  };

  const handleRemove = name => {
    setPeople(prevPeople => prevPeople.filter(person => person.props.name !== name));
  };

  return (
    <div className='tablePersonList'>
      <h1>RECORDS</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {people.map(child => (
            <tr key={child.props.name}>
              <td>{child.props.name}</td>
              <td>{child.props.age}</td>
              <td>
                <button className="removebtn" onClick={() => handleRemove(child.props.name)}>Remove</button>
              </td>
            </tr>
          ))}
          <tr>
            <td className='inputfield'>
              <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            </td>
            <td className='inputfield'>
              <input type="number" value={age} onChange={e => setAge(e.target.value)} required />
            </td>
            <td className='inputfield'>
              <button className='addbtn' onClick={handleAdd}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PersonList;
