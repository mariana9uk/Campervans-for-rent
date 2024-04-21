import * as Yup from 'yup';
import { Formik, ErrorMessage, Form } from 'formik';
import { ErrorMessageStyled, StyledButton, StyledInput } from './formStyled';

const validSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  email: Yup.string()

    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

 const Book = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          date: '',
          comment: '',
        }}
        validationSchema={validSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>
              <StyledInput type="text" name="name" placeholder="Name" />
              <ErrorMessage component={ErrorMessageStyled} name="name" />
            </label>
            <label>
              <StyledInput type="email" name="email" placeholder="Email" />
              <ErrorMessage component={ErrorMessageStyled} name="email" />
            </label>
            <label>
              <StyledInput type="date" name="date" placeholder="Booking date" />
              <ErrorMessage component={ErrorMessageStyled} name="date" />
            </label>
            <label>
              <StyledInput type="text" name="comment" placeholder="Comment" />
              <ErrorMessage component={ErrorMessageStyled} name="comment" />
            </label>
            <StyledButton type="submit">Send</StyledButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default Book