import React from 'react';
import ProfileInputs from '../ProfileInputs';
import { configure, shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { anime } from "react-anime";

// import '@testing-libarary/jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
// import { render, fireEvent, cleanup } from '@testing-library/react';

configure({ adapter: new Adapter() })

// afterEach(cleanup)

//testing a controlled component form.

describe('the profile input ', () => {
    const wrapper = shallow(<ProfileInputs />)

    it('snap shot the component', () => {
        const shot = renderer.create(<ProfileInputs />).toJSON()
        expect(shot).toMatchSnapshot()
    })

    it('checks the length of all the content in the profileInputs', () => {
        expect(wrapper.find('form')).toHaveLength(1)
        expect(wrapper.find('svg')).toHaveLength(1)
    })

    // it('expects wrapper to check the handleChange', () => {
    //     const onFocus = mount(<ProfileInputs />)
    //     console.log(onFocus.instance());

    //     //onFocus.instance().handleTextFocus = jest.fn()

    //     //const focus =  jest.fn();
        
    //     //onFocus.find('input').simulate('dob')

    //     //expect(focus).toHaveBeenCalled(1)
        
    //     })

        
        


    })
