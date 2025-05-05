
//all value read:-
db.collection_name.find();

//one value read:

db.collection_name.findOne();




//creare db:-

db.user.find()

db.user.find({course: "BCA"})

db.user.find({name: "Shomrat"});

db.user.findOne({name: "Shomrat"});


db.user.findOne({course: "BCA"})




db.collection_name.find().projection({fild1:1,field2:2,filed3:3})


db.user.find({name:"monty"},{age:1});



//projection()

db.user.find({course: "BCA"},{age:1,name:1} );





db.user.find({course: "BCA"},{age:1,name:1,_id:0} );



db.user.find({course: "BCA"}).projection({name:1,age:1});



db.user.find({course: "BCA"}).projection({name:1,age:1,_id:0});




//count()

db.collection_name.find().count();

db.user.find().count();
db.user.find({name:"Shomrat"}).count();
db.user.find({course: "BCA"}).count();


//sort()


db.collection_name.find().sort();

db.user.find({course: "BCA"}).sort({age:-1})
db.user.find({course: "BCA"}).sort({name:1})
db.user.find({course: "BCA"}).sort({age:1})


//limit()




db.collection_name.find().limit();

db.user.find().limit(2)
db.user.find().limit(3)
db.user.find().limit(4)



//skip()

db.collection_name.find().skip();

db.user.find().skip(0);

db.user.find().skip(1);


