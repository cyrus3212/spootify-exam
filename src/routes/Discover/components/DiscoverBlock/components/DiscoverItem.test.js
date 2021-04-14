import React from 'react';
import { shallow } from 'enzyme';
import DiscoverItem from './DiscoverItem';

describe('Discover Item', () => {
    let component;
    const name = 'test';

    const images = [
        {
            url: 'image.url.com'
        }
    ]

    beforeEach(() => {
        component = shallow(<DiscoverItem  key={name} images={images} name={name} />)
    });

    it('should render 3 DiscoverBlock components', () => { 
        const p = component.find('.discover-item__title');
        expect(p.text()).toEqual(name);
    })

    it('should render 3 DiscoverBlock components', () => { 
        const div = component.find('.discover-item__art');
        expect(div.prop('style')).toHaveProperty('backgroundImage', `url(${images[0].url})`);
    })
})