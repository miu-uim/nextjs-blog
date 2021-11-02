export default (req, res) => {
  const { pid2 } = req.query;
  res.status(200).json({ pid2: pid2 });
};
