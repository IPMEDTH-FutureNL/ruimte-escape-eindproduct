import { render , screen, fireEvent } from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom';
import DragAndDrop from "../components/dragAndDrop/DragAndDrop.js"

test("check if hints escape get rendered on start up", () => {
    const { asFragment } = render(
        <Router>
            <DragAndDrop></DragAndDrop>
        </Router>
    )

    screen.debug();
    expect(asFragment()).toMatchSnapshot();
})