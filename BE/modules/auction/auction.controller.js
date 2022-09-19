const auctionBidServices = require("./auction.service");

const createAuction = async (req, res) => {
  try {
    console.log(req);
    const auctionAndBid = await auctionBidServices.createAuction1(req);
    res.json({
      data: auctionAndBid,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

const deleteAuction = async (req, res) => {
  try {
    const auctionAndBid = await auctionBidServices.deleteAuction1(req);
    res.json({
      success: true,
      data: auctionAndBid,
    });
  } catch (error) {
    res.json({
      success: false,
      data: error,
    });
  }
};

const updateAuction = async (req, res) => {
  const auctionAndBid = await auctionBidServices.updateAuction1(req);
  res.json({
    data: auctionAndBid,
  });
};

const getAllAuction = async (req, res) => {
  const auctionAndBid = await auctionBidServices.getAllAuction1(req);
  res.json({
    data: auctionAndBid,
  });
};

const getById = async (req, res) => {
  const auctionAndBid = await auctionBidServices.getById(req);
  res.json({
    data: auctionAndBid,
  });
};

module.exports = {
  createAuction,
  deleteAuction,
  updateAuction,
  getAllAuction,
  getById,
};
