import renderer from 'react-test-renderer';
import Punten from "../Punten.js";

it('Test if point are changed when necessary', () => {
    const component = renderer.create(
        <Punten punten="50"></Punten>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})