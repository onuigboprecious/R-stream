import Alert from 'react-bootstrap/Alert';

function  AlertEmail() {
  return (
    <>
      {[
       " "
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This email address {variant} is alredy taken!
        </Alert>
      ))}
    </>
  );
}

export default  AlertEmail;