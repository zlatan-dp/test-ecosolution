import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledField,
  StyledError,
  InputWrap,
  StyledArea,
} from './ContactForm.styled.js';
import { Button } from 'components/global/Button/Button.jsx';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Wrong Fullname')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Wrong email').required('Required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Wrong Phone')
    .length(12, 'Wrong Phone')
    .required('Required'),
  message: Yup.string(),
});

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{ fullName: '', email: '', phone: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          console.log(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <StyledForm>
            <InputWrap>
              <label htmlFor="fullName">*Full Name</label>
              <Field
                name="fullName"
                as={StyledField}
                placeholder="John Rosie"
                $error={!!errors.fullName && touched.fullName}
              />
              <ErrorMessage name="fullName" component={StyledError} />
            </InputWrap>

            <InputWrap>
              <label htmlFor="email">*Email</label>
              <Field
                name="email"
                type="email"
                as={StyledField}
                placeholder="johnrosie@gmail.com"
                $error={!!errors.email && touched.email}
              />
              <ErrorMessage name="email" component={StyledError} />
            </InputWrap>

            <InputWrap>
              <label htmlFor="phone">*Phone</label>
              <Field
                name="phone"
                as={StyledField}
                placeholder="380961234567"
                $error={!!errors.phone && touched.phone}
              />
              <ErrorMessage name="phone" component={StyledError} />
            </InputWrap>

            <InputWrap>
              <label htmlFor="message">Message</label>
              <Field
                name="message"
                as={StyledArea}
                placeholder="Your message"
              />
              <ErrorMessage name="message" component={StyledError} />
            </InputWrap>

            <Button type="submit" disabled={isSubmitting} ml={'auto'}>
              Send
            </Button>
          </StyledForm>
        </Form>
      )}
    </Formik>
  );
};
