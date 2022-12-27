import { useState, useEffect } from 'react';
import CampoTexto from '../../componentes/CampoTexto';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormikProvider, useFormik, Formik } from 'formik';//
import * as Yup from "yup";

function CriarCategoria() {
  const [loading, setLoading] = useState(false);
  

  const RegisterSchema = Yup.object().shape({
    nome: Yup.string()
      .min(2, 'Muito curto!')
      .max(200, 'Muito grande!')
      .required('Categoria obrigatório!'),
  })

  const formik = useFormik({//
    initialValues: {
      nome: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (values, actions) => {
      setLoading(true);
      setLoading(false);
    }
  });

  console.log("formik",formik.values);

  const { errors, touched, handleSubmit, getFieldProps } = formik;
  
  const salvarCategoria = async (event) => {
    event.preventDefault();
    const body = { nome: nome }
    console.log("Esse aqui e o nome", nome);

    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body)
    };
    try {
      const fetchResponse = await fetch('http://localhost:3001/categories', settings);  
      console.log("fetchResponse",fetchResponse);
      if (fetchResponse.status === 201) {
        const data = await fetchResponse.json();
        setSavedUser(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
    <FormikProvider value={formik}>
      <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
      
                 <div>
                    <input 
                    type="text" 
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    {...getFieldProps('nome')}
                    />
                    <div>{touched.nome && errors.nome}</div>
                </div>
             <button type='submit'  >Criar categoria</button>
            <Link to="/">home</Link>
      </Form>
    </FormikProvider> 
    </>
  );
}

export default CriarCategoria;
