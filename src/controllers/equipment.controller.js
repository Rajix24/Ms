import { createEquipment } from '../services/equipment.service.js';
import { notImplemented } from '../shared/http-error.js';
export async function create(req, res) {
  // MES 1 - TODO B 
  try{
    const data = req.validatedBody
    const result = await createEquipment(data);
    res.status(201).json({
      message: "operation",
      data: result
    })
  }catch(error){
    console.log(error)
    }

}
