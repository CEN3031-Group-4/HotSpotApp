const express = require('express');
const router = express.Router();
const Nuclides = require('../controllers/nuclides.server.controller');

router.route('/')
  .get(Nuclides.list);

router.route('/lungClass')
  .get(Nuclides.getClasses);

router.route('/icrp')
  .get(Nuclides.getICRP);

module.exports = router;  