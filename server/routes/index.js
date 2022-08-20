import express from "express";

var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
	res.render("index", { title: "World" });
});

export default router;
