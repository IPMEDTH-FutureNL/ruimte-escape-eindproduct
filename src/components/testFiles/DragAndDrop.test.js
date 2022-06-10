import renderer from 'react-test-renderer';
import DragAndDrop from "../dragAndDrop/DragAndDrop";
import {BrowserRouter as Router} from 'react-router-dom';

it('Test if Drag and drop game component is rendered', () => {
    const component = renderer.create(
        <Router>
            <DragAndDrop></DragAndDrop>,
        </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})