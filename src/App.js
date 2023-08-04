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
      label: "fullname"
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "email"
    },
    {
      id: 3,
      name: "address",
      type: "text",
      placeholder: "Address",
      label: "address"
    },
    {
      id: 4,
      name: "city",
      type: "text",
      placeholder: "City",
      label: "city"
    },
    {
      id: 5,
      name: "state",
      type: "text",
      placeholder: "State",
      label: "state"
    },
    {
      id: 6,
      name: "zipCode",
      type: "text",
      placeholder: "Zip",
      label: "zipCode"
    },
    {
      id: 7,
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone #",
      label: "phoneNumber"
    },
    {
      id: 8,
      name: "otherInput",
      type: "text",
      placeholder: "Ferret",
      label: "otherInput"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={ handleSubmit }>

        <FormInputs name="fullname" placeholder="Full Name"/>
        <h3>Type of Residence</h3>
        <FormRadios />
        <FormInputs name="email" placeholder="Email"/>
        <FormInputs name="address" placeholder="Address"/>
        <FormInputs name="city" placeholder="City"/>
        <FormInputs name="state" placeholder="State"/>
        <FormInputs name="zip" placeholder="Zip"/>
        <FormInputs name="phone" placeholder="Phone #"/>
        <h3>Do you have any of the following in your home: </h3>
        <FormCheckboxes label="Dog" />
        <FormCheckboxes label="Cat" />
        <FormCheckboxes label="Bird" />
        <FormCheckboxes label="Rabbit" />
        <FormCheckboxes label="Other Pet" />
        <h4>If other, please specify:</h4>
        <FormInputs name="otherInput" label="OtherInput" placeholder="Ferret" /> 
        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
