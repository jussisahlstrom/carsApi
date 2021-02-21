const db = require('../database');

const carowner = {
  get: function(callback) {
    return db.query('select * from carowner order by idcarowner desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from carowner where idcarowner=?', [id], callback);
  },
  add: function(carowner, callback) {
    return db.query(
      'insert into carowner (idcar,idowner) values(?,?)',
      [carowner.idcar, carowner.idowner],
      callback
    );
  },
  delete: function(idcarowner, callback) {
    return db.query('delete from car where idcarowner=?', [id], callback);
  },
  update: function(idcarowner, carowner, callback) {
    return db.query(
      'update carowner set idcar=?,idowner=? where idcarowner=?',
      [carowner.idcar, carowner.idowner, idcarowner],
      callback
    );
  }
};
module.exports = carowner;