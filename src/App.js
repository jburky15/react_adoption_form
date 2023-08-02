import './App.css';
import FormCheckboxes from './components/FormCheckboxes';
import FormInputs from './components/FormInputs';
import FormRadios from './components/FormRadios';

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()));
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
        <FormInputs label="OtherInput" placeholder="Ferret" /> 
        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
