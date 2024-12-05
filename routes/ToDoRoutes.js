const {Router}=require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controller/ToDoController");


const router=Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)
//creating routres for update and delete.

module.exports=router;