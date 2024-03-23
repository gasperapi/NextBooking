import {fetchUsers} from '../../../lib/mongodb';
export async function GET(req, res) {
  const Users = await fetchUsers();
  // console.log("this2",rooms);
  return Response.json({
    Users
  })
}
