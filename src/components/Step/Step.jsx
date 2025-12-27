import { useSelector, useDispatch } from 'react-redux';
import {
  StepForm,
  StepFormTitle,
  StepFormBox,
  StepFormInput,
} from 'components/Step/Step.styled';
import { setStep } from '../../redux/counter/actions';

const Step = () => {
  const { step } = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.step;
    dispatch(setStep(Number(value)));
  };

  return (
    <StepForm onSubmit={handleSubmit} role="search">
      <StepFormTitle>Шаг для счётчика</StepFormTitle>
      <StepFormBox>
        <StepFormInput
          type="number"
          name="step"
          placeholder="Step"
          defaultValue={step}
        />

        <button type="submit">Set Step</button>
      </StepFormBox>
    </StepForm>
  );
};

export default Step;
