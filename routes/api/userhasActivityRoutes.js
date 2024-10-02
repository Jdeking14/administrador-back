const router = require("express").Router();
const {
  postUsersInActivity,
  patchUsersInActivity,
  getUsersFromActivity,
  removeUsersFromActivity,
  createUserActivity,
} = require("@controllers/userHasActivitiesController");

//Añade usuarios a una actividad
router.post("/:id/add-users", postUsersInActivity);

//Actualiza los usuarios de una actividad
router.patch("/:id/update-users", patchUsersInActivity);

//Obtiene los usuarios de la actividad
router.get("/:id/users", getUsersFromActivity);

//Borra el grupo
router.delete("/:id/users", removeUsersFromActivity);

router.delete("/deleteUser", removeUsersFromActivity);

router.post("/registerUser", createUserActivity);

module.exports = router;
