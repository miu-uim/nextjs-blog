export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}
// export default (req, res) => {
//   res.status(200).json({ text: "Hello" });
// };
