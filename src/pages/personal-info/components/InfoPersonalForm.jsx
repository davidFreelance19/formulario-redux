import styled from "@emotion/styled"
import { useSelector } from "react-redux"

const InputForm = styled.input`
    border-radius: 5px;
    padding: 14px;
    border: 1px solid #66656592;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 1.5rem;
`

const InfoPersonalForm = () => {
  const { name, email, phone } = useSelector(state => state.user)
  return (
    <>
      <blockquote>
        <div>
          <label style={{ fontWeight: '700', color: 'hsl(213, 96%, 18%)' }} htmlFor="name">Name</label>
        </div>
        <InputForm type="text" id="name" name="name" placeholder="e.g Stephen King" defaultValue={name} />
      </blockquote>
      <blockquote>
        <div>
          <label style={{ fontWeight: '700', color: 'hsl(213, 96%, 18%)' }} htmlFor="email">Email Adress</label>
        </div>
        <InputForm type="email" id="email" name="email" placeholder="e.g stephenking@lorem.com" defaultValue={email} />
      </blockquote>
      <blockquote>
        <div>
          <label style={{ fontWeight: '700', color: 'hsl(213, 96%, 18%)' }} htmlFor="phone">Phone Number</label>
        </div>
        <InputForm type="text" id="phone" name="phone" placeholder="e.g +1 234 567 890" defaultValue={phone}/>
      </blockquote>
    </>
  )
}

export default InfoPersonalForm
