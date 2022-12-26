import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  primeiroNome: Yup
  .string()
  .min(2, 'Muito curto!')
  .max(200, 'Muito grande!')
  .required('Nome obrigatório!'),

  idade: Yup
  .number()
  .min(2, 'Muito curto!')
  .max(200, 'Muito grande!')
  .required('Idade obrigatório!'),
})


function Texte() {

  return (
    <div>
      <h1>ola</h1>
      <Formik
      validationSchema={schema}
       initialValues={{
        primeiroNome: '',
        idade: ''
      }}>
        {({errors}) => (
          <form>
            <div>
              <label htmlFor="primeiroNome">primeiro nome</label>
              <Field id="primeiroNome" name="primeiroNome" type="text"/>
              {errors.primeiroNome && (
                <div>{errors.primeiroNome}</div>
              )}
            </div>
            <div>
              <label htmlFor="idade">idade</label>
              <Field id="idade" name="idade" type="number"/>
              {errors.idade && (
                <div>{errors.idade}</div>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Texte;