import { useSelector, useDispatch } from 'react-redux';
import {
  StepForm,
  StepFormTitle,
  StepFormBox,
  StepFormInput,
} from 'components/Step/Step.styled';

const Step = () => {
  const { step } = useSelector(state => state);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.step;
    dispatch({ type: 'setStep', payload: Number(value) });
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
