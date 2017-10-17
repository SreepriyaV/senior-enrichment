const {Campus} = require( "../../db/models");
const router = require("express").Router();

router.get("/", (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.get("/:campusId", (req, res, next) => {
  console.log("in campus router");
  Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});

router.post("/", (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

router.put("/:campusId", (req, res, next) => {
  Campus.update(req.body, {
    where: { id: req.params.campusId },
    returning: true
  })
    .then(campus => res.json(campus))
    .catch(next);
});

router.delete("/:campusId",(req,res,next)=>{
    Campus.destroy({where:{id: req.params.campusId}})
    .then(()=>campus.findAll())
    .then(campuses=>res.json(campuses))
    .catch(next);
})

module.exports=router;