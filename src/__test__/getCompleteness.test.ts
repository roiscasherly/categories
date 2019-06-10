import getCompleteness from '../utils/getCompleteness';

describe('utils/getCompleteness', () => {
  describe('getCompleteness', () => {
    const place1 = {
      name: 'La Casa Banc',
      location: {
        lat: 40.71,
        lon: -74.01,
      },
      categories: [7096],
    };

    const place2 = {
      name: 'La Casa Vaca',
      location: {
        lat: 40.71,
        lon: -74.01,
      },
      categories: [7109],
      address: {},
      images: [
        { url: 'https://s3.amazonawas.com/image1.png' },
        { url: 'https://s3.amazonawas.com/image2.png' },
      ],
      attributes: {
        hours: { twentyFourSeven: true },
        phone: '555-555-4545',
        website: 'https://example.com',
        wheelchairAccessible: true,
      },
    };

    const place3 = {
      name: 'An Afghan Restaurant',
      location: {
        lat: 40.71,
        lon: -74.01,
      },
      categories: [3001],
      address: {},
      images: [{ url: 'https://s3.amazonawas.com/image1.png' }],
    };

    const place4 = {
      name: 'Some Weird Ski Slope',
      location: {
        lat: 40.71,
        lon: -74.01,
      },
      categories: [6101],
      address: {},
      images: [{ url: 'https://s3.amazonawas.com/image1.png' }],
    };

    const place5 = {
      name: 'An Art Studio',
      location: {
        lat: 40.71,
        lon: -74.01,
      },
      categories: [7108],
      address: {},
      images: [],
      attributes: {
        website: 'https://example.com',
      },
    };

    const place6 = {
      name: 'Emergency Room',
      location: {
        lat: 40.71,
        lon: -74.01,
      },
      categories: [7067],
      address: {},
      images: [
        { url: 'https://s3.amazonawas.com/image1.png' },
        { url: 'https://s3.amazonawas.com/image1.png' },
        { url: 'https://s3.amazonawas.com/image1.png' },
      ],
      attributes: {
        hours: { twentyFourSeven: true },
        phone: '555-555-8383',
        website: 'https://example.com',
        wheelchairAccessible: true,
      },
    };

    const place7 = {
      name: 'A Warehouse',
      location: {
        lat: 40.71,
        lon: -74.01,
      },
      categories: [7092],
      address: {},
      images: [
        { url: 'https://s3.amazonawas.com/image1.png' },
        { url: 'https://s3.amazonawas.com/image1.png' },
        { url: 'https://s3.amazonawas.com/image1.png' },
        { url: 'https://s3.amazonawas.com/image1.png' },
        { url: 'https://s3.amazonawas.com/image1.png' },
        { url: 'https://s3.amazonawas.com/image1.png' },
      ],
      attributes: {
        phone: '555-555-8383',
        wheelchairAccessible: true,
      },
    };

    const place8 = {
      name: 'New Place',
      location: {
        lat: 40.71,
        lon: -74.01,
      },
      categories: [7092],
      address: {},
      images: [{ url: 'https://s3.amazonawas.com/image1.png' }],
      attributes: {
        phone: '555-555-8383',
        wheelchairAccessible: true,
      },
    };

    // NOTE: This is a Place that we've seen during QA that *could* end up
    // above 100% complete. This seems like it may be an issue with the
    // Place Improve form offering incorrect attribute fields that we need
    // to fix, but we can also guard against this for getCompleteness by
    // making sure we never return over 100. That's what this Place demos
    const place9 = {
      name: 'Burger King',
      location: {
        lon: -74.01252173248112,
        lat: 40.70492329281875,
      },
      status: 'pending',
      ineligible: false,
      address: {
        label: '16 Beaver St, Manhattan, New York, NY, USA',
      },
      created_at: 1549902592735,
      updated_at: 1549910981525,
      cover_image_id: 0,
      contributor_id: '3124232f31ai8',
      images: [
        { url: 'https://s3.amazonawas.com/image1.png' },
        { url: 'https://s3.amazonawas.com/image2.png' },
        { url: 'https://s3.amazonawas.com/image3.png' },
      ],
      attributes: {
        hours: {
          friday: {
            open: true,
            hours: [],
          },
          notApplicable: false,
          twentyFourSeven: false,
        },
        phone: '555-3939-1234',
        website: 'https://streetcred.co',
        wheelchairAccessible: true,
        outdoorSeating: false,
      },
      categories: [7112],
      validate_after: 1549906192735,
    };

    // When Place come from the tileserver, they have a different shape than
    // when they come from the primary DB so we have to do a bunch of
    // reshaping that sometimes leaves the place object in a bizarro state.
    const bizarroPlace = {
      name: 'Bizarro Place',
      location: {
        lat: 40.71,
        lon: -74.01,
      },
      categories: [7153],
      address: {},
      images: [],
      attributes: {
        phone: '',
        website: '',
      },
      building_name: 'Jims House of Horrors',
      category_icon: 'religion',
      category_id: 7153,
      contributor_id: '12345',
      cover_image_id: 0,
      created_at: 1545330832,
      floor: '1',
      hours: '[]',
      id: 'qsaefe3',
      outdoorSeating: false,
      phone: '',
      status: 'pending',
      updated_at: 154330768,
      website: '',
      wheelchairAccessible: false,
    };

    it('should be a function', () => {
      expect(typeof getCompleteness).toBe('function');
    });

    it('should return the expected completeness', () => {
      expect(getCompleteness(place1)).toBe(48);
      expect(getCompleteness(place2)).toBe(95);
      expect(getCompleteness(place3)).toBe(50);
      expect(getCompleteness(place4)).toBe(90);
      expect(getCompleteness(place5)).toBe(57);
      expect(getCompleteness(place6)).toBe(100);
      expect(getCompleteness(place7)).toBe(91);
      expect(getCompleteness(place8)).toBe(81);
      expect(getCompleteness(place9)).toBe(100);
      expect(getCompleteness(bizarroPlace)).toBe(63);
    });
  });
});
