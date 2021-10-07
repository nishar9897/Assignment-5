var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   var myobj = [
     { first_name: "sk", last_name: "joshua",email:"sk@valuebound.com",profile_img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oberlo.com%2Fmedia%2F1603970279-pexels-photo-3.jpg%3Ffit%3Dmax%26fm%3Djpg%26w%3D1824&imgrefurl=https%3A%2F%2Fwww.oberlo.com%2Fblog%2Ffree-stock-image-websites&tbnid=-A5jHyZ00YJt5M&vet=12ahUKEwjHvq700bXzAhVwsksFHVy2C24QMygqegUIARCoAg..i&docid=ZWwsYhMG0KCLqM&w=880&h=450&q=image&ved=2ahUKEwjHvq700bXzAhVwsksFHVy2C24QMygqegUIARCoAg",role:"Software engineer" },
     { first_name: "aryan", last_name: "enoch" ,email:"aryan@valuebound.com",profile_img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oberlo.com%2Fmedia%2F1603970279-pexels-photo-3.jpg%3Ffit%3Dmax%26fm%3Djpg%26w%3D1824&imgrefurl=https%3A%2F%2Fwww.oberlo.com%2Fblog%2Ffree-stock-image-websites&tbnid=-A5jHyZ00YJt5M&vet=12ahUKEwjHvq700bXzAhVwsksFHVy2C24QMygqegUIARCoAg..i&docid=ZWwsYhMG0KCLqM&w=880&h=450&q=image&ved=2ahUKEwjHvq700bXzAhVwsksFHVy2C24QMygqegUIARCoAg",role:"Software engineer"},
     { first_name: "tiny", last_name: "shan" ,email:"tiny@valuebound.com",profile_img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oberlo.com%2Fmedia%2F1603970279-pexels-photo-3.jpg%3Ffit%3Dmax%26fm%3Djpg%26w%3D1824&imgrefurl=https%3A%2F%2Fwww.oberlo.com%2Fblog%2Ffree-stock-image-websites&tbnid=-A5jHyZ00YJt5M&vet=12ahUKEwjHvq700bXzAhVwsksFHVy2C24QMygqegUIARCoAg..i&docid=ZWwsYhMG0KCLqM&w=880&h=450&q=image&ved=2ahUKEwjHvq700bXzAhVwsksFHVy2C24QMygqegUIARCoAg",role:"Software engineer"},
     { first_name: "shan", last_name: "venkat" ,email:"shan@valuebound.com",profile_img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oberlo.com%2Fmedia%2F1603970279-pexels-photo-3.jpg%3Ffit%3Dmax%26fm%3Djpg%26w%3D1824&imgrefurl=https%3A%2F%2Fwww.oberlo.com%2Fblog%2Ffree-stock-image-websites&tbnid=-A5jHyZ00YJt5M&vet=12ahUKEwjHvq700bXzAhVwsksFHVy2C24QMygqegUIARCoAg..i&docid=ZWwsYhMG0KCLqM&w=880&h=450&q=image&ved=2ahUKEwjHvq700bXzAhVwsksFHVy2C24QMygqegUIARCoAg",role:"Software engineer"},
     { first_name: "ram", last_name: "shan" ,email:"ram@valuebound.com",profile_img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oberlo.com%2Fmedia%2F1603970279-pexels-photo-3.jpg%3Ffit%3Dmax%26fm%3Djpg%26w%3D1824&imgrefurl=https%3A%2F%2Fwww.oberlo.com%2Fblog%2Ffree-stock-image-websites&tbnid=-A5jHyZ00YJt5M&vet=12ahUKEwjHvq700bXzAhVwsksFHVy2C24QMygqegUIARCoAg..i&docid=ZWwsYhMG0KCLqM&w=880&h=450&q=image&ved=2ahUKEwjHvq700bXzAhVwsksFHVy2C24QMygqegUIARCoAg",role:"Software engineer"}
   ];
   const db = client.db("E-commerce");
    function insert(){
    db.collection("user").insertMany(myobj, function (err, res) {
           if (err)
               throw err;
           console.log("Number of records inserted: " + res.insertedCount);
           
       })};
    function update(){
        var myquery = { first_name:"Nishar" };
        var newvalues = { $set: {role: "senior software engineer", email:"nishar.ramesh@valuebound.com" } };
        db.collection("user").updateOne(myquery,newvalues, function (err) {
               if (err)
                   throw err;
               console.log("uploaded successfully ");
               
           })};
    function del(){
        db.collection("user").deleteOne({role:"Software engineer"},function (err, result) {
                if (err)
                    throw err;
                console.log("deleted successfully ",result.deletedCount);
                
            })};
           
    function read(){
        db.collection("user").find().toArray( function (err, result) {
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


