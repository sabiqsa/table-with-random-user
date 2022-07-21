const mockResponse = {
  data: {
    gender: 'male',
    name: 'Mattia Simon',
    location: {
      street: {
        number: 9610,
        name: 'Rue Denfert-Rochereau',
      },
      city: 'Vaulruz',
      state: 'Glarus',
      country: 'Switzerland',
      postcode: 1718,
      coordinates: {
        latitude: '-60.9880',
        longitude: '-52.1168',
      },
      timezone: {
        offset: '+9:30',
        description: 'Adelaide, Darwin',
      },
    },
    email: 'mattia.simon@example.com',
    login: {
      uuid: 'afefae52-4e60-4000-ac05-c81a1da92e3b',
      username: 'beautifulfrog804',
      password: 'sebastian',
      salt: 'p3xdadbz',
      md5: '0597043814d95a2bded86fb23e376809',
      sha1: '2a256c8f3547138c4b0631d7dadfc44aa635312b',
      sha256:
        '17f753715007aceb1c1a2e8f88ecf174276b3d83e5d24b7c5049350d0bb4c4b8',
    },
    dob: {
      date: '1976-06-01T22:35:55.619Z',
      age: 46,
    },
    registered: {
      date: '2003-12-11T14:29:51.796Z',
      age: 18,
    },
    phone: '079 651 92 67',
    cell: '076 162 75 72',
    id: {
      name: 'AVS',
      value: '756.1497.4209.76',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/64.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/64.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/64.jpg',
    },
    nat: 'CH',
    username: 'AVS',
    registrationDate: '11-12-2003 09:29',
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
