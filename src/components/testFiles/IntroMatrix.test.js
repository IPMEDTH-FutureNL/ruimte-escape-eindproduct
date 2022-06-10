import renderer from 'react-test-renderer';
import IntroMatrix from "../oplosMatrix/IntroMatrix";
import {BrowserRouter as Router} from 'react-router-dom';

it('Test if Overgang Puzzel component is rendered', () => {
    const component = renderer.create(
        <Router>
            <IntroMatrix></IntroMatrix>,
        </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})