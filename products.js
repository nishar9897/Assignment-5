var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   var myobj = [
     { name:"iphone 11",thumbnail:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestechcouncil%2F2020%2F12%2F16%2Ftrade-offs-in-software-engineering%2F&psig=AOvVaw2qLBhwjDbCIOkg5RQNpW5g&ust=1633607155314000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIillYTbtfMCFQAAAAAdAAAAABAD",
        product_gallery:["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestechcouncil%2F2020%2F12%2F16%2Ftrade-offs-in-software-engineering%2F&psig=AOvVaw2qLBhwjDbCIOkg5RQNpW5g&ust=1633607155314000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIillYTbtfMCFQAAAAAdAAAAABAD","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestechcouncil%2F2020%2F12%2F16%2Ftrade-offs-in-software-engineering%2F&psig=AOvVaw2qLBhwjDbCIOkg5RQNpW5g&ust=1633607155314000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIillYTbtfMCFQAAAAAdAAAAABAD"],
        description:"it is fantastic one to explore",basePrice:80000,sellPrice:90000,categoryName:"Mobiles",Tags:"iphone models",additionalInformation:"releases soon"
    },
     { name:"iphone 6",thumbnail:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestechcouncil%2F2020%2F12%2F16%2Ftrade-offs-in-software-engineering%2F&psig=AOvVaw2qLBhwjDbCIOkg5RQNpW5g&ust=1633607155314000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIillYTbtfMCFQAAAAAdAAAAABAD",
     product_gallery:["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestechcouncil%2F2020%2F12%2F16%2Ftrade-offs-in-software-engineering%2F&psig=AOvVaw2qLBhwjDbCIOkg5RQNpW5g&ust=1633607155314000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIillYTbtfMCFQAAAAAdAAAAABAD","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestechcouncil%2F2020%2F12%2F16%2Ftrade-offs-in-software-engineering%2F&psig=AOvVaw2qLBhwjDbCIOkg5RQNpW5g&ust=1633607155314000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIillYTbtfMCFQAAAAAdAAAAABAD"],
     description:"it is fantastic one to use",basePrice:50000,sellPrice:55000,categoryName:"Mobiles",Tags:"iphone models",additionalInformation:"production stops soon"
    },
     { name:"iphone 13",thumbnail:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestechcouncil%2F2020%2F12%2F16%2Ftrade-offs-in-software-engineering%2F&psig=AOvVaw2qLBhwjDbCIOkg5RQNpW5g&ust=1633607155314000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIillYTbtfMCFQAAAAAdAAAAABAD",
     product_gallery:["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestechcouncil%2F2020%2F12%2F16%2Ftrade-offs-in-software-engineering%2F&psig=AOvVaw2qLBhwjDbCIOkg5RQNpW5g&ust=1633607155314000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIillYTbtfMCFQAAAAAdAAAAABAD","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestechcouncil%2F2020%2F12%2F16%2Ftrade-offs-in-software-engineering%2F&psig=AOvVaw2qLBhwjDbCIOkg5RQNpW5g&ust=1633607155314000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIillYTbtfMCFQAAAAAdAAAAABAD"],
     description:"it is fantastic one to explore and filming a feature film",basePrice:120000,sellPrice:130000,categoryName:"Mobiles",Tags:"iphone models",additionalInformation:"releases soon"}
   ];
   const db = client.db("E-commerce");
    function insert(){
    db.collection("products").insertMany(myobj, function (err, res) {
           if (err)
               throw err;
           console.log("Number of records inserted: " + res.insertedCount);
           
       })};
    function update(){
        var myquery = { name:"iphone 13" };
        var newvalues = { $set: {name: "iphone 13 pro" } };
        db.collection("products").updateOne(myquery,newvalues, function (err) {
               if (err)
                   throw err;
               console.log("uploaded successfully ");
               
           })};
    function del(){
        db.collection("products").deleteOne({name:"iphone 6"},function (err, result) {
                if (err)
                    throw err;
                console.log("deleted successfully ",result.deletedCount);
                
            })};
           
    function read(){
        db.collection("products").find().toArray( function (err, result) {
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




