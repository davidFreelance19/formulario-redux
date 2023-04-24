import { useLocation } from "react-router-dom"
import { navegacionAside } from "../db"
import { useNavigate } from "react-router-dom"
import styled from "@emotion/styled"
const ButtonNext = styled.button`
  padding: 1rem;
  background-color: hsl(213, 96%, 18%);
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  :hover{
    cursor: pointer;
    background-color: hsla(212.72727272727272, 95.65217391304346%, 18.039215686274513%, 0.712);
    transition: background .2s ease-in-out;
  }
`
const ButtonBefore = styled.button`
  padding: 1rem;
  background-color: transparent;
  font-weight: 700;
  font-size: 16px;
  border: none;
  :hover{
    cursor: pointer;
  }
`
const Buttons = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const rutaActual = navegacionAside.findIndex(navegacion => navegacion.url === location.pathname)
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: `${location.pathname === '/' ? 'end' : 'space-between'}`
      }}>
      <>
        {
          location.pathname !== '/' &&
          <ButtonBefore
            type="button"
            onClick={() => rutaActual !== 0 &&
              navigate(`${navegacionAside[rutaActual - 1].url}`)}
          >Go Back</ButtonBefore>
        }
      </>
      <ButtonNext
        type="submit">
        {rutaActual + 1 !== navegacionAside.length ? 'Next Step' : 'Confirm'}
      </ButtonNext>
    </div>
  )
}

export default Buttons
