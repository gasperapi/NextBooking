import mongodbConnect from "../../../lib/mongodb";
import fetchRooms from '../../../lib/mongodb';
export async function GET(req, res) {
  // const data = await mongodbConnect();
  const rooms = await fetchRooms();
  // console.log("this2",rooms);
  return Response.json({
    rooms
  })
}
