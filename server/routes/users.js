const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
    const user = request.session.user_id;
    db.query(`SELECT * FROM users`)
    .then(result => {
      response.json({result: result.rows})
    })
    .catch(err => {
      response
              .status(500)
              .json({ error: err.message });
    })
  });

  return router;
};