const db = require('../database');

const carowner = {
  get: function(callback) {
    return db.query('SELECT * FROM carowner ORDER BY idcarowner DESC', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from carowner where idcarowner=?', [id], callback);
  },
  carowner_model: function(callback) {
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
[23.19] Ayrton: const express = require('express');
const router = express.Router();
const carowner = require('../models/carowner_model');

router.get('/', function(request, response) {
  carowner.get(function(err, dbResult) {
      if (err) {
          response.json(err);
      } else {
          response.json(dbResult);
      }
  });
});



router.get('/cars', function(request, response) {
  carowner.OwnerOfCars( function(err, dbResult) {
      if (err) {
           response.json(err) ;
      } else {
           response.json(dbResult) ;
      } ;
  }); 
});

router.get('/:id?', function(request, response,) {
  if (request.params.id) {
      carowner.getById(request.params.id, function(err, dbResult) {
          if (err) {
          response.json(err);
          } else {
          response.json(dbResult);
          }
      });
  }
});

router.post('/', 
function(request, response) {
  carowner.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      console.log(dbResult);
      response.json(dbResult);
    }
  });
});


router.delete('/:id', 
function(request, response) {
  carowner.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult.affectedRows);
    }
  });
});


router.put('/:id', 
function(request, response) {
  carowner.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;
