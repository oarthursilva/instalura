import { useEffect, useState } from 'react';

export function useForm({
  initialValues, onSubmit, validateSchema,
}) {
  const [values, setValues] = useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  function formatErrors(yupErrors = []) {
    return yupErrors.reduce((errorObjectAcc, currentError) => {
      const fieldName = currentError.path;
      const errorMessage = currentError.message;
      return {
        ...errorObjectAcc,
        [fieldName]: errorMessage,
      };
    }, {});
  }

  async function validateValues(currentValues) {
    try {
      await validateSchema(currentValues);
      setErrors({});
      setIsFormDisabled(false);
    } catch (err) {
      const formattedErrors = formatErrors(err.inner);
      setErrors(formattedErrors);
      setIsFormDisabled(true);
    }
  }

  useEffect(() => {
    validateValues(values)
      .catch((err) => {
        console.log(err);
      });
  }, [values]);

  return {
    values,
    handleSubmit(e) {
      e.preventDefault();
      onSubmit(values);
    },
    handleChange(e) {
      const fieldName = e.target.getAttribute('name');
      const { value } = e.target;
      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    // form validation
    isFormDisabled,
    setIsFormDisabled,
    errors,
    touchedFields,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');
      setTouchedFields({
        ...touchedFields,
        [fieldName]: true,
      });
    },
  };
}
