var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   var myobj = [
     { name:"iphone 11",user:"customer 1",product_qty:2,
        basePrice:80000,sellPrice:90000,totalprice:0 
    },
     { name:"iphone 6",user:"customer 2",product_qty:3,
     basePrice:60000,sellPrice:55000,totalprice:0
    },
     { name:"iphone 13",user:"customer 3",product_qty:5,
    basePrice:120000,sellPrice:130000,totalprice: 0
    }
   ];
   const db = client.db("E-commerce");
    function insert(){
    db.collection("carts").insertMany(myobj, function (err, res) {
           if (err)
               throw err;
           console.log("Number of records inserted: " + res.insertedCount);
           
       })
    };
    function update()
    {
        var myquery = { totalprice:0 };
        db.collection("carts").updateMany(
            myquery,
            [{ $set: { totalprice: { $multiply: [ "$sellPrice", "$product_qty" ] } } }],
          )
       
    }
    function del(){
        db.collection("carts").deleteOne({name:"iphone 6"},function (err, result) {
                if (err)
                    throw err;
                console.log("deleted successfully ",result.deletedCount);
                
            })};
           
    function read(){
        db.collection("carts").find().toArray( function (err, result) {
                if (err)
                    throw err;
                console.log("Readed successfully ",result);
                client.close();
                
            })};

   insert();
   update();
    del();
    read();
 });





