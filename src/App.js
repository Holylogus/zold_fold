import { Form } from 'react-bootstrap';
import './App.css';
import useApiContext from './contexts/ApiContext';

function App() {
  const [bejegyzesek, getBejegyzesek] = useApiContext();


  return (
    <div className="App">
      <Form>
        <Form.Group controlId="form-group-id">
         Mit Tettél ma a Földért?
         <Form.Select aria-label="select">
          
          <option>Choose...</option>
          <option>...</option>
         </Form.Select>
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
