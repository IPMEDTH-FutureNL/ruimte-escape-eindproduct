import renderer from 'react-test-renderer';
import Oplosmatrix from "../oplosMatrix/Oplosmatrix";
import {BrowserRouter as Router} from 'react-router-dom';

it('Test if Overgang Puzzel component is rendered', () => {
    const component = renderer.create(
        <Router>
            <Oplosmatrix></Oplosmatrix>,
        </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})