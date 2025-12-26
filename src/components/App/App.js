import ReduxCounter from 'components/ReduxCounter';
import Step from 'components/Step';
import { Container } from 'components/App/App.styled';

export default function App() {
  return (
    <Container>
      <Step />
      <ReduxCounter />
    </Container>
  );
}
