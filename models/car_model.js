const db = require('../database');

const car = {
  get: function(callback) {
    return db.query('select * from car order by idcar desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from car where idcar=?', [id], callback);
  },
  add: function(car, callback) {
    return db.query(
      'insert into car (brand,model,yearmodel) values(?,?,?)',
      [car.brand, car.model, car.yearmodel],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from car where idcar=?', [id], callback);
  },
  update: function(brand, model, yearmodel) {
    return db.query(
      'update book set name=?,author=?, isbn=? where idcar=?',
      [car.brand, car.model, car.yearmodel id],
      callback
    );
  }
};
module.exports = car;
