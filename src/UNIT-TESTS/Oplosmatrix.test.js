import { render , screen, fireEvent } from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom';
import Oplosmatrix from "../components/oplosMatrix/Oplosmatrix.js"

test("check if hints escape get rendered on start up", () => {
    const { asFragment } = render(
        <Router>
            <Oplosmatrix></Oplosmatrix>
        </Router>
    )

    screen.debug();
    expect(asFragment()).toMatchSnapshot();
})