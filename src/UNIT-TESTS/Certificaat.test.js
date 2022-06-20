import { render , screen, fireEvent } from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom';
import Certificaat from "../components/Certificaat"

test("check if hints escape get rendered on start up", () => {
    const { asFragment } = render(
        <Router>
            <Certificaat></Certificaat>
        </Router>
    )

    screen.debug();
    expect(asFragment()).toMatchSnapshot();
})