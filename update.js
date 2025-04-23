db.student.updateOne(
    { item: 'paper' },
    
    {
      $set: { 'size.uom': 'cm', status: 'P' },
      $currentDate: { lastModified: true }
    }
)



// updateOne();
// UpdateMany();

db.student.updateOne(
  {name: "avi"},
  {$set: {age : 20,name:"badol"}}
)


db.student.updateOne(
  { _id: ObjectId('6808bab1d569ab9b4fb5f8a0')},
  {$set: {age : 17,name:"Joy"}}
)