const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

/**
 * customer routes
*/
const verifyToken = require('../middleware/verifyToken');

router.get('/',verifyToken, employeeController.homepage);
router.get('/about',verifyToken, employeeController.about);

router.get('/add',verifyToken, employeeController.addEmployee)
router.post('/add',verifyToken, employeeController.postEmployee)

router.get('/view/:id',verifyToken, employeeController.view)
router.get('/edit/:id',verifyToken, employeeController.edit)
router.put('/edit/:id',verifyToken, employeeController.editPost)

router.delete('/edit/:id',verifyToken, employeeController.deleteEmployee)
router.post('/search',verifyToken, employeeController.searchEmployee)



module.exports = router;