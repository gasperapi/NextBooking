import {fetchRooms} from '../../../lib/mongodb';
export async function GET(req, res) {
  const rooms = await fetchRooms();
//   console.log("this2",rooms);
  return Response.json({
    rooms
  })
}
