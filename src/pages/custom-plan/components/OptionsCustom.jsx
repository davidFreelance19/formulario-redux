import { customOptions } from "../../../db"
import styled from "@emotion/styled"
const ContainerOption = styled.div`
    display: flex;
    padding: 1.2rem 1.5rem;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #5c5c5c21;
    border-radius: 10px;
    margin: 18px 0;
    :hover{
     cursor: pointer;
     border: 1px solid #54009999;
     background-color: #d6adf71f;
     transition: all .4s ease-in-out;
    }
`
const OptionsCustom = () => {
    return (
        <section style={{ marginBottom: '2rem' }}>
            {
                customOptions.map(option => (
                    <ContainerOption key={option.id}>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <input type='checkbox' />
                            <div>
                                <p style={{ color: 'hsl(213, 96%, 18%)', fontWeight: '700' }}>{option.name}</p>
                                <p>{option.info}</p>
                            </div>
                        </div>
                        <p style={{ color: '#54009999' }}>+${option.pagoMensual}/mo</p>
                    </ContainerOption>
                ))
            }
        </section>
    )
}

export default OptionsCustom
