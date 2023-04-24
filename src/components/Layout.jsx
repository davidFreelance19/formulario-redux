import { Outlet } from "react-router-dom"
import styled from "@emotion/styled"
import Aside from "./Aside"
import Buttons from "./Buttons"
const Main = styled.main`
    height: 100vh;
    width: 100vw;
    display: grid;
    place-content: center;
`
const Contenedor = styled.blockquote`
    width: 90vw;
    max-width: 1040px;
    margin: 0 auto;
    height: 70vh;
    background-color: hsl(0, 0%, 100%);
    border-radius: 10px;
    display: grid;
    grid-template-columns:30% 70%;
    align-items: center;
`
const ContenedorFormulario = styled.div`
    margin: 0 auto;
    width: 65%;
    display: flex;
    flex-direction: column;
`
const Layout = () => {
    return (
        <Main>
            <Contenedor>
                <Aside />
                <ContenedorFormulario>
                    <Outlet />
                </ContenedorFormulario>
            </Contenedor>
        </Main>
    )
}

export default Layout
