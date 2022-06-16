import { render , screen, fireEvent } from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom';
import HintEscape from "../components/HintsEscape";

test("check if hints escape get rendered on start up", () => {
    const { asFragment } = render(
        <Router>
            <HintEscape></HintEscape>
        </Router>
    )

    screen.debug();
    expect(asFragment()).toMatchSnapshot();
})

test("check if hints escape get rendered for clickinggame", () => {
    const { asFragment } = render(
        <Router>
            <HintEscape type="clickHints"></HintEscape>
        </Router>
    )

    screen.debug();
    expect(asFragment()).toMatchSnapshot();
})  

test("check if hints escape get rendered for drag and drop", () => {
    const { asFragment } = render(
        <Router>
            <HintEscape type="dragAndDropHints"></HintEscape>
        </Router>
    )

    screen.debug();
    expect(asFragment()).toMatchSnapshot();
})

test("check if hints escape get rendered for oplosmatrix", () => {
    const { asFragment } = render(
        <Router>
            <HintEscape type="oplosmatrixHints"></HintEscape>
        </Router>
    )

    screen.debug();
    expect(asFragment()).toMatchSnapshot();
})

test("check if hints escape get rendered for rebus", () => {
    const { asFragment } = render(
        <Router>
            <HintEscape type="rebusHints"></HintEscape>
        </Router>
    )

    screen.debug();
    expect(asFragment()).toMatchSnapshot();
})

test("check if hints escape get rendered for quiz", () => {
    const { asFragment } = render(
        <Router>
            <HintEscape type="quizzHints"></HintEscape>
        </Router>
    )

    screen.debug();
    expect(asFragment()).toMatchSnapshot();
})