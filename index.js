/**
 * sequelize model instance
 * @param {Object} r
 * @api public
 */
const logging = console.log
const view = r =>{
  const log_a = (a) =>{
    if(a && a.toJSON)logging(a.toJSON());
    else logging(a);
  }
  if(Array.isArray(r)){
    r.forEach(log_a)
  } else {
    log_a(r)
  }
}

/**
 * sequelize model instance toJSON
 * @param {Object} r
 * @return {Object} json
 * @api public
 */
const toJSON = r =>{
  let ret
  const log_a = (a) =>{
    if(a && a.toJSON){
      return a.toJSON();
    }
    else {
      return a;
    }
  }
  if(Array.isArray(r)){
    ret = []
    r.forEach(a=>{
      ret.push(log_a(a))
    })
  } else {
    ret = log_a(r)
  }
  return ret
}

module.exports = {
  view,
  toJSON,
}
