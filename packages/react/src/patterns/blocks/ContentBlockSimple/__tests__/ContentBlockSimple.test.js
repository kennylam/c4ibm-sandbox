import ContentBlockSimple from '../ContentBlockSimple';
import { mount } from 'enzyme';
import React from 'react';

describe('<ContentBlockSimple />', () => {
  it('renders pattern with 4 content-items', () => {
    const heading = 'Lorem ipsum dolor sit amet';

    const mediaData = {
      images: [
        {
          src: 'https://dummyimage.com/320x160/ee5396/fff&text=2x1',
          minWidth: 'sm',
        },
        {
          src: 'https://dummyimage.com/400x400/ee5396/fff&text=1x1',
          minWidth: 'md',
        },
        {
          src: 'https://dummyimage.com/672x672/ee5396/fff&text=1x1',
          minWidth: 'lg',
        },
      ],
      defaultImage: 'https://dummyimage.com/672x672/ee5396/fff&text=1x1',
      alt: 'Image alt text',
    };

    const mediaType = 'image';

    const items = [
      {
        heading: 'Lorem ipsum dolor sit amet.',
        copy:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.',
      },
      {
        heading: 'Lorem ipsum dolor sit amet.',
        copy:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.',
      },
      {
        heading: 'Lorem ipsum dolor sit amet.',
        copy:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.',
      },
      {
        heading: 'Lorem ipsum dolor sit amet.',
        copy:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.',
      },
    ];

    const cta = {
      title: 'Lorem ipsum dolor',
      href: 'https://www.example.com',
    };

    const contentblocksimple = mount(
      <ContentBlockSimple
        mediaType={mediaType}
        mediaData={mediaData}
        heading={heading}
        items={items}
        cta={cta}
      />
    );
    expect(
      contentblocksimple.find('[data-autoid="dds--content-block-simple"]')
    ).toHaveLength(1);
    expect(
      contentblocksimple.find(
        '[data-autoid="dds--content-block-simple__media"]'
      )
    ).toHaveLength(1);
    expect(
      contentblocksimple.find('[data-autoid="dds--content-item"]')
    ).toHaveLength(4);

    const contentblocksimple_noimage = mount(
      <ContentBlockSimple heading={heading} items={items} cta={cta} />
    );
    expect(
      contentblocksimple_noimage.find(
        '[data-autoid="dds--content-block-simple"]'
      )
    ).toHaveLength(1);
    expect(
      contentblocksimple_noimage.find(
        '[data-autoid="dds--content-block-simple__media"]'
      )
    ).toHaveLength(0);
    expect(
      contentblocksimple_noimage.find('[data-autoid="dds--content-item"]')
    ).toHaveLength(4);

    const contentblocksimple_wrongtype = mount(
      <ContentBlockSimple
        mediaType="wrong"
        mediaData={mediaData}
        heading={heading}
        items={items}
        cta={cta}
      />
    );
    expect(
      contentblocksimple_wrongtype.find(
        '[data-autoid="dds--content-block-simple"]'
      )
    ).toHaveLength(1);
    expect(
      contentblocksimple_wrongtype.find(
        '[data-autoid="dds--content-block-simple__media"]'
      )
    ).toHaveLength(0);
    expect(
      contentblocksimple_wrongtype.find('[data-autoid="dds--content-item"]')
    ).toHaveLength(4);
  });
});
