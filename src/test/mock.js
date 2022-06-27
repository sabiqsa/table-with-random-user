const mockResponse = {
  data: {
    tracks: {
      track: [
        {
          name: 'As It Was',
        },
        {
          name: 'Matilda',
        },
      ],
    },
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
