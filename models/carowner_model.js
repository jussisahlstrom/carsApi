const db = require('../database');

const carowner = {
  get: function(callback) {
    return db.query('SELECT * FROM carowner ORDER BY idcarowner DESC', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from carowner where idcarowner=?', [id], callback);
  },
  OwnerOfCars: function(callback) {
    return db.query(select owner.idowner, owner.firstname, owner.lastname,
    group_concat(concat(car.brand, ' ', car.model) separator', ') as "Cars of the person"
    from owner
    join carowner on carowner.idowner=owner.idowner
    join car ON car.idcar=carowner.idcar
    group by owner.idowner;, callback);
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
