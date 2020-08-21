import React from 'react';
import ProfileInputs from '../ProfileInputs';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer'
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

    it('checks the ')
})