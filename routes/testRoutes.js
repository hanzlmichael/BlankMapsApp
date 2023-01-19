const { Router } = require('express');
const testController = require('../controllers/testController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();

router.get('/tests', requireAuth, testController.getTests);
router.post('/tests', requireAuth, testController.postTest);

module.exports = router;