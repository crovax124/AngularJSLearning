import { Booking } from './booking';

export const Bookings: Booking[] = [
  {
    id: 1,
    name: 'Eric Isensee',
    roomNumber: 200,
    startDate: new Date(),
    endDate: new Date('2022-07-21'),
  },
  {
    id: 2,
    name: 'Henning Mailand',
    roomNumber: 210,
    startDate: new Date('2022-02-1'),
    endDate: new Date('2022-03-10'),
  },
  {
    id: 3,
    name: 'Paul Aghamiri',
    roomNumber: 120,
    startDate: new Date('2022-03-11'),
    endDate: new Date('2022-04-10'),
  },
  {
    id: 4,
    name: 'Max Mustermann',
    roomNumber: 410,
    startDate: new Date('2022-07-28'),
    endDate: new Date('2022-08-03'),
  },
];
