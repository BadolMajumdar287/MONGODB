db.student.insertOne({
    name:"badol",
    age:20,
    location: {
        state:"west Bengle",
        city:"kolkata"

    }
})



db.student.insertMany([

    {
        name:"somrat",
    age:21,
    location: {
        state:"west Bengle",
        city:"Habra"

    }
},


    
{
    name:"Rahul",
age:22,
location: {
    state:"west Bengle",
    city:"kolkata"

}
},



{
    name:"sobuj",
age:23,
location: {
    state:"west Bengle",
    city:"Hawra"

}
},
{
    name:"avi",
age:25,
location: {
    state:"west Bengle",
    city:"Nahati"

}
}
])






