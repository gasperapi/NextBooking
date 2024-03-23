import mongodbConnect from "../../../lib/mongodb";

export async function GET(req, res) {
  const data = await mongodbConnect();
  console.log("this",data);
  return Response.json({
    data
  })
}
