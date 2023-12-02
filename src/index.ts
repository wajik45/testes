import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    url: req.protocol + "://" + req.hostname + req.path,
    message: "OK",
  });
});

app.listen(3001, () => console.log(`Server is running on port ${3001}`));
