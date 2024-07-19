const express = require('express');
const { handleGenerateNewShortURL,handleURLredirect } = require("../Controllers/url");

const router = express.Router();


router.post("/",handleGenerateNewShortURL);
router.get("/:shortId",handleURLredirect);

module.exports = router;