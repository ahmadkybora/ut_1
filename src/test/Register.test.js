import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Register from '../components/register';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Form Submit', () => {
	it('Test form Submit', () => {
		const mockCallBack = jest.fn();

		const form = Enzyme.shallow((<Register handleSubmit={mockCallBack}/>));
        console.log(form);
		form.find('input').simulate('change', {target: {value: 'James'}});
		form.simulate('submit');
		expect(mockCallBack.mock.calls.length).toEqual(1);
		expect(mockCallBack.mock.calls).toEqual([[{name: 'James'}]]);
	});
});