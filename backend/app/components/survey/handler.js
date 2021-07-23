exports.survey = async (req, res) => {
  const { site, contentProduction, support, staff, foods, token } = req.body;
  if (site && contentProduction && support && staff && foods && token) {
    return res.send({
      status: 1,
    });
  } else {
    return res.send({
      status: 0,
    });
  }
};
