const express = require("express");
const app = express();
const port = 8383;
app.use(express.static("public"));
app.get("/info", (req, res) => {
  res.status(200).json({ info: "present text */" });
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
