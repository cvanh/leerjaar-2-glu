import { container } from "@xstyled/styled-components"
import Header from "../../components/header/Header"
import {MainPhoto,Article} from "../../styled/about.styled";


function About(){
    return(
        <>
        <Header/>
        <container>
            <Article>
            <MainPhoto src="/kokenmetconto.png"/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
            </p>
            </Article>
        </container>
        </>
    )
}
export default About