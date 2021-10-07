var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var myobj = [
    { user_id:4578,total_items:3,products:["iphone 11,iphone 6,iphone 13"],
       billing_address:"evp park avenue,chennai",shipping_address:"balaji nagar,thuraiyur",transaction_status:"payment success",payment_mode:"debit card",payment_status:"success",order_status:"shipped" 
   },
    { user_id:9876,total_items:1,products:["iphone 13"],
    billing_address:"main road,kattupakkam",shipping_address:"venkadeshwara nagar,ramapuram",transaction_status:"payment success",payment_mode:"credit card",payment_status:"success",order_status:"dispatched"
   },
    { user_id:1236,total_items:2,products:["washing machine","tv"],
    billing_address:"dheeran nagar,thuraiyur",shipping_address:"pirivu road,thuraiyur",transaction_status:"payment success",payment_mode:"UPI",payment_status:"success",order_status:"Out for delivery"
   }
  ];
  const db = client.db("E-commerce");
   function insert(){
   db.collection("orders").insertMany(myobj, function (err, res) {
          if (err)
              throw err;
          console.log("Number of records inserted: " + res.insertedCount);
          
      })
   };
   function update()
   {
       var myquery = { user_id:1236 };
       var newvalues = { $set: {order_status:"Delivered" } };
       db.collection("orders").updateOne(myquery,newvalues,function (err) {
            if (err)
                throw err;
            console.log("uploaded successfully ");
           }
         )
      
   };
   function del(){
       db.collection("orders").deleteOne({order_status:"Delivered"},function (err, result) {
               if (err)
                   throw err;
               console.log("deleted successfully ",result.deletedCount);
               
           })};
          
   function read(){
       db.collection("orders").find().toArray( function (err, result) {
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





