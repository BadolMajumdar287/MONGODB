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

db.student.updateOne(
  { _id: ObjectId('6808bab1d569ab9b4fb5f8a0')},
  {$set: {age : 17,name:"Joy"}}
)


db.student.updateMany(
  { name: "kisor"},
  {$set: {age:13}}
)


db.user.updateOne(
  {name: "badol"},
  {$set: { age: 234, city: "Kasmir"}}
)


db.user.updateOne(
  { _id: ObjectId('68093d867793e34dc2b5f89b')},
  {$set: {age:2142566, city:"hsgdkjfghghgqjheujhj"}}
)



db.user.updateMany(
  {name:"tonmmoy"},
  {$set: { age:111,city:"shikh"}}
)



db.user.updateOne(
  { _id: ObjectId('68093d867793e34dc2b5f89b')},
  {$set: {age:2142566, city:"hsgdkjfghghgqjheujhj"}}
)


db.user.updateOne(
  {name:"badol"},
  {$set: {age: 100,city:"ajshaljdhsjdg"}}
)


db.user.updateMany(
  {name: "tonmoy"},

  {$set: {age : 566663478, city: "abcdefghjklm"}}
)

db.user.updateMany(
  {name: "tonmmoy"},

  {$set: {age : 566663478, city: "abcdefghjklm"}}
)