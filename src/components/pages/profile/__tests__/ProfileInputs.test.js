import React from 'react';
import ProfileInputs from '../ProfileInputs';
import { render,  unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import renderer from 'react-test-renderer';
import { anime } from "react-anime";


let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});


afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


describe('the profile input ', () => {
    const wrapper = <ProfileInputs />

    it('snap shot the component', () => {
        const shot = renderer.create(<ProfileInputs />).toJSON()
        expect(shot).toMatchSnapshot()
    })

    it('checks the length of all the content in the profileInputs', () => {
        expect(wrapper.find('form')).toHaveLength(1)
        expect(wrapper.find('svg')).toHaveLength(1)
    })



})

