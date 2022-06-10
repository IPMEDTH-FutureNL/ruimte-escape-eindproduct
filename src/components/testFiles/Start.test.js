import renderer from 'react-test-renderer';
import Start from "../verhaal/Start";
import {BrowserRouter as Router} from 'react-router-dom';

it('Test if start component is rendered', () => {
    const component = renderer.create(
        <Router>
            <Start></Start>,
        </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})