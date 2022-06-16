import { render , screen, fireEvent } from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom';
import Punten from '../components/Punten';

test('on initial render of punten component, check if component is loaded with the correct prop value', () => {
    const { asFragment }  = render(
        <Router>
            <Punten punten="150"></Punten>
        </Router>
    )

    screen.debug();
    expect(asFragment()).toMatchSnapshot();
})
