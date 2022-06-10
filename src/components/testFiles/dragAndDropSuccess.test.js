import renderer from 'react-test-renderer';
import DragAndDropSucces from "../verhaal/dragAndDropSucces";
import {BrowserRouter as Router} from 'react-router-dom';

it('Test if Drag and drop succes component is rendered', () => {
    const component = renderer.create(
        <Router>
            <DragAndDropSucces></DragAndDropSucces>,
        </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})