import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Login from '../components/login';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe("Login Component", () => {
    let container = shallow(<Login />);

    it("component log", () => {
        //console.log(wrapper.debug());
    });
    
    it("quantity input test", () => {
        expect(container.find('input[name="username"]').length).toEqual(1);
        expect(container.find('input[name="password"]').length).toEqual(1);
    });

    it("type input test", () => {
        // let username = container.find('input[name="username"]');
        // username.type().toEqual("text");
        expect(container.find('input[name="username"]').type()).toEqual();
        // expect(container.find('input[name="username"]').type()).toEqual('input');
        // expect(container.find('input[name="password"]').type()).toEqual('password');
        // expect(container.find('input[name="button"]').type()).toEqual('button');
    });

    it("data input test", () => {
        const payload = {
            username: 'ahmad',
            password: '12345678'
        }

        let username = container.find('input[name="username"]');
        let password = container.find('input[name="password"]');

        username.value = payload.username;
        password.value = payload.password;

        expect(username.value).toContain('ahmad');
        expect(password.value).toContain('12345678');
    });

    it("test login func", () => {
        // const onLogin = jest.fn();
        // const wrapper1 = mount(
        //     <Login onLogin={onLogin}/>
        // );
        // const wrapper2 = shallow(
        //     <Login b={onLogin}/>
        // );

        // // const instance = wrapper.instance();
        // console.log(wrapper2.value);
        // let fn = jest.fn();
        // let wrapper = shallow(<Login onSubmit={fn} />);
        // wrapper.find('form[name="login"]').simulate('submit');
        // expect(fn).toHaveBeenCalled();
        // wrapper.onLogin = jest.fn();
        // const v = wrapper.onLogin();
        // console.log(v.debug());
        //expect(v).toBe('1');
    });
})