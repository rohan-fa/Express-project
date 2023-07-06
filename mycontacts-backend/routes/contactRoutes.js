const express = require("express");

const router = express.Router();


const validateToken = require("../middleware/validationTokenHandler");
const {getContacts, createContact, getContact, updateContact, deleteContact} = require("../controllers/contactController");


router.use(validateToken);
router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);




module.exports = router;

