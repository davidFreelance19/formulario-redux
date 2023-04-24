import { useState } from "react"
import Heading from "../../components/Heading"
import CardsPlan from "./components/CardsPlan"
import styled from "@emotion/styled"
import SwitchToggle from "./components/SwitchToggle"
const Container = styled.div`
  height: 50px;
  background: hsl(231, 100%, 99%);
  border-radius: 6px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`
const MetodoPago = styled.div`
  width: 45%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SelectPlan = () => {
  const [pago, setPago] = useState(true)
  return (
    <>
      <Heading
        heading='Select your plan'
        headingInfo='You have the option of monthly or yearly billing.'
      />
      <CardsPlan pago={pago} />
      <Container>
        <MetodoPago>
          <p style={{fontWeight: '700', color: `${pago ? 'hsl(213, 96%, 18%)' : 'hsl(231, 11%, 63%)'}`}}>Monthly</p>
          <SwitchToggle setPago={setPago} pago={pago}/>
          <p style={{fontWeight: '700', color: `${!pago ? 'hsl(213, 96%, 18%)' : 'hsl(231, 11%, 63%)'}`}}>Yearly</p>
        </MetodoPago>
      </Container>
    </>
  )
}

export default SelectPlan
