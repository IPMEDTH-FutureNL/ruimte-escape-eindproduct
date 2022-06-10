import renderer from 'react-test-renderer';
import Popup from "../PopUp.js";

it('changes the pop-up text when needed', () => {
    const component = renderer.create(
        <Popup text="Test of input text wordt veranderd"></Popup>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})