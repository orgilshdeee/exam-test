const Auction = require("./auction.model");

const createAuction1 = async (req) => {
  const auctionBid = new Auction(req.body);
  return auctionBid.save();
};

const getAllAuction1 = async (req) => {
  // return Auction.find();
  const data = await Auction.find()
    .populate(
      "user_id",
      "_id email first_name last_name phone address role_id user_status "
    )
    .populate(
      "product_id",
      "_id product_name odometer primary_damage body_style vehicle_type color fuel engine_type cylinders category_id product_status imgUrl"
    )
    .exec();
  return data;
};

const updateAuction1 = async (req) => {
  const { id } = req.query;
  await Auction.findByIdAndUpdate(id, req.body);
  const auctionBid = await Auction.findById(id);
  return auctionBid;
};

const deleteAuction1 = async (req) => {
  const { id } = req.params;
  const auctionBid = await Auction.findByIdAndDelete(id);
  return auctionBid;
};

const getById = async (req) => {
  const { id } = req.params;
  const auctionBid = await Auction.findById(id);
  return auctionBid;
};

module.exports = {
  createAuction1,
  getAllAuction1,
  updateAuction1,
  deleteAuction1,
  getById,
};
