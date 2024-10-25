const { Router } = require("express");
const router = Router();
const dsaController = require("../controllers/dsaController");

router.post("/longestSubstring", dsaController.longestSubstring);
router.post("/binaryTreePathSum", dsaController.binaryTreePathSum);

module.exports = router;
