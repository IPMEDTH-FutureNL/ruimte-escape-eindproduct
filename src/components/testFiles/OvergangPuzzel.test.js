import renderer from 'react-test-renderer';
import OvergangPuzzel from "../dragAndDrop/OvergangPuzzel";
import {BrowserRouter as Router} from 'react-router-dom';

it('Test if Overgang Puzzel component is rendered', () => {
    const component = renderer.create(
        <Router>
            <OvergangPuzzel></OvergangPuzzel>,
        </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})