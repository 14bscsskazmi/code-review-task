export default [
  {
    // Flight's data is not the same as it is mentioned in the task description.
    id: '1',
    destination: 'Rome',
    destinationIata: 'FCO',
    time: '1:30pm - 4:15pm', // landing and departure times should be handled differently
    location: {
      latitude: 41.9,
      longitude: 12.483333,
    },
    // prices before and after discounts are missing.
    // origin and originIata are missing.
    
  },
  {
    id: '2',
    destination: 'Barcelona',
    destinationIata: 'BCN',
    time: '3:30pm - 5:15pm',
    location: {
      latitude: 41.390205,
      longitude: 2.154007,
    },
  },
  {
    id: '3',
    destination: 'Zurich',
    destinationIata: 'ZRH',
    time: '2:30pm - 4:15pm',
    location: {
      latitude: 47.36667,
      longitude: 8.55,
    },
  },
  {
    id: '4',
    destination: 'Amsterdam',
    destinationIata: 'AMS',
    time: '3:30pm - 5:15pm',
    location: {
      latitude: 52.377956,
      longitude: 4.89707,
    },
  },
  {
    id: '5',
    destination: 'Tokyo',
    destinationIata: 'HND',
    time: '1:30am - 2:15pm',
    location: {
      latitude: 35.652832,
      longitude: 139.839478,
    },
  },
];
