import React from 'react';
import { render } from "@testing-library/react";
import Discover from './Discover';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';

const mockStore = configureMockStore([thunk]);

describe('Discover', () => {
    let component;
    const store = mockStore({
        newReleases: { data: [] },
        playlists: { data: []},
        categories: { data: [] },
    });

    beforeEach(() => {
        component = mount(
            <Provider store={store}>
              <Discover />
            </Provider>
        )

        // console.log(component.debug())
    });

    it('should render wrapper with "discover" class', () => {
        const discover = component.find('.discover');
        expect(discover.length).toBe(1); 
    });

    it('should render 3 DiscoverBlock components inside', () => { 
        expect(component.find(DiscoverBlock)).toHaveLength(3);
    })
})