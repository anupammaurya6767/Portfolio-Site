import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
const Check = (props) => {

    return(
        <Container>
            <Alert variant={props.type}>
          <strong>{props.msg}</strong>
        </Alert>
        </Container>
    );
}

export default Check;