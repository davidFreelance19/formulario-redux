import styled from "@emotion/styled"
import { cardPlan } from "../../../db"
const ContenedorCard = styled.div`
    border: 1px solid #645f5f32;
    border-radius: 6px;
    min-height: 180px;
    padding: 1rem;
    display: grid;
    :hover{
     cursor: pointer;
     border: 1px solid #54009999;
     background-color: #d6adf71f;
     transition: all .4s ease-in-out;
    }
`
const SectionPlans = styled.section`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1rem;
    margin: 2rem 0;
`
const CardsPlan = ({ pago }) => {
    return (
        <SectionPlans>
            {
                cardPlan.map(plan => (
                    <ContenedorCard key={plan.id}>
                        <img src={`${plan.img}`} alt="icon-plan" />
                        <div style={{alignSelf: 'end'}}>
                            <p style={{fontWeight: '700', color: 'hsl(213, 96%, 18%)'}}>{plan.name}</p>
                            <p>${pago ? plan.pagoMensual : plan.pagoAnual}/{pago ? 'mo' : 'yr'}</p>
                            {!pago && <p style={{color: 'hsl(213, 96%, 18%)', fontWeight: '500'}}>2 months free</p>}
                        </div>
                    </ContenedorCard>
                ))
            }
        </SectionPlans>
    )
}

export default CardsPlan
