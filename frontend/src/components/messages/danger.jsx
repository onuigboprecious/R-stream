import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(true)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
       
      </Alert>
    );
  }
  
}

export default AlertDismissibleExample;
