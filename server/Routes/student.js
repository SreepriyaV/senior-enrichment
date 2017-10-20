const router = require("express").Router();
const { Student } = require("../../db/models");
const { Campus } = require("../../db/models");

router.get("/", (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

router.get("/:studentId", (req, res, next) => {
  Student.findById(req.params.studentId, { include: [Campus] })
    .then(student => res.json(student))
    .catch(next);
});

router.get("/campus/:campusId", (req, res, next) => {
  Student.findAll({ where: { campusId: req.params.campusId } })
    .then(students => res.json(students))
    .catch(next);
});

router.post("/", (req, res, next) => {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

router.put("/:studentId", (req, res, next) => {
  Student.update(req.body, {
    where: { id: req.params.studentId },
    returning: true
  })
    .then(student => res.json(student))
    .catch(next);
});

router.delete("/:studentId", (req, res, next) => {
  Student.destroy({ where: { id: req.params.studentId } })
    .then(() => Student.findAll())
    .then(students => res.json(students))
    .catch(next);
});
module.exports = router;
