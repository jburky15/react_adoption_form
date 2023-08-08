import { useState } from 'react';
import './App.css';
import FormCheckboxes from './components/FormCheckboxes';
import FormInputs from './components/FormInputs';
import FormRadios from './components/FormRadios';

function App() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    otherInput: ""
  })

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name"
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email"
    },
    {
      id: 3,
      name: "address",
      type: "text",
      placeholder: "Address",
      label: "Address"
    },
    {
      id: 4,
      name: "city",
      type: "text",
      placeholder: "City",
      label: "City"
    },
    {
      id: 5,
      name: "state",
      type: "text",
      placeholder: "State",
      label: "State"
    },
    {
      id: 6,
      name: "zipCode",
      type: "text",
      placeholder: "Zip",
      label: "Zip Code"
    },
    {
      id: 7,
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone #",
      label: "Phone Number"
    },
    {
      id: 8,
      name: "otherInput",
      type: "text",
      placeholder: "Ferret",
      label: "Other Animal"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <form onSubmit={ handleSubmit }>
        {inputs.map((input) => (
          <FormInputs key={ input.id } { ...input } value={ values[input.name] } onChange={ onChange } />
      ))}
      <h3>What is your current housing situation</h3>
      <FormRadios />
      <FormCheckboxes label="Check here to be awesome" />

      <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
