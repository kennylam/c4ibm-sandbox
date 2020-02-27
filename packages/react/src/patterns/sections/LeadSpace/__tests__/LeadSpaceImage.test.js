import LeadSpaceImage from '../LeadSpaceImage';
import { mount } from 'enzyme';
import React from 'react';

describe('<LeadSpaceImage />', () => {
  it('renders expected number of source elements', () => {
    const image = [
      {
        minWidth: 0,
        url: 'https://dummyimage.com/320x370/ee5396/fff',
      },
      {
        minWidth: 672,
        url: 'https://dummyimage.com/672x400/ee5396/fff',
      },
      {
        minWidth: 1056,
        url: 'https://dummyimage.com/1056x480/ee5396/fff',
      },
    ];

    const imageInfo = {
      default: 'https://dummyimage.com/1056x480/ee5396/fff',
      alt: 'Image alt text',
    };

    const leadspaceImage = mount(
      <LeadSpaceImage
        images={image}
        defaultImage={imageInfo.default}
        alt={imageInfo.alt}
      />
    );
    expect(leadspaceImage.find('source')).toHaveLength(3);
  });
});
