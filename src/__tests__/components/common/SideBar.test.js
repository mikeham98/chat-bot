import React from 'react';
import {mount} from 'enzyme';
import SideBar from '../../../app/components/common/SideBar'

// This component would take a very long time to test therefore i have just done a simple snapshot

describe('SideBar', () => {
    let mountedWrapper;
    let props = {};
    const wrapper = () => {
        if (!mountedWrapper) {
            mountedWrapper = mount(<SideBar {...props}/>);
        }
        return mountedWrapper;
    };

    beforeEach(() => {
        props = {
            title: 'This is a side bar',
            children: <div>Children</div>
        };
        mountedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a title of This is a side bar and a div with the text Children inside', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
});