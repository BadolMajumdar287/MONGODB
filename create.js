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



db.createCollection("student",{

    validator: {

     $jsonSchema:{
        
     requird:["name","age"], title: "student Object validation",
      properties:{
        name:{
            bsonType: "string",
            description: "Name must be a string and is required"
        },
         
        age:{
            bsonType: "int",
            minimum: 5,
            maximum: 20,
            description: "age must be an integer between 5 and 20."
        }


      }


     }

 }

})









db.createCollection("user",{
     
    validator:{
      $jsonSchema:{
       
        title:"Student Object Validation",

        required:["name","age","course"],

        properties:{

            name:{
                bsonType:"string",
                description:"Name must be string and requird"
            },

            age:{
                bsonType:"int",
                minimum:5,
                maximum:20,
                description:"Age must be int and requird"
            },

            course:{
                bsonType:"string",
                enum:["BCA","Btech","BSc"],
                 description:"Course must be one of the following values: BCA,Btech,BSc."

            }
        }



      }


    }



})


db.user.insertOne({name: "badol",age:20,course:"BCA"});
db.user.insertOne({name: "avi",age:18,course:"BCA"});
db.user.insertOne({name: "Shomrat",age:19,course:"BCA"});

db.user.find()









db.runCommand({
    collMod: "student",
    validator: {
        $jsonSchema: {
             required: ["name","age","course"],
             properties: {
                name:{
                    bsonType:"string",
                    description:"Name must be string and requird"
                },
    
                age:{
                    bsonType:"int",
                    minimum:5,
                    maximum:20,
                    description:"Age must be int and requird"
                },
    
                course:{
                    bsonType:"string",
                    enum:["BCA","Btech","BSc"],
                     description:"Course must be one of the following values: BCA,Btech,BSc."
    
                }
             }
        }
    }
})

db.student.insertOne({name: "Monty",age:20,course:"BCA"})
db.student.insertOne({name: "Kisor",age:20,course:"BCA"})


db.student.find();