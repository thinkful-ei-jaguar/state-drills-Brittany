import React from 'react';
import renderer from 'react-test-renderer';

import Accordian from './Accordian';

const sections = [
    {
        title: 'Section 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        title: 'Section 2',
        content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
        title: 'Section 3',
        content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
]


describe('<Accordian />', () => {
    it('renders this UI as expected', () => {
        const tree = renderer.create(<Accordian />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders this UI as expected', () => {
        const tree = renderer.create(<Accordian sections={sections} />).toJSON();
        expect(tree).toMatchSnapshot();
    });


})