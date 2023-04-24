import { setUser } from "../../reducers/user/userSlice";
import { Form, useActionData,  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Heading from "../../components/Heading"
import InfoPersonalForm from "./components/InfoPersonalForm"
import Buttons from "../../components/Buttons";
import { useEffect } from "react";


export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData)
  const errores = {};
  if (datos.name === "") {
    errores.nombre = "Name can't be blank";
  }if (datos.email === "") {
    errores.mail = "Email can't be blank";
  }if (datos.phone === "") {
    errores.phone = "phone can't be blank";
  } else if (datos.phone.length < 8) {
    errores.celular = "phone is not correct";
  }
  
  if (Object.keys(errores).length) {
    return errores;
  }
  return datos
}

const InfoPersonal = () => {
  const action = useActionData()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    const condicion = action?.hasOwnProperty('nombre') || action?.hasOwnProperty('mail') || action?.hasOwnProperty('celular')
    if (!condicion && action !== undefined) {
      const usuario = { name: action.name, email: action.email, phone: action.phone }
      navigate('/plan')
      dispatch(setUser(usuario))
      localStorage.setItem('user', JSON.stringify(usuario))
    }
  }, [action])
  return (
    <>
      <Heading
        heading='Personal info'
        headingInfo='Please provide your name, email adress and phone number.'
      />
      <Form method="post">
        <InfoPersonalForm />
        <Buttons />
      </Form>
    </>
  )
}

export default InfoPersonal
