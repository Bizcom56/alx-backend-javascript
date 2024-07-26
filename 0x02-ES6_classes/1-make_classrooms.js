import ClassRoom from './0-classroom';

const initializeRooms = () => {
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  const rooms = [room1, room2, room3];
  return rooms;
};

export default initializeRooms;
