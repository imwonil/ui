const Usertorage = require("../../models/UserStorage")

const adminUserInfo = require("../../adminModels/adminUserInfo")
const adminUserUserStorage = require("../../adminModels/adminUserStorage")
const User = require("../../models/User")
const Benchs = require("../../models/Benchs");
const moment = require("moment")
const  express = require("express");

const  router = express.Router();
const fs = require('fs').promises



const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.mqtt-dashboard.com", { clientid: "emc22wonil/wonil/ilim" });


const output = {
  




   newLogin: (req, res) => {
      res.render("home/newLogin")
   },
   register: (req, res) => {
      res.render("home/register")
   },
   certification: (req, res) => {
      res.render("home/certification")
   },


 


   
//    Https:(req, res) => {
//       res.render("home/Https")
//   }

};


const process = {
 
   Login: async (req, res) => {

   },
   register: async (req, res) => {
      const users = new User(req.body)
      const response = await users.register()
      
      return res.json(response)

   },

   

 







   // enter: async (req, res) => {

   //   const benchs = new Benchs(req.body)
   //   const respons =await benchs.getNext()


   //     if(respons === "goodsfalse"){
   //        return res.json(respons)
   //     }
   //    else if (respons.success === true) {
   //       //MQTT 보내는 쪽
   //       var topic = "emc22wonil/wonil/ilim"
   //       var message = "2"
   //       var options = {
   //          retain: true,
   //          qos: 0 // 정확도

   //       };

   //       // 받는곳_1
   //       var count = 0
   //       client.on("message", function (topic, msg, packet) {
   //          console.log(" messabe : " + msg);


   //       });
   //       // 받는곳_2
   //       client.on("connect", function () {
   //          // console.log("connected " + client.connected);
   //          client.subscribe(topic, { qos: 0 });

   //       })


   //       //publish  발해하는 곳
   //       function publish(topic, message, options) {
   //          console.log(topic, message, "re", options)
   //          if (client.connected == true) {
   //             // console.log("publish :{ ", topic, " : ", message, "}")
   //             //topic으로 를 발행한다.

   //             client.publish(topic, message, options);

   //          }
   //       }


   //       publish(topic, message, options)
   //    }

   //    return res.json(respons)
   // },
}


module.exports = {
   output,
   process
}