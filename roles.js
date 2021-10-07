var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   var myobj = [
     { name:"akim",slug:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestechcouncil%2F2020%2F12%2F16%2Ftrade-offs-in-software-engineering%2F&psig=AOvVaw2qLBhwjDbCIOkg5RQNpW5g&ust=1633607155314000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIillYTbtfMCFQAAAAAdAAAAABAD"},
     { name:"amit",slug:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestechcouncil%2F2020%2F12%2F16%2Ftrade-offs-in-software-engineering%2F&psig=AOvVaw2qLBhwjDbCIOkg5RQNpW5g&ust=1633607155314000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIillYTbtfMCFQAAAAAdAAAAABAD"},
     { name:"aasif",slug:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestechcouncil%2F2020%2F12%2F16%2Ftrade-offs-in-software-engineering%2F&psig=AOvVaw2qLBhwjDbCIOkg5RQNpW5g&ust=1633607155314000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIillYTbtfMCFQAAAAAdAAAAABAD"}
   ];
   const db = client.db("E-commerce");
    function insert(){
    db.collection("roles").insertMany(myobj, function (err, res) {
           if (err)
               throw err;
           console.log("Number of records inserted: " + res.insertedCount);
           
       })};
    function update(){
        var myquery = { name:"akim" };
        var newvalues = { $set: {name: "ahamed" } };
        db.collection("roles").updateOne(myquery,newvalues, function (err) {
               if (err)
                   throw err;
               console.log("uploaded successfully ");
               
           })};
    function del(){
        db.collection("roles").deleteOne({name:"ahamed"},function (err, result) {
                if (err)
                    throw err;
                console.log("deleted successfully ",result.deletedCount);
                
            })};
           
    function read(){
        db.collection("roles").find().toArray( function (err, result) {
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



