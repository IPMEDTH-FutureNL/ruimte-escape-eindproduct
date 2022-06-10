import renderer from 'react-test-renderer';
import Outro from "../verhaal/Outro";
import {BrowserRouter as Router} from 'react-router-dom';

it('Test if Outro component is rendered', () => {
    const component = renderer.create(
        <Router>
            <Outro></Outro>,
        </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})