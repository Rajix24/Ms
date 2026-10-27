import { HttpError, notImplemented } from '../shared/http-error.js';
export function requireRole(...roles) {
  // return array of roles 
  return function checkRole(req, res, next) {
    // MES 1 - TODO 
    roles.forEach(e =>{
      if(req.user.role == e) {
        next()
      }
    })
  };
}
