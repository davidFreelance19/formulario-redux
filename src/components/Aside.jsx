import { useLocation } from "react-router-dom"
import styled from "@emotion/styled"
import bgAside from '../assets/images/bg-sidebar-desktop.svg'
import { navegacionAside } from "../db"
const AsideBar = styled.aside`
    height: 94%;
    width: 270px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0 auto;
    border-radius: 10px;
    background-image: url(${bgAside});
    display: grid; 
    place-content: start;
    gap: 1rem;
    padding: 2rem;
`
const ContendorNavegacion = styled.blockquote`
    color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
    column-gap: 1rem;
    p, h3{
        text-transform: uppercase;
    }
    .rounded-id{
        padding: .7rem 1rem;
        border-radius: 100px;
        border: 1px solid #fff;
        color: #fff;
        font-weight: 700;
    }
    h3{
        font-size: 15px;
        margin-top: 2px;
    }
`
const Aside = () => {
    const location = useLocation()
    return (
        <AsideBar>
            <>
                {
                    navegacionAside.map(navegacion => (
                        <ContendorNavegacion key={navegacion.id}>
                            <div className="rounded-id"
                                style={
                                    {
                                        backgroundColor: `${location.pathname === navegacion.url ? 'hsl(228, 100%, 84%)' : ''} `,
                                        color: `${location.pathname === navegacion.url ? '#000' : ''} `
                                    }
                                }
                            >{navegacion.id}</div>
                            <div className="info-nav">
                                <p>step {navegacion.id}</p>
                                <h3>{navegacion.name}</h3>
                            </div>
                        </ContendorNavegacion>
                    ))
                }
            </>
        </AsideBar>
    )
}

export default Aside
