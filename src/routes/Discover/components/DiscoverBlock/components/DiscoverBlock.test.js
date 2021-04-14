import React from 'react';
import { shallow } from 'enzyme';
import DiscoverBlock from './DiscoverBlock';
import DiscoverItem from './DiscoverItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

describe('Discover Block', () => {
    let component;
    let data = [
        {
            item: 'test',
            id: 1,
            name: 'name',
            images: [
                {
                    url: 'image.url.com'
                }
            ]
        }
    ]
    
    const text = "test text";
    const id = "test id"

    beforeEach(() => {
        component = shallow(<DiscoverBlock  text={text} id={id} data={data} />)
    });

    it('should render wrapper with "discover-block" class', () => {
        const discoverBlockWrapper = component.find('.discover-block');
        expect(discoverBlockWrapper.length).toBe(1); 
    });

    it('should render h2 with text value from props', () => {
        const discoverBlockWrapper = component.find('.discover-block__header');
        expect(discoverBlockWrapper.containsMatchingElement(<h2>{text}</h2>)).toEqual(true)
    });

    it('should render 2 FontAwesomeIcon component icon', () => { 
        expect(component.find(FontAwesomeIcon)).toHaveLength(2);
    })

    it('should render 1 DiscoverItem component', () => { 
        expect(component.find(DiscoverItem)).toHaveLength(1);
    })

    it('should render 3 DiscoverItem components when data has 3 items', () => { 
        const newData = [
            {
                item: 'test',
                id: 1,
                name: 'name',
                images: []
            },
            {
                item: 'test2',
                id: 2,
                name: 'name2',
                images: []
            },
            {
                item: 'test3',
                id: 3,
                name: 'name3',
                images: []
            }
        ];

        component = shallow(<DiscoverBlock  text={text} id={id} data={newData} />)
        expect(component.find(DiscoverItem)).toHaveLength(3);
    })
})