import styled from '@emotion/styled';

const StepForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  /* width: 250px; */

  padding: 20px;

  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

const StepFormTitle = styled.h1`
  margin: 0;

  font-weight: 700;
  font-size: 32px;
  line-height: 1.19;
  letter-spacing: 0.03em;
`;

const StepFormBox = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;
`;

const StepFormInput = styled.input`
  width: 100px;
  height: 70px;
  padding: 6px;
  border-radius: 4px;

  outline: none;

  font-weight: 500;
  font-size: 62px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

export { StepForm, StepFormTitle, StepFormBox, StepFormInput };
