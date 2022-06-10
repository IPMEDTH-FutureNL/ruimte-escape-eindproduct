import renderer from 'react-test-renderer';
import IntroPuzzle from "../dragAndDrop/IntroPuzzle";
import {BrowserRouter as Router} from 'react-router-dom';

it('Test if IntroPuzzle component is rendered', () => {
    const component = renderer.create(
        <Router>
            <IntroPuzzle></IntroPuzzle>,
        </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})