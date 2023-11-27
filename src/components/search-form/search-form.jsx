import { Formik, Form, Field } from 'formik';

export const SearchForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      searchQuery: '',
    }}
    onSubmit={values => {
      onSubmit(values.searchQuery);
    }}
  >
    <Form>
      <button type="submit">SEARCH</button>
      <Field id="searchQuery" name="searchQuery" />
    </Form>
  </Formik>
);
