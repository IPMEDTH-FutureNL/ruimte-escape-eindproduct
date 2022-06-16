import { render , screen, fireEvent } from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom';
import Start from "../components/verhaal/Start";

test('on initial render of start, check if component is loaded', () => {
    const { asFragment }  = render(
        <Router>
            <Start></Start>
        </Router>
    )

    screen.debug();
    expect(asFragment()).toMatchSnapshot();
})

test('if change story could be clicked', () => {
    render(
        <Router>
            <Start></Start>
        </Router>
    )

    const btnStory = screen.getByTestId("story");
    fireEvent.click(btnStory);

    expect(fireEvent.click(btnStory)).toMatchSnapshot();
})

test('if on submit for player name works', () => {
    render(
        <Router>
            <Start></Start>
        </Router>
    )

    const submit = screen.getByTestId('onsubmit');
    fireEvent.click(submit);

    expect(fireEvent.click(submit)).toMatchSnapshot();
})