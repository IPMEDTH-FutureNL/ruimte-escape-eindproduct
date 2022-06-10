import renderer from 'react-test-renderer';
import Hint from "../Hint";

it('Check if hint is rendered with the right type', () => {
    const component = renderer.create(
        <Hint type='dragAndDropHints'/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})