
//one documents delete
db.collection_name.deleteOne({field1:"value"});

//common all documents delete
db.collection_name.deleteMany({field1:"value"});


//collection all documents delete
db.collection_name.deleteMany({});




db.student.deleteOne({_id: ObjectId('680903ae9f7551e25bb5f899')})


db.student.deleteMany({name: 'Kisor'});

db.student.deleteMany({})


db.user.deleteOne({name:"badol"})

db.user.deleteMany({name:"konika"})
db.user.deleteMany({name:"tonmmoy"})
db.user.deleteMany({});