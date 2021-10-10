var express = require("express");
const router = express.Router();

const userController = require("../controllers/cUsuarios");

router.get("", userController.getUsuarios); /// definimos las rutas para productos en este caso
router.post("", userController.addUsuario);
router.get("/:id", userController.getUsuatioId);

module.exports = router;
