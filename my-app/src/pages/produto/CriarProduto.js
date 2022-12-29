import { Link, useNavigate } from 'react-router-dom';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from "yup";

function CriarProduto() {

  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    nome: Yup.string()
      .min(2, 'Muito curto!')
      .max(200, 'Muito grande!')
      .required('Nome obrigatório!'),

      description: Yup.string()
      .min(2, 'Muito curto!')
      .max(200, 'Muito grande!')
      .required('Descrição obrigatório!'),

      price: Yup.number()
      .min(1, 'Muito curto!')
      .max(900, 'Muito grande!')
      .required('Preço obrigatório!'),

      quantidade: Yup.number()
      .min(1, 'Muito curto!')
      .max(200, 'Muito grande!')
      .required('Quantidade obrigatório!') 
  })

  const formik = useFormik({//
    initialValues: {
      nome: '',
      description:'',
      price: '',
      quantidade:'',
      category:''
    },
    validationSchema: RegisterSchema,

    onSubmit: async (values) => {
      const body = { 
        nome: values.nome,
        description: values.description,
        price: values.price,
        quantidade: values.quantidade
    }
      const settings = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(body)
      };
      try {
        const fetchResponse = await fetch('http://localhost:3001/produtos', settings);
        console.log("fetchResponse", fetchResponse);
        if (fetchResponse.status === 201) {
          formik.setFieldValue("nome", null);
          //navigate('/listaCategoria', { replace: true });
          //console.log("Chego aqui");
        }
      } catch (e) {
        console.error(e);
      }
    }
  });

  console.log("formik", formik.values);

  const { errors, touched, handleSubmit, getFieldProps } = formik;
  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
            <h1>Criar produto</h1>
          <div>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite o nome do produto"
              {...getFieldProps('nome')}
            />
            <div>{touched.nome && errors.nome}</div>
          </div>

          <div>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Descrição do produto"
              {...getFieldProps('description')}
            />
            <div>{touched.description && errors.description}</div>
          </div>

          <div>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Digite o preço"
              {...getFieldProps('price')}
            />
            <div>{touched.price && errors.price}</div>
          </div>

          <div>
            <input
              type="text"
              id="quantidade"
              name="quantidade"
              placeholder="Digite a quantidade"
              {...getFieldProps('quantidade')}
            />
            <div>{touched.quantidade && errors.quantidade}</div>
          </div>

         

          <button type='submit'  >Criar produtos</button>
          <Link to="/">home</Link>
        </Form>
      </FormikProvider>
    </>
  );
}

export default CriarProduto;
