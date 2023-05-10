import { Formik, Form as FormikForm, Field, useField } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  value: Yup.string()
    .required('Required'),
  colors: Yup.string().required('Required'),
});

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field, props)
    
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>

        <select {...field} {...props} />

        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

export default function Form  () {
    return (
        <div>
            <h1>Signup</h1>
            <Formik
            initialValues={{
                name: '',
                value: '0',
                colors: 'red',
            }}
            validationSchema={formSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
            >
            {({ errors, touched }) => (
                <FormikForm>
                <Field name="name" />
                {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                ) : null}

                <MySelect label="Value" name="value">
                    <option value="0">0</option>
                    <option value="1">1</option>
                </MySelect>

                <MySelect label="Value" name="colors">
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="yellow">yellow</option>
                    <option value="orange">orange</option>
                    <option value="black">black</option>
                </MySelect>

                <button type="submit">Submit</button>
                </FormikForm>
            )}
            </Formik>
        </div>
    )
}