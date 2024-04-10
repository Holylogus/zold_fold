import { Form } from "react-bootstrap";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import useApiContext from "./contexts/ApiContext";
import { Button } from 'react-bootstrap';

function App() {
  const [tevekenysegek, getTevekenysegek] = useApiContext();


  function handleSubmit(){
      getTevekenysegek();

  }
  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="form-group-id">
          <Row>
            <Col lg={12}>
              <Form.Label>Mit Tettél ma a Földért?</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col lg={5}>
              <Form.Select aria-label="select">{}</Form.Select>
            </Col>
            <Col lg={5}>
              <Form.Select
                aria-placeholder="Válasz Tevékenyéget"
                aria-label="select"
              >
                <option>Válasz Tevékenységet!</option>
                <option>...</option>
              </Form.Select>
            </Col>
            <Col lg={2}>
              <Button type="submit" variant="primary">Primary</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
