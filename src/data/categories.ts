import { I18n } from '@lingui/core';

export default (i18n: I18n) => [
  {
    id: 1000,
    name: i18n._('Arts & Entertainment'),
    icon: 'theatre',
    categories: [
      {
        id: 1001,
        name: i18n._('Amusements'),
        icon: 'theme_park',
        categories: [
          {
            id: 1009,
            name: i18n._('Arcade'),
            icon: 'gaming',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1010,
            name: i18n._('Carousel'),
            icon: 'carousel',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1011,
            name: i18n._('Casino'),
            icon: 'gambling',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1012,
            name: i18n._('Chess'),
            icon: 'gaming',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1013,
            name: i18n._('Dance Hall'),
            icon: 'theme_park',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1014,
            name: i18n._('Go Karts'),
            icon: 'theme_park',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1015,
            name: i18n._('Pool Hall'),
            icon: 'gaming',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1016,
            name: i18n._('Roller Coaster'),
            icon: 'roller_coaster',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1017,
            name: i18n._('Theme Park'),
            icon: 'theme_park',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1019,
            name: i18n._('Water Park'),
            icon: 'water_park',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 1002,
        name: i18n._('Fine Arts'),
        icon: 'gallery',
        categories: [
          {
            id: 1020,
            name: i18n._('Art Gallery'),
            icon: 'gallery',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1021,
            name: i18n._('Public Art'),
            icon: 'artwork',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 1003,
        name: i18n._('Historic'),
        icon: 'museum',
        categories: [
          {
            id: 1022,
            name: i18n._('Archaeological Site'),
            icon: 'ruin',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 2013,
            name: i18n._('Historic Building'),
            icon: 'historical',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1023,
            name: i18n._('Historic Site'),
            icon: 'ruin',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1024,
            name: i18n._('Ruins'),
            icon: 'ruin',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 1004,
        name: i18n._('Movies'),
        icon: 'cinema',
        categories: [
          {
            id: 1025,
            name: i18n._('Drive-in Theater'),
            icon: 'cinema',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1026,
            name: i18n._('Movie Rental'),
            icon: 'cinema',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1060,
            name: i18n._('Movie Theater'),
            icon: 'cinema',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 1005,
        name: i18n._('Museum'),
        icon: 'museum',
        categories: [
          {
            id: 1028,
            name: i18n._('Art Museum'),
            icon: 'museum',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1029,
            name: i18n._('Erotic Museum'),
            icon: 'museum',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1030,
            name: i18n._('History Museum'),
            icon: 'museum',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1031,
            name: i18n._('Planetarium'),
            icon: 'telescope',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1032,
            name: i18n._('Science Museum'),
            icon: 'museum',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 1006,
        name: i18n._('Music'),
        icon: 'music',
        categories: [
          {
            id: 1033,
            name: i18n._('Amphitheater'),
            icon: 'music',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1034,
            name: i18n._('Bandstand'),
            icon: 'music',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1035,
            name: i18n._('Concert Hall'),
            icon: 'music',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1036,
            name: i18n._('Jazz & Blues'),
            icon: 'music',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1037,
            name: i18n._('Opera'),
            icon: 'music',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1038,
            name: i18n._('Piano Bar'),
            icon: 'music',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1039,
            name: i18n._('Rock Club'),
            icon: 'music',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1040,
            name: i18n._('Symphony'),
            icon: 'music',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 1007,
        name: i18n._('Performing Arts'),
        icon: 'theatre',
        categories: [
          {
            id: 1041,
            name: i18n._('Arts Center'),
            icon: 'art',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1042,
            name: i18n._('Auditorium'),
            icon: 'theatre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1043,
            name: i18n._('Circus'),
            icon: 'zoo',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1044,
            name: i18n._('Comedy Club'),
            icon: 'theatre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1045,
            name: i18n._('Dance'),
            icon: 'theatre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1046,
            name: i18n._('Festival'),
            icon: 'theatre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1047,
            name: i18n._('Performing Arts'),
            icon: 'theatre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1048,
            name: i18n._('Theater'),
            icon: 'theatre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 1008,
        name: i18n._('Sports'),
        icon: 'sports',
        categories: [
          {
            id: 1049,
            name: i18n._('Auto Racetrack'),
            icon: 'stadium',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1050,
            name: i18n._('Baseball Stadium'),
            icon: 'stadium',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1051,
            name: i18n._('Basketball Stadium'),
            icon: 'stadium',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1052,
            name: i18n._('Bull Ring'),
            icon: 'stadium',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1053,
            name: i18n._('Dog Racetrack'),
            icon: 'stadium',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1054,
            name: i18n._('Football Stadium'),
            icon: 'stadium',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1055,
            name: i18n._('Hockey Arena'),
            icon: 'stadium',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1056,
            name: i18n._('Horse Racetrack'),
            icon: 'stadium',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1057,
            name: i18n._('Indoor Arena'),
            icon: 'stadium',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1058,
            name: i18n._('Soccer Stadium'),
            icon: 'stadium',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 1059,
            name: i18n._('Tennis Stadium'),
            icon: 'stadium',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2000,
    name: i18n._('Civic'),
    icon: 'government',
    categories: [
      {
        id: 2001,
        name: i18n._('Capitol Building'),
        icon: 'government',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2002,
        name: i18n._('City Hall'),
        icon: 'government',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2003,
        name: i18n._('Civic Center'),
        icon: 'outreach',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2004,
        name: i18n._('Community Center'),
        icon: 'outreach',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2005,
        name: i18n._('Consulate / Embassy'),
        icon: 'government',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2006,
        name: i18n._('Court House'),
        icon: 'courthouse',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2007,
        name: i18n._('Cultural Center'),
        icon: 'community_centre',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2008,
        name: i18n._('Customs House'),
        icon: 'government',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2009,
        name: i18n._('Department of Motor Vehicles'),
        icon: 'government',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2010,
        name: i18n._('Fire Station'),
        icon: 'fire_station',
      },
      {
        id: 2011,
        name: i18n._('Government Building'),
        icon: 'government',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2014,
        name: i18n._('Library'),
        icon: 'library',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2015,
        name: i18n._('Military Base'),
        icon: 'military',
      },
      {
        id: 2016,
        name: i18n._('Palace'),
        icon: 'government',
        attributes: [
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2017,
        name: i18n._('Police Station'),
        icon: 'police',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2020,
        name: i18n._('Post Office'),
        icon: 'post_office',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2021,
        name: i18n._('Prison'),
        icon: 'prison',
      },
      {
        id: 2022,
        name: i18n._('Public Building'),
        icon: 'government',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2023,
        name: i18n._('Ranger Station'),
        icon: 'ranger_station',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2025,
        name: i18n._('State Office Building'),
        icon: 'government',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 2026,
        name: i18n._('Town Hall'),
        icon: 'town_hall',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
    ],
  },
  {
    id: 3000,
    name: i18n._('Dining'),
    icon: 'restaurant',
    categories: [
      {
        id: 3173,
        name: i18n._('Acehnese'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3001,
        name: i18n._('Afghan'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3002,
        name: i18n._('African'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3174,
        name: i18n._('Anhui'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3003,
        name: i18n._('Arepa'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3004,
        name: i18n._('Argentinian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3005,
        name: i18n._('Asian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3006,
        name: i18n._('Australian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3007,
        name: i18n._('Austrian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3008,
        name: i18n._('Bagels'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3009,
        name: i18n._('Bakery'),
        icon: 'bakery',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3150,
        name: i18n._('Balinese'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3010,
        name: i18n._('BBQ'),
        icon: 'bbq',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3011,
        name: i18n._('Belarusian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3012,
        name: i18n._('Belgian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3151,
        name: i18n._('Beijing'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3152,
        name: i18n._('Betawinese'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3013,
        name: i18n._('Bistro'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3014,
        name: i18n._('Bodega'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3015,
        name: i18n._('Bosnian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3016,
        name: i18n._('Brazilian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3017,
        name: i18n._('Breakfast'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3018,
        name: i18n._('Brewpub'),
        icon: 'biergarten',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3019,
        name: i18n._('British'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3020,
        name: i18n._('Bubble Tea'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3021,
        name: i18n._('Buffet'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3022,
        name: i18n._('Bulgarian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3023,
        name: i18n._('Burgers'),
        icon: 'fast_food',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3024,
        name: i18n._('Burmese'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3025,
        name: i18n._('Burritos'),
        icon: 'taqueria',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3026,
        name: i18n._('Cafe'),
        icon: 'cafe',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3027,
        name: i18n._('Cafeteria'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3028,
        name: i18n._('Cajun & Creole'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3029,
        name: i18n._('Cambodian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3030,
        name: i18n._('Cantonese'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3031,
        name: i18n._('Caribbean'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3153,
        name: i18n._('Cha Chaan Teng'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3032,
        name: i18n._('Chinese'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3154,
        name: i18n._('Chinese Breakfast'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3033,
        name: i18n._('Coffee Shop'),
        icon: 'cafe',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3034,
        name: i18n._('Colombian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3035,
        name: i18n._('Creperie'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3036,
        name: i18n._('Cuban'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3037,
        name: i18n._('Cupcake Shop'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3038,
        name: i18n._('Czech'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3039,
        name: i18n._('Deli'),
        icon: 'deli',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3040,
        name: i18n._('Dessert Shop'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3041,
        name: i18n._('Dim Sum'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3042,
        name: i18n._('Diner'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3148,
        name: i18n._('Dinner Theater'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3155,
        name: i18n._('Dongbei'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3043,
        name: i18n._('Donut Shop'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3044,
        name: i18n._('Dosa'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3045,
        name: i18n._('Dumpling'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3046,
        name: i18n._('Dutch'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3047,
        name: i18n._('Eastern European'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3048,
        name: i18n._('Empanada'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3049,
        name: i18n._('Ethiopian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3050,
        name: i18n._('Falafel'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3051,
        name: i18n._('Fast Food'),
        icon: 'fast_food',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3052,
        name: i18n._('Filipino'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3053,
        name: i18n._('Fish & Chips'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3054,
        name: i18n._('Fondue'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3055,
        name: i18n._('Food Court'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3056,
        name: i18n._('French'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3057,
        name: i18n._('Fried Chicken'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3058,
        name: i18n._('Friterie'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3059,
        name: i18n._('Frozen Yogurt'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3156,
        name: i18n._('Fujian'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3060,
        name: i18n._('Gastropub'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3061,
        name: i18n._('German'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3062,
        name: i18n._('Gluten-free'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3063,
        name: i18n._('Greek'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3064,
        name: i18n._('Halal'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3065,
        name: i18n._('Hawaiian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3149,
        name: i18n._('Health Food'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3157,
        name: i18n._('Himalayan'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3066,
        name: i18n._('Hong Kong'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3067,
        name: i18n._('Hot Dog'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3068,
        name: i18n._('Hot Pot'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3158,
        name: i18n._('Huaiyang'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3159,
        name: i18n._('Hunan'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3069,
        name: i18n._('Hungarian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3070,
        name: i18n._('Ice Cream'),
        icon: 'ice_cream',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3071,
        name: i18n._('Indian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3072,
        name: i18n._('Indian Sweets'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3073,
        name: i18n._('Indonesian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3160,
        name: i18n._('Indonesian Meatballs'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3074,
        name: i18n._('Irish'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3075,
        name: i18n._('Israeli'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3076,
        name: i18n._('Italian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3077,
        name: i18n._('Japanese'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3161,
        name: i18n._('Javanese'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3078,
        name: i18n._('Jewish'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3162,
        name: i18n._('Jiangsu'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3079,
        name: i18n._('Juice Bar'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3080,
        name: i18n._('Kebab'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3081,
        name: i18n._('Korean'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3082,
        name: i18n._('Korean Barbecue'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3083,
        name: i18n._('Latin American'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3084,
        name: i18n._('Lebanese'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3085,
        name: i18n._('Mac & Cheese'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3163,
        name: i18n._('Macanese'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3086,
        name: i18n._('Malaysian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3164,
        name: i18n._('Mamak'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3165,
        name: i18n._('Manadonese'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3087,
        name: i18n._('Mediterranean'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3088,
        name: i18n._('Mexican'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3089,
        name: i18n._('Middle Eastern'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3090,
        name: i18n._('Modern European'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3091,
        name: i18n._('Molecular Gastronomy'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3092,
        name: i18n._('Mongolian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3093,
        name: i18n._('Moroccan'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3094,
        name: i18n._('New American'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3095,
        name: i18n._('Noodles'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3166,
        name: i18n._('Padangnese'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3096,
        name: i18n._('Pakistani'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3097,
        name: i18n._('Pancake House'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3098,
        name: i18n._('Pastry Shop'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3099,
        name: i18n._('Peking Duck'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3100,
        name: i18n._('Persian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3101,
        name: i18n._('Peruvian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3102,
        name: i18n._('Pie Shop'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3103,
        name: i18n._('Pizza'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3104,
        name: i18n._('Polish'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3105,
        name: i18n._('Portuguese'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3106,
        name: i18n._('Poutine'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3107,
        name: i18n._('Ramen'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3108,
        name: i18n._('Romanian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3109,
        name: i18n._('Russian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3110,
        name: i18n._('Salad Bar'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3111,
        name: i18n._('Salvadoran'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3112,
        name: i18n._('Sandwich Shop'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3113,
        name: i18n._('Satay'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3114,
        name: i18n._('Scandinavian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3115,
        name: i18n._('Scottish'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3116,
        name: i18n._('Seafood'),
        icon: 'seafood',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3117,
        name: i18n._('Shabu-Shabu'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3167,
        name: i18n._('Shandong'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3168,
        name: i18n._('Shanghai'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3118,
        name: i18n._('Slovak'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3119,
        name: i18n._('Smoothies'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3120,
        name: i18n._('Snack'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3169,
        name: i18n._('Som Tum'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3121,
        name: i18n._('Soup'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3122,
        name: i18n._('South American'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3123,
        name: i18n._('Southern / Soul Food'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3124,
        name: i18n._('Spanish'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3125,
        name: i18n._('Sri Lankan'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3126,
        name: i18n._('Steak House'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3170,
        name: i18n._('Sundanese'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3127,
        name: i18n._('Sushi'),
        icon: 'sushi',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3128,
        name: i18n._('Swiss'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3129,
        name: i18n._('Szechuan'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3130,
        name: i18n._('Tacos'),
        icon: 'taqueria',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3131,
        name: i18n._('Taiwanese'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3132,
        name: i18n._('Tapas'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3133,
        name: i18n._('Tatar'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3134,
        name: i18n._('Tea House'),
        icon: 'teahouse',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3135,
        name: i18n._('Tex-Mex'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3136,
        name: i18n._('Thai'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3137,
        name: i18n._('Theme'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3138,
        name: i18n._('Tibetan'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3139,
        name: i18n._('Truck Stop'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3140,
        name: i18n._('Turkish'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3141,
        name: i18n._('Ukrainian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3142,
        name: i18n._('Vegan'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3143,
        name: i18n._('Vegetarian'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3144,
        name: i18n._('Venezuelan'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3145,
        name: i18n._('Vietnamese'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3146,
        name: i18n._('Wings'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3147,
        name: i18n._('Yakitori'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: true,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 3171,
        name: i18n._('Yunnan'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
      {
        id: 3172,
        name: i18n._('Zhejiang'),
        icon: 'restaurant',
        attributes: [
          { name: 'Hours', type: 'object', required: true },
          { name: 'Phone', type: 'string', required: true },
          { name: 'Website', type: 'string', required: false },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          { name: 'Outdoor Seating', type: 'boolean', required: true },
        ],
      },
    ],
  },
  {
    id: 4000,
    name: i18n._('Education'),
    icon: 'school',
    categories: [
      {
        id: 4001,
        name: i18n._('Adult Education Center'),
        icon: 'school',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4038,
        name: i18n._('Beauty School'),
        icon: 'school',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4036,
        name: i18n._('College'),
        icon: 'college',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
        ],
      },
      {
        id: 4002,
        name: i18n._('College Academic Building'),
        icon: 'college',
        attributes: [
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4003,
        name: i18n._('College Administrative Building'),
        icon: 'college',
        attributes: [
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4004,
        name: i18n._('College Bookstore'),
        icon: 'books',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4005,
        name: i18n._('College Cafeteria'),
        icon: 'restaurant',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4007,
        name: i18n._('College Gym'),
        icon: 'fitness',
        attributes: [
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4008,
        name: i18n._('College Library'),
        icon: 'library',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4009,
        name: i18n._('College Quad'),
        icon: 'university',
      },
      {
        id: 4010,
        name: i18n._('College Rec Center'),
        icon: 'college',
        attributes: [
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4011,
        name: i18n._('College Theater'),
        icon: 'theatre',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4012,
        name: i18n._('Community College'),
        icon: 'college',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
        ],
      },
      {
        id: 4013,
        name: i18n._('Cooking School'),
        icon: 'school',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4014,
        name: i18n._('Dance Studio'),
        icon: 'school',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4015,
        name: i18n._('Driving School'),
        icon: 'car',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4016,
        name: i18n._('Elementary School'),
        icon: 'school',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4017,
        name: i18n._('Flight School'),
        icon: 'airport',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4037,
        name: i18n._('Graduate School'),
        icon: 'college',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
        ],
      },
      {
        id: 4019,
        name: i18n._('High School'),
        icon: 'school',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4020,
        name: i18n._('Kindergarten'),
        icon: 'childcare',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4021,
        name: i18n._('Language School'),
        icon: 'school',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4022,
        name: i18n._('Law School'),
        icon: 'courthouse',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
        ],
      },
      {
        id: 4023,
        name: i18n._('Medical School'),
        icon: 'college',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
        ],
      },
      {
        id: 4024,
        name: i18n._('Middle School'),
        icon: 'school',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4025,
        name: i18n._('Music School'),
        icon: 'music',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4026,
        name: i18n._('Nursery School'),
        icon: 'childcare',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4027,
        name: i18n._('Preschool'),
        icon: 'childcare',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4028,
        name: i18n._('Private School'),
        icon: 'school',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4029,
        name: i18n._('Religious School'),
        icon: 'religion',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4030,
        name: i18n._('School'),
        icon: 'school',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4032,
        name: i18n._('Student Center'),
        icon: 'school',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4033,
        name: i18n._('Swim School'),
        icon: 'swimming_pool',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: false,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 4034,
        name: i18n._('University'),
        icon: 'college',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
        ],
      },
      {
        id: 4035,
        name: i18n._('Vocational School'),
        icon: 'school',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
    ],
  },
  {
    id: 5000,
    name: i18n._('Nightlife'),
    icon: 'bar',
    categories: [
      {
        id: 5001,
        name: i18n._('Bar'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5002,
        name: i18n._('Beach Bar'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5003,
        name: i18n._('Beer Bar'),
        icon: 'biergarten',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5004,
        name: i18n._('Beer Garden'),
        icon: 'biergarten',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5005,
        name: i18n._('Brewery'),
        icon: 'biergarten',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5006,
        name: i18n._('Champagne Bar'),
        icon: 'wine',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5007,
        name: i18n._('Cocktail Bar'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5008,
        name: i18n._('Distillery'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5009,
        name: i18n._('Dive Bar'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5010,
        name: i18n._('Gay Bar'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5011,
        name: i18n._('Hookah Bar'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5012,
        name: i18n._('Hotel Bar'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5013,
        name: i18n._('Karaoke'),
        icon: 'karaoke',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5014,
        name: i18n._('Lounge'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5015,
        name: i18n._('Nightclub'),
        icon: 'nightclub',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5016,
        name: i18n._('Oxygen Bar'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5017,
        name: i18n._('Pub'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5018,
        name: i18n._('Sake Bar'),
        icon: 'wine',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5019,
        name: i18n._('Speakeasy'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5020,
        name: i18n._('Sports Bar'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5021,
        name: i18n._('Strip Club'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5022,
        name: i18n._('Tiki Bar'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5023,
        name: i18n._('Whisky Bar'),
        icon: 'bar',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5024,
        name: i18n._('Wine Bar'),
        icon: 'wine',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
      {
        id: 5025,
        name: i18n._('Winery'),
        icon: 'winery',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
          {
            name: 'Outdoor Seating',
            type: 'boolean',
            required: false,
          },
        ],
      },
    ],
  },
  {
    id: 6000,
    name: i18n._('Outdoors & Recreation'),
    icon: 'rural',
    categories: [
      {
        id: 6001,
        name: i18n._('Animals'),
        icon: 'zoo',
        categories: [
          {
            id: 6008,
            name: i18n._('Aquarium'),
            icon: 'aquarium',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6009,
            name: i18n._('Aviary'),
            icon: 'aviary',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6010,
            name: i18n._('Petting Zoo'),
            icon: 'zoo',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6011,
            name: i18n._('Stables'),
            icon: 'horse_riding',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6012,
            name: i18n._('Zoo'),
            icon: 'zoo',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 6002,
        name: i18n._('Farming'),
        icon: 'farm',
        categories: [
          {
            id: 6013,
            name: i18n._('Aquatic Farm'),
            icon: 'seafood',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6014,
            name: i18n._('Dairy Farm'),
            icon: 'farm',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6015,
            name: i18n._('Farm'),
            icon: 'farm',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6016,
            name: i18n._('Livestock Farm'),
            icon: 'farm',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6017,
            name: i18n._('Orchard'),
            icon: 'orchard',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6018,
            name: i18n._('Plant Nursery'),
            icon: 'garden_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6019,
            name: i18n._('Poultry Farm'),
            icon: 'farm',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6020,
            name: i18n._('Vineyard'),
            icon: 'vineyard',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 6003,
        name: i18n._('Landmark'),
        icon: 'lighthouse',
        categories: [
          {
            id: 6021,
            name: i18n._('Bridge'),
            icon: 'bridge',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6022,
            name: i18n._('Canyon'),
            icon: 'rural',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6023,
            name: i18n._('Castle'),
            icon: 'historical',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6024,
            name: i18n._('Cave'),
            icon: 'cave',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6025,
            name: i18n._('Cemetery'),
            icon: 'cemetery',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6026,
            name: i18n._('City Walls'),
            icon: 'rural',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6027,
            name: i18n._('Cliff'),
            icon: 'cliff',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6028,
            name: i18n._('Dam'),
            icon: 'dam',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6029,
            name: i18n._('Dike'),
            icon: 'rural',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6030,
            name: i18n._('Dunes'),
            icon: 'dune',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6031,
            name: i18n._('Firepit'),
            icon: 'firepit',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6032,
            name: i18n._('Fortress'),
            icon: 'historical',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6033,
            name: i18n._('Fountain'),
            icon: 'fountain',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6034,
            name: i18n._('Gate'),
            icon: 'gate',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6035,
            name: i18n._('Glacier'),
            icon: 'glacier',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6036,
            name: i18n._('Hot Spring'),
            icon: 'spring',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6037,
            name: i18n._('Jetty'),
            icon: 'rural',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6038,
            name: i18n._('Lagoon'),
            icon: 'water',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6039,
            name: i18n._('Lake'),
            icon: 'water',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6040,
            name: i18n._('Lighthouse'),
            icon: 'lighthouse',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6041,
            name: i18n._('Memorial'),
            icon: 'historical',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6042,
            name: i18n._('Monument'),
            icon: 'museum',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6043,
            name: i18n._('Mountain'),
            icon: 'peak',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6044,
            name: i18n._('Pagoda'),
            icon: 'shintoist',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6045,
            name: i18n._('Plaza'),
            icon: 'common',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6046,
            name: i18n._('Quarry'),
            icon: 'stone',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6047,
            name: i18n._('Rapids'),
            icon: 'rapid',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6048,
            name: i18n._('Reservoir'),
            icon: 'rural',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6049,
            name: i18n._('Scenic View'),
            icon: 'viewpoint',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6050,
            name: i18n._('Square'),
            icon: 'common',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6051,
            name: i18n._('Telescope'),
            icon: 'telescope',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6052,
            name: i18n._('Tour Provider'),
            icon: 'rural',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6053,
            name: i18n._('Tourist Attraction'),
            icon: 'landmark',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6054,
            name: i18n._('Tourist Information'),
            icon: 'rural',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6055,
            name: i18n._('Tower'),
            icon: 'castle',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6056,
            name: i18n._('Tunnel'),
            icon: 'rural',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6057,
            name: i18n._('UNESCO World Heritage Site'),
            icon: 'rural',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6058,
            name: i18n._('Volcano'),
            icon: 'volcano',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6059,
            name: i18n._('Water Tower'),
            icon: 'castle',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6060,
            name: i18n._('Waterfall'),
            icon: 'waterfall',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6061,
            name: i18n._('Well'),
            icon: 'rural',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6062,
            name: i18n._('Wharf'),
            icon: 'pier',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 6004,
        name: i18n._('Parks'),
        icon: 'park',
        categories: [
          {
            id: 6063,
            name: i18n._('Battlefield'),
            icon: 'battlefield',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6064,
            name: i18n._('Botanical Garden'),
            icon: 'garden',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6065,
            name: i18n._('City Park'),
            icon: 'park',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6066,
            name: i18n._('Dog Park'),
            icon: 'dog_park',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6067,
            name: i18n._('Forest'),
            icon: 'forest',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6068,
            name: i18n._('National Park'),
            icon: 'park',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6069,
            name: i18n._('Nature Preserve'),
            icon: 'park',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6070,
            name: i18n._('Town Common'),
            icon: 'common',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 6005,
        name: i18n._('Recreation'),
        icon: 'sports',
        categories: [
          {
            id: 6071,
            name: i18n._('Barbecue'),
            icon: 'bbq',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6072,
            name: i18n._('Bathing Area'),
            icon: 'shower',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6073,
            name: i18n._('Beach'),
            icon: 'beach',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6074,
            name: i18n._('Bike Trail'),
            icon: 'bicycle',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6075,
            name: i18n._('Boat Charter'),
            icon: 'marina',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6076,
            name: i18n._('Boat Ramp'),
            icon: 'marina',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6077,
            name: i18n._('Boat Rental'),
            icon: 'marina',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6078,
            name: i18n._('Campground'),
            icon: 'camp_site',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6079,
            name: i18n._('Disc Golf'),
            icon: 'sports',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6080,
            name: i18n._('Dive Center'),
            icon: 'swimming_pool',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6081,
            name: i18n._('Fishing'),
            icon: 'fishing',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6082,
            name: i18n._('Garden'),
            icon: 'garden',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6083,
            name: i18n._('Gun Range'),
            icon: 'hunting',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6084,
            name: i18n._('Laser Tag'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6085,
            name: i18n._('Marina'),
            icon: 'marina',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6086,
            name: i18n._('Maze'),
            icon: 'maze',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6087,
            name: i18n._('Miniature Golf'),
            icon: 'golf',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6088,
            name: i18n._('Nude Beach'),
            icon: 'beach',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6089,
            name: i18n._('Picnic Area'),
            icon: 'picnic_site',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6090,
            name: i18n._('Playground'),
            icon: 'sports',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6091,
            name: i18n._('Rafting'),
            icon: 'sports',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6092,
            name: i18n._('Recreational Facility'),
            icon: 'sports',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6093,
            name: i18n._('Roller Skating Rink'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6094,
            name: i18n._('RV Park'),
            icon: 'sports',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6095,
            name: i18n._('Sailing Club'),
            icon: 'marina',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6096,
            name: i18n._('Skydiving'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6097,
            name: i18n._('Summer Camp'),
            icon: 'sports',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6098,
            name: i18n._('Surfing'),
            icon: 'beach',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6099,
            name: i18n._('Trail Station'),
            icon: 'trailhead',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 6006,
        name: i18n._('Snow'),
        icon: 'ski',
        categories: [
          {
            id: 6101,
            name: i18n._('Ski Lift'),
            icon: 'skiing',
          },
          {
            id: 6102,
            name: i18n._('Ski Rental'),
            icon: 'ski_rental',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
            ],
          },
          {
            id: 6103,
            name: i18n._('Ski School'),
            icon: 'ski',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
            ],
          },
          {
            id: 6104,
            name: i18n._('Ski Shop'),
            icon: 'ski',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6105,
            name: i18n._('Ski Slope'),
            icon: 'skiing',
          },
        ],
      },
      {
        id: 6007,
        name: i18n._('Sports'),
        icon: 'baseball',
        categories: [
          {
            id: 6106,
            name: i18n._('Badminton Court'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6107,
            name: i18n._('Baseball Field'),
            icon: 'baseball',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6108,
            name: i18n._('Basketball Court'),
            icon: 'basketball',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6109,
            name: i18n._('Bowling Alley'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6110,
            name: i18n._('Boxing Gym'),
            icon: 'fitness',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6111,
            name: i18n._('Climbing Gym'),
            icon: 'fitness',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6112,
            name: i18n._('Cricket'),
            icon: 'cricket',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6113,
            name: i18n._('Cycle Studio'),
            icon: 'bicycle',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6114,
            name: i18n._('Diet & Weight Loss'),
            icon: 'fitness',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6115,
            name: i18n._('Diving Center'),
            icon: 'swimming_pool',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6116,
            name: i18n._('Fitness Center'),
            icon: 'fitness',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6117,
            name: i18n._('Golf Course'),
            icon: 'golf',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6118,
            name: i18n._('Golf Driving Range'),
            icon: 'golf',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6119,
            name: i18n._('Gym'),
            icon: 'fitness',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6120,
            name: i18n._('Gymnastics Studio'),
            icon: 'fitness',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6121,
            name: i18n._('Hockey Field'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6122,
            name: i18n._('Ice Skating Rink'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6123,
            name: i18n._('Martial Arts'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6124,
            name: i18n._('Paintball Field'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6125,
            name: i18n._('Pilates Studio'),
            icon: 'fitness',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6126,
            name: i18n._('Playing Field'),
            icon: 'sports_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6127,
            name: i18n._('Rock Climbing'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6128,
            name: i18n._('Rugby League'),
            icon: 'sports_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6129,
            name: i18n._('Skate Park'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6130,
            name: i18n._('Soccer Field'),
            icon: 'sports_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6131,
            name: i18n._('Sports Center'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6132,
            name: i18n._('Sports Club'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6133,
            name: i18n._('Squash Court'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6134,
            name: i18n._('Swimming Pool'),
            icon: 'swimming_pool',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6135,
            name: i18n._('Tennis Court'),
            icon: 'tennis',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6136,
            name: i18n._('Track'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6137,
            name: i18n._('Volleyball Court'),
            icon: 'sports_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 6138,
            name: i18n._('Yoga Studio'),
            icon: 'sports',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7000,
    name: i18n._('Services'),
    icon: 'hardware',
    categories: [
      {
        id: 7001,
        name: i18n._('Automotive'),
        icon: 'car',
        categories: [
          {
            id: 7016,
            name: i18n._('Automobile Dealership'),
            icon: 'car',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7017,
            name: i18n._('Automobile Rental'),
            icon: 'car',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7018,
            name: i18n._('Automobile Repair'),
            icon: 'car',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7019,
            name: i18n._('Boat Sales'),
            icon: 'marina',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7020,
            name: i18n._('Car Wash'),
            icon: 'car',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7021,
            name: i18n._('EV Charging Station'),
            icon: 'car',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7022,
            name: i18n._('Gas Station'),
            icon: 'car',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7023,
            name: i18n._('Motorcycle Sales'),
            icon: 'motorcycle',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7024,
            name: i18n._('Recreational Vehicle Sales'),
            icon: 'car',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7002,
        name: i18n._('Bathing'),
        icon: 'shower',
        categories: [
          {
            id: 7025,
            name: i18n._('Bath House'),
            icon: 'shower',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7026,
            name: i18n._('Drinking Water'),
            icon: 'fountain',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7027,
            name: i18n._('Restrooms'),
            icon: 'toilets',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7028,
            name: i18n._('Shower'),
            icon: 'shower',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7003,
        name: i18n._('Beauty & Spa'),
        icon: 'beauty',
        categories: [
          {
            id: 7029,
            name: i18n._('Adult'),
            icon: 'hairdresser',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7030,
            name: i18n._('Barber'),
            icon: 'hairdresser',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7031,
            name: i18n._('Beauty Salon'),
            icon: 'hairdresser',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7032,
            name: i18n._('Day Spa'),
            icon: 'beauty',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7033,
            name: i18n._('Massage'),
            icon: 'beauty',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7034,
            name: i18n._('Nail Salon'),
            icon: 'beauty',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7035,
            name: i18n._('Piercing Parlor'),
            icon: 'beauty',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7036,
            name: i18n._('Sauna / Steam Room'),
            icon: 'beauty',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7037,
            name: i18n._('Tanning Salon'),
            icon: 'beauty',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7038,
            name: i18n._('Tattoo Parlor'),
            icon: 'beauty',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7004,
        name: i18n._('Building & Trades'),
        icon: 'hardware',
        categories: [
          {
            id: 7039,
            name: i18n._('Carpenter'),
            icon: 'carpenter',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7040,
            name: i18n._('Cleaning & Sanitation'),
            icon: 'hardware',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7041,
            name: i18n._('Construction Company'),
            icon: 'carpenter',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7042,
            name: i18n._('Electrician'),
            icon: 'electrician',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7043,
            name: i18n._('Equipment Rental'),
            icon: 'hardware',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7044,
            name: i18n._('HVAC Company'),
            icon: 'hvac',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7045,
            name: i18n._('Landfill'),
            icon: 'hardware',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7046,
            name: i18n._('Landscaper'),
            icon: 'hardware',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7047,
            name: i18n._('Locksmith'),
            icon: 'hardware',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7048,
            name: i18n._('Painting Company'),
            icon: 'hardware',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7049,
            name: i18n._('Pest Control'),
            icon: 'hardware',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7050,
            name: i18n._('Plumber'),
            icon: 'plumber',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7051,
            name: i18n._('Stonemason'),
            icon: 'stonemason',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7005,
        name: i18n._('Communications'),
        icon: 'communications',
        categories: [
          {
            id: 7052,
            name: i18n._('Film & Video Production'),
            icon: 'cinema',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7053,
            name: i18n._('Newspaper'),
            icon: 'newspaper',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7054,
            name: i18n._('Radio Station'),
            icon: 'communications',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7055,
            name: i18n._('Recording Studio'),
            icon: 'hifi',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7056,
            name: i18n._('Television Station'),
            icon: 'communications',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7006,
        name: i18n._('Events'),
        icon: 'town_hall',
        categories: [
          {
            id: 7186,
            name: i18n._('Catering'),
            icon: 'town_hall',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7057,
            name: i18n._('Convention Center'),
            icon: 'town_hall',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7058,
            name: i18n._('Event Space'),
            icon: 'town_hall',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7059,
            name: i18n._('Exhibition Hall'),
            icon: 'town_hall',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7060,
            name: i18n._('Wedding Hall'),
            icon: 'town_hall',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7007,
        name: i18n._('Health'),
        icon: 'health_centre',
        categories: [
          {
            id: 7061,
            name: i18n._('Acupuncturist'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7062,
            name: i18n._('Alternative Medicine'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7063,
            name: i18n._('Chiropractor'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7064,
            name: i18n._('Clinic'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7065,
            name: i18n._('Dentist'),
            icon: 'dentist',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7066,
            name: i18n._('Doctor'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7067,
            name: i18n._('Emergency Room'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7068,
            name: i18n._('Hospice'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7069,
            name: i18n._('Hospital'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7070,
            name: i18n._('Marijuana Dispensary'),
            icon: 'pharmacy',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7071,
            name: i18n._('Maternity Clinic'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7072,
            name: i18n._('Medical Center'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7073,
            name: i18n._('Medical Lab'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7074,
            name: i18n._('Midwife'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7075,
            name: i18n._('Nursing Home'),
            icon: 'home',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7076,
            name: i18n._('Nutritionist'),
            icon: 'pharmacy',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7077,
            name: i18n._('Optometrist'),
            icon: 'optician',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7078,
            name: i18n._('Physical Therapist'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7079,
            name: i18n._('Podiatrist'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7080,
            name: i18n._('Rehab Center'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7081,
            name: i18n._('Therapist'),
            icon: 'therapist',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7082,
            name: i18n._('Urgent Care Center'),
            icon: 'health_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7083,
            name: i18n._('Veterinarian'),
            icon: 'veterinary',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7008,
        name: i18n._('Industrial'),
        icon: 'industry',
        categories: [
          {
            id: 7084,
            name: i18n._('Aerospace'),
            icon: 'rocket',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7085,
            name: i18n._('Distribution Center'),
            icon: 'warehouse',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7086,
            name: i18n._('Factory'),
            icon: 'industry',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7087,
            name: i18n._('Industrial Estate'),
            icon: 'industry',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7088,
            name: i18n._('Laboratory'),
            icon: 'warehouse',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7089,
            name: i18n._('Mining & Drilling'),
            icon: 'industry',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7090,
            name: i18n._('Oil Field'),
            icon: 'industry',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7091,
            name: i18n._('Power Plant'),
            icon: 'industry',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7092,
            name: i18n._('Warehouse'),
            icon: 'warehouse',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7093,
            name: i18n._('Waste / Recycling Facility'),
            icon: 'recycling',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7094,
            name: i18n._('Windmill'),
            icon: 'windmill',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7009,
        name: i18n._('Money'),
        icon: 'financial',
        categories: [
          {
            id: 7096,
            name: i18n._('Bank'),
            icon: 'financial',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7097,
            name: i18n._('Check Cashing'),
            icon: 'financial',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7098,
            name: i18n._('Credit Union'),
            icon: 'financial',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7099,
            name: i18n._('Currency Exchange'),
            icon: 'financial',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7100,
            name: i18n._('Financial Services'),
            icon: 'financial',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7101,
            name: i18n._('Investment Brokerage'),
            icon: 'financial',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7010,
        name: i18n._('Office'),
        icon: 'office',
        categories: [
          {
            id: 7102,
            name: i18n._('Accountant'),
            icon: 'accountant',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7103,
            name: i18n._('Advertising Agency'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7104,
            name: i18n._('Animal Shelter'),
            icon: 'pet',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7105,
            name: i18n._('Architect'),
            icon: 'architect',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7106,
            name: i18n._('Art & Design Studio'),
            icon: 'art',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7107,
            name: i18n._('Art Services'),
            icon: 'art',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7108,
            name: i18n._('Art Studio'),
            icon: 'art',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7109,
            name: i18n._('Building'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7110,
            name: i18n._('Business Center'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7111,
            name: i18n._('Computer Services'),
            icon: 'it',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7112,
            name: i18n._('Coworking Space'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7113,
            name: i18n._('Detective & Security Services'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7114,
            name: i18n._('Employment Agencies'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7115,
            name: i18n._('Engineering'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7116,
            name: i18n._('Entertainment Service'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7117,
            name: i18n._('Funeral Home'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7118,
            name: i18n._('Hacker Space'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7119,
            name: i18n._('Insurance Agent'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7120,
            name: i18n._('Internet Cafe'),
            icon: 'it',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7121,
            name: i18n._('Lawyer & Legal Services'),
            icon: 'lawyer',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7122,
            name: i18n._('Management & Consulting'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7123,
            name: i18n._('Non-Profit'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7124,
            name: i18n._('Notary'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7125,
            name: i18n._('Political Office'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7126,
            name: i18n._('Printing & Photocopies'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7127,
            name: i18n._('Real Estate Agent'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7129,
            name: i18n._('Recruiting Agency'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7130,
            name: i18n._('Research'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7131,
            name: i18n._('Secretarial Services'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7132,
            name: i18n._('Surveying'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7133,
            name: i18n._('Tech Startup'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7134,
            name: i18n._('Testing Lab'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7135,
            name: i18n._('Travel Agent'),
            icon: 'office',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7011,
        name: i18n._('Organization'),
        icon: 'association',
        categories: [
          {
            id: 7136,
            name: i18n._('Community Association'),
            icon: 'association',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7137,
            name: i18n._('Foundation'),
            icon: 'association',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7138,
            name: i18n._('Labor Organization'),
            icon: 'association',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7139,
            name: i18n._('Membership Organization'),
            icon: 'association',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7140,
            name: i18n._('Political Organization'),
            icon: 'association',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7141,
            name: i18n._('Professional Association'),
            icon: 'association',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7142,
            name: i18n._('Religious Organization'),
            icon: 'association',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7143,
            name: i18n._('Social Club'),
            icon: 'association',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7012,
        name: i18n._('Religious'),
        icon: 'religion',
        categories: [
          {
            id: 7144,
            name: i18n._('Buddhist Temple'),
            icon: 'buddhist',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7145,
            name: i18n._('Church'),
            icon: 'christian',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7146,
            name: i18n._('Confucian Temple'),
            icon: 'religion',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7187,
            name: i18n._('Convent'),
            icon: 'religion',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7147,
            name: i18n._('Hindu Temple'),
            icon: 'hindu',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7148,
            name: i18n._('Kingdom Hall'),
            icon: 'religion',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7149,
            name: i18n._('Mission'),
            icon: 'religion',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7150,
            name: i18n._('Monastery'),
            icon: 'religion',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7151,
            name: i18n._('Mosque'),
            icon: 'muslim',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7152,
            name: i18n._('Religious Center'),
            icon: 'religion',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7153,
            name: i18n._('Shrine'),
            icon: 'religion',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7154,
            name: i18n._('Synagogue'),
            icon: 'jewish',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7155,
            name: i18n._('Temple'),
            icon: 'jewish',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7013,
        name: i18n._('Residential'),
        icon: 'home',
        categories: [
          {
            id: 7156,
            name: i18n._('Assisted Living'),
            icon: 'group_home',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7185,
            name: i18n._('College Dormitory / Residence Hall'),
            icon: 'home',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7183,
            name: i18n._('Fraternity House'),
            icon: 'home',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7157,
            name: i18n._('Housing Project'),
            icon: 'home',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7158,
            name: i18n._('Named Residential Building'),
            icon: 'home',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7159,
            name: i18n._('Residential Development'),
            icon: 'home',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7182,
            name: i18n._('Retirement Home'),
            icon: 'group_home',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7184,
            name: i18n._('Sorority House'),
            icon: 'home',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7160,
            name: i18n._('Trailer Park'),
            icon: 'home',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7014,
        name: i18n._('Retail'),
        icon: 'retail',
        categories: [
          {
            id: 7161,
            name: i18n._('Astrologer / Psychic'),
            icon: 'retail',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7162,
            name: i18n._('Bicycle Repair'),
            icon: 'bicycle',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7163,
            name: i18n._('Dry Cleaner'),
            icon: 'laundry',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7164,
            name: i18n._('Gaming Cafe'),
            icon: 'it',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7165,
            name: i18n._('Laundromat'),
            icon: 'laundry',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7166,
            name: i18n._('Locksmith'),
            icon: 'retail',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7167,
            name: i18n._('Lottery Store'),
            icon: 'retail',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7168,
            name: i18n._('Pet Services'),
            icon: 'pet',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7169,
            name: i18n._('Photography Lab'),
            icon: 'photographic_laboratory',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7170,
            name: i18n._('Portrait Studio'),
            icon: 'photographic_laboratory',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7171,
            name: i18n._('Repair Shop'),
            icon: 'retail',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7173,
            name: i18n._('Shoe Repair & Shine'),
            icon: 'shoes',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7174,
            name: i18n._('Storage'),
            icon: 'warehouse',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7175,
            name: i18n._('Tailor'),
            icon: 'tailor',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 7015,
        name: i18n._('Social'),
        icon: 'association',
        categories: [
          {
            id: 7176,
            name: i18n._('Adult Care'),
            icon: 'association',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7177,
            name: i18n._('Child Care'),
            icon: 'childcare',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7178,
            name: i18n._('Emergency Phone'),
            icon: 'emergency_phone',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7179,
            name: i18n._('Emergency Shelter'),
            icon: 'association',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7180,
            name: i18n._('Employment Agency'),
            icon: 'association',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 7181,
            name: i18n._('Job Training'),
            icon: 'association',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 8000,
    name: i18n._('Shopping'),
    icon: 'retail',
    categories: [
      {
        id: 8001,
        name: i18n._('Adult Shop'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8002,
        name: i18n._('Antique Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8118,
        name: i18n._('Army Navy Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8003,
        name: i18n._('Arts & Crafts Store'),
        icon: 'art',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8004,
        name: i18n._('Automotive Supplies'),
        icon: 'car',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8005,
        name: i18n._('Beauty & Cosmetics'),
        icon: 'beauty',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8006,
        name: i18n._('Bicycle Store'),
        icon: 'bicycle',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8007,
        name: i18n._('Big Box Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8008,
        name: i18n._('Bookstore'),
        icon: 'books',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8009,
        name: i18n._('Camera Store'),
        icon: 'photographic_laboratory',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8010,
        name: i18n._('Catalog Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8011,
        name: i18n._('Clothing'),
        icon: 'clothes',
        categories: [
          {
            id: 8079,
            name: i18n._('Accessories Store'),
            icon: 'clothes',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8080,
            name: i18n._('Baby Store'),
            icon: 'clothes',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8081,
            name: i18n._('Boutique'),
            icon: 'clothes',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8082,
            name: i18n._('Bridal Store'),
            icon: 'clothes',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8083,
            name: i18n._("Children's Clothing Store"),
            icon: 'clothes',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8117,
            name: i18n._('General Clothing Store'),
            icon: 'clothes',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8084,
            name: i18n._('Lingerie Shop'),
            icon: 'clothes',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8085,
            name: i18n._("Men's Clothing Store"),
            icon: 'clothes',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8086,
            name: i18n._('Shoe Store'),
            icon: 'shoes',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8087,
            name: i18n._("Women's Clothing Store"),
            icon: 'clothes',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 8012,
        name: i18n._('Comic Books'),
        icon: 'books',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8013,
        name: i18n._('Computers & Home Electronics'),
        icon: 'it',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8015,
        name: i18n._('Cosmetics Shop'),
        icon: 'cosmetics',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8016,
        name: i18n._('Costume Shop'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8017,
        name: i18n._('Craft Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8018,
        name: i18n._('Department Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8019,
        name: i18n._('Dietary & Supplement Shop'),
        icon: 'pharmacy',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8020,
        name: i18n._('Discount & Variety Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8021,
        name: i18n._('Duty Free Shop'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8022,
        name: i18n._('Electronics Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8023,
        name: i18n._('Event Tickets'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8024,
        name: i18n._('Fabric Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8025,
        name: i18n._('Fishing Supply'),
        icon: 'fishing',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8026,
        name: i18n._('Flea Market'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8027,
        name: i18n._('Florist'),
        icon: 'florist',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8028,
        name: i18n._('Food & Beverage'),
        icon: 'greengrocer',
        categories: [
          {
            id: 8088,
            name: i18n._('Bakery'),
            icon: 'bakery',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8089,
            name: i18n._('Beer Store'),
            icon: 'beverages',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8090,
            name: i18n._('Butcher Shop'),
            icon: 'butcher',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8091,
            name: i18n._('Candy Store'),
            icon: 'confectionery',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8092,
            name: i18n._('Cheese Shop'),
            icon: 'greengrocer',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8093,
            name: i18n._('Chocolate Shop'),
            icon: 'confectionery',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8094,
            name: i18n._('Convenience Store'),
            icon: 'greengrocer',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8095,
            name: i18n._('Dairy Store'),
            icon: 'greengrocer',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8096,
            name: i18n._('Farmers Market'),
            icon: 'greengrocer',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8097,
            name: i18n._('Fish Market'),
            icon: 'seafood',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8098,
            name: i18n._('Fruits & Vegetables'),
            icon: 'greengrocer',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8099,
            name: i18n._('Gourmet Shop'),
            icon: 'greengrocer',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8100,
            name: i18n._('Grocery'),
            icon: 'greengrocer',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8101,
            name: i18n._('Health Food Store'),
            icon: 'greengrocer',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8102,
            name: i18n._('Herbs & Spices'),
            icon: 'greengrocer',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8103,
            name: i18n._('Liquor Store'),
            icon: 'liquor',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8104,
            name: i18n._('Pork Store'),
            icon: 'butcher',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8105,
            name: i18n._('Supermarket'),
            icon: 'supermarket',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8106,
            name: i18n._('Wine Shop'),
            icon: 'wine',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 8029,
        name: i18n._('Frame Shop'),
        icon: 'art',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8030,
        name: i18n._('Gifts & Souvenirs'),
        icon: 'gift',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8032,
        name: i18n._('Gun Shop'),
        icon: 'hunting',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8033,
        name: i18n._('Hobby Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8034,
        name: i18n._('Home & Garden'),
        icon: 'hardware',
        categories: [
          {
            id: 8107,
            name: i18n._('Building Materials'),
            icon: 'hardware',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8108,
            name: i18n._('Carpets & Floor Coverings'),
            icon: 'hardware',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8109,
            name: i18n._('Garden Center'),
            icon: 'garden_centre',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8110,
            name: i18n._('Hardware Store'),
            icon: 'hardware',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8111,
            name: i18n._('Home Furnishings'),
            icon: 'furniture_store',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8112,
            name: i18n._('Household Appliances'),
            icon: 'home',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8113,
            name: i18n._('Kitchen Supply'),
            icon: 'home',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8114,
            name: i18n._('Lighting Store'),
            icon: 'home',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 8115,
            name: i18n._('Mobile Homes'),
            icon: 'home',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 8036,
        name: i18n._('Jewelry Store'),
        icon: 'jewelry',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8037,
        name: i18n._('Knitting Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8038,
        name: i18n._('Leather Goods'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8039,
        name: i18n._('Luggage Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8040,
        name: i18n._('Marketplace'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8041,
        name: i18n._('Mattress Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8042,
        name: i18n._('Medical Supply Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8043,
        name: i18n._('Mobile Phones'),
        icon: 'telephone',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8044,
        name: i18n._('Music Store'),
        icon: 'music',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8046,
        name: i18n._('Newsstand'),
        icon: 'newsagent',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8047,
        name: i18n._('Office Supply'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8048,
        name: i18n._('Optical Goods'),
        icon: 'optician',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8050,
        name: i18n._('Outdoor Supply'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8051,
        name: i18n._('Outlet Mall'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8052,
        name: i18n._('Outlet Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8053,
        name: i18n._('Party Supplies'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8054,
        name: i18n._('Pawn Shop'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8055,
        name: i18n._('Pet Store'),
        icon: 'pet',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8056,
        name: i18n._('Pharmacy'),
        icon: 'pharmacy',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8058,
        name: i18n._('Pop-Up Shop'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8059,
        name: i18n._('Record Shop'),
        icon: 'music',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8060,
        name: i18n._('Scuba Diving'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8061,
        name: i18n._('Shipping Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8062,
        name: i18n._('Shopping Center'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8063,
        name: i18n._('Shopping Mall'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8064,
        name: i18n._('Skateboard Shop'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8065,
        name: i18n._('Ski Shop'),
        icon: 'ski',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8066,
        name: i18n._('Smoke / Vape Shop'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8067,
        name: i18n._('Souvenir Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8068,
        name: i18n._('Sporting Goods'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8069,
        name: i18n._('Stationery & Office Supplies'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8070,
        name: i18n._('Surf Shop'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8071,
        name: i18n._('Thrift Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8072,
        name: i18n._('Toy and Game Store'),
        icon: 'toys',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8073,
        name: i18n._('Used Merchandise'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8074,
        name: i18n._('Vacant Storefront'),
        icon: 'vacant',
        attributes: [
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8075,
        name: i18n._('Video Game Store'),
        icon: 'it',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8076,
        name: i18n._('Video Store'),
        icon: 'it',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8077,
        name: i18n._('Warehouse Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8078,
        name: i18n._('Watch Shop'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
      {
        id: 8116,
        name: i18n._('Wholesale Store'),
        icon: 'retail',
        attributes: [
          {
            name: 'Hours',
            type: 'object',
            required: true,
          },
          {
            name: 'Phone',
            type: 'string',
            required: false,
          },
          {
            name: 'Website',
            type: 'string',
            required: false,
          },
          {
            name: 'Wheelchair Accessible',
            type: 'boolean',
            required: true,
          },
        ],
      },
    ],
  },
  {
    id: 9000,
    name: i18n._('Travel'),
    icon: 'airport',
    categories: [
      {
        id: 9001,
        name: i18n._('Air'),
        icon: 'airport',
        categories: [
          {
            id: 9007,
            name: i18n._('Airport'),
            icon: 'airport',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9008,
            name: i18n._('Airport Gate'),
            icon: 'airport',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9009,
            name: i18n._('Airport Lounge'),
            icon: 'airport',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9010,
            name: i18n._('Airport Service'),
            icon: 'airport',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9011,
            name: i18n._('Airport Terminal'),
            icon: 'airport',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9012,
            name: i18n._('Airport Tram'),
            icon: 'airport',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9013,
            name: i18n._('Baggage Claim'),
            icon: 'airport',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9014,
            name: i18n._('Duty-free Shop'),
            icon: 'airport',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9015,
            name: i18n._('Heliport'),
            icon: 'airport',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 9002,
        name: i18n._('Automotive'),
        icon: 'car',
        categories: [
          {
            id: 9016,
            name: i18n._('Parking Garage/Lot'),
            icon: 'parking_garage',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
            ],
          },
          {
            id: 9017,
            name: i18n._('Lot'),
            icon: 'parking_garage',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
            ],
          },
          {
            id: 9018,
            name: i18n._('Rest Area'),
            icon: 'car',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9019,
            name: i18n._('Toll Booth'),
            icon: 'car',
          },
          {
            id: 9020,
            name: i18n._('Truck Stop'),
            icon: 'car',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 9003,
        name: i18n._('Bicycle'),
        icon: 'bicycle',
        categories: [
          {
            id: 9022,
            name: i18n._('Bike Rental'),
            icon: 'bicycle',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: true,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
            ],
          },
          {
            id: 9023,
            name: i18n._('Bike Share Station'),
            icon: 'bicycle',
          },
        ],
      },
      {
        id: 9047,
        name: i18n._('Building'),
        icon: 'building',
        categories: [
          {
            id: 9048,
            name: i18n._('Elevator'),
            icon: 'elevator',
          },
          {
            id: 9049,
            name: i18n._('Entrance'),
            icon: 'entrance',
          },
          {
            id: 9050,
            name: i18n._('Escalator'),
            icon: 'elevator',
          },
        ],
      },
      {
        id: 9004,
        name: i18n._('Marine'),
        icon: 'marina',
        categories: [
          {
            id: 9025,
            name: i18n._('Ferry Terminal'),
            icon: 'ferry',
            attributes: [
              {
                name: 'Hours',
                type: 'object',
                required: false,
              },
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9026,
            name: i18n._('Pier'),
            icon: 'marina',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9028,
            name: i18n._('Seaport'),
            icon: 'marina',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 9005,
        name: i18n._('Rest'),
        icon: 'hotel',
        categories: [
          {
            id: 9029,
            name: i18n._('Bed & Breakfast'),
            icon: 'hotel',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9030,
            name: i18n._('Boarding House'),
            icon: 'hotel',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9031,
            name: i18n._('Campground'),
            icon: 'camp_site',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9032,
            name: i18n._('Chalets'),
            icon: 'chalet',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9033,
            name: i18n._('Guest House'),
            icon: 'hotel',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9034,
            name: i18n._('Hostel'),
            icon: 'hotel',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9035,
            name: i18n._('Hotel'),
            icon: 'hotel',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9036,
            name: i18n._('Motel'),
            icon: 'hotel',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9037,
            name: i18n._('Resort'),
            icon: 'resort',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9038,
            name: i18n._('Ski Resort'),
            icon: 'ski',
            attributes: [
              {
                name: 'Phone',
                type: 'string',
                required: false,
              },
              {
                name: 'Website',
                type: 'string',
                required: false,
              },
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
      {
        id: 9006,
        name: i18n._('Transit'),
        icon: 'train_station',
        categories: [
          {
            id: 9039,
            name: i18n._('Bus Station'),
            icon: 'bus_station',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9040,
            name: i18n._('Bus Stop'),
            icon: 'bus_station',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9041,
            name: i18n._('Cable Car Station'),
            icon: 'train_station',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9042,
            name: i18n._('Light Rail Station'),
            icon: 'train_station',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9043,
            name: i18n._('Subway Station'),
            icon: 'train_station',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9044,
            name: i18n._('Taxi Stand'),
            icon: 'taxi',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9045,
            name: i18n._('Train Station'),
            icon: 'train_station',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
          {
            id: 9046,
            name: i18n._('Tram Stop'),
            icon: 'train_station',
            attributes: [
              {
                name: 'Wheelchair Accessible',
                type: 'boolean',
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
];
