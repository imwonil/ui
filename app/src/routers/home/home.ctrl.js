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
  
   index: (req, res) => {

      res.render("home/index")
   },

   userGoodsKinds : (req, res) => {

      res.render("home/userGoodsKinds")
   },

    websocket: (req, res) => {

      res.render("home/websocket")
   },
   userAdministration: (req, res) => {

      res.render("home/userAdministration")
   },
   
   
   calender: (req, res) => {

      res.render("home/calender")
   },
   userAdministrationTotall: (req, res) => {

      res.render("home/userAdministrationTotall")
   },

   login: (req, res) => {
      res.render("home/login")

   },
   newLogin: (req, res) => {
      res.render("home/newLogin")
   },

   register: (req, res) => {
      res.render("home/register")


   },
   fee: (req, res) => {
      res.render("home/fee")


   },
   goodsPush: (req, res) => {

      res.render("home/goodsPush")


   },
   logout: (req, res) => {

      res.render("home/logout")


   },
   goodsKinds: (req, res) => {

      res.render("home/goodsKinds")


   },
   admin: (req, res) => {

      res.render("home/admin")


   },
   adminLogin: (req, res) => {

      res.render("home/adminLogin")


   },
   adminFee: (req, res) => {
      console.log(req.body)
      res.render("home/adminFee")


   },
   Kioce: (req, res) => {
      res.render("home/Kioce")


   },
   koko: (req, res) => {
      res.render("home/koko")


   },
   adminViews: (req, res) => {
      res.render("home/adminViews")


   },
   adminBench: (req, res) => {
      res.render("home/adminBench")
   },
   adminTimeAdd: (req, res) => {
      res.render("home/adminTimeAdd")
   },

   adminUinfo: (req, res) => {
      res.render("home/adminUinfo")
   },
   userInfor: (req, res) => {

      res.render("home/userInfor")
   },
   certification:(req, res) => {
       res.render("home/certification")
   },
   
   Https:(req, res) => {
      res.render("home/Https")
  }

};


const process = {
   login: async (req, res) => {

      const users = new User(req.body)

      const response = await users.login()
      
      
      return res.json(response)
   },
   newLogin: async (req, res) => {

   },
   register: async (req, res) => {
      const users = new User(req.body)
      const response = await users.register()
      
      return res.json(response)

   },

   index: async (req, res) => {
      
      const benchs = new Benchs(req.body)
      const response = await benchs.Add() //Bench 9 UserStrage 267
     
      return res.json(response)

   },

   userGoodsKinds : (req, res) => {

   },
   
   fee: async (req, res) => {
      const days = new Benchs(req.body)
      const response = await days.Acc()


   },
   logout: async (req, res) => {

      const users = new User(req.body)
      // const response =await  users.logoutTime(); //User.js 60 UserStorage 594
      const b = await users.loca();// User.js 80 UserStorage 523

      return res.json(b)
   },
   goodsKinds: async (req, res) => {
      const goods = new Benchs(req.body)
      const response = await goods.goodskinds() //User.js 30 -> UserStorage.js 595
      return res.json(response)
   },
   admin: (req, res) => {

   },
   adminLogin: (req, res) => {

      const adminuser = new adminUser(req.body)
      const response = adminuser.adminLogin()
      return res.json(response)

   },
   adminFee: async (req, res) => {

      const adminuserinfo = new adminUserInfo(req.body)
      const response = await adminuserinfo.adminUserSeve()//adminUserInfo.js 10 adminUserStorage.js 69
      // const b = await adminuserinfo.adminNext()

      return res.json(response)

   },

   adminBench: async (req, res) => {

      const benchs = new Benchs(req.body)
      const kinds = benchs.setKind()

      const KindsSet = await Usertorage.adminSet()
      // console.log(KindsSet)
      return res.json(KindsSet)

   },
   Kioce: async (req, res) => {
      console.log(req.body)
      const days = new Benchs(req.body)
      const ACC = await days.Acc()//Benchs.js 23 UserStorage UserStorage 321

      const admin = await adminUserUserStorage.adminInfo()
   
      return res.json(ACC)
   },
   adminViews: async (req, res) => {

      const adminId = new Benchs(req.body)

      const response = await adminId.modIfy()

      return res.json(response)

   },
   adminTimeAdd: async (req, res) => {
      const adminId = new adminUserInfo(req.body)
      const cls = Usertorage.objectCls(req.body)

   },
   adminUinfo: async (req, res) => {

      const adminId = new Benchs(req.body)
      const response = await adminId.adminNext()
      console.log(response)
      return res.json(response)


   },
   adminControl: (req, res) => {

      const adminId = new Benchs(req.body)
      adminId.TimeSubAdd() //Benchs 52 Userstorage timesubadd 862
   },

   goodsPush: async (req, res) => {

      const adminId = new Benchs(req.body)
      const response = await adminId.adimingoods()
      console.log(response,"djj")
       return res.json(response)

      // const adimingoods=await adminId.adimingoods()
   },

   userInfor: async (req, res) => {
      
      const benchs = new Benchs(req.body)

      const response = await benchs.Userinfor()

      return res.json(response)
   },
   logoutTime: async (req, res) => {
      console.log(req.body)
      const users = new User(req.body)
      const respons = await users.loguttime()

      return res.json(respons)

   },
   forcibley: async (req, res) => {
      console.log(req.body)
      const benchs = new Benchs(req.body)
      const respons = benchs.Forcibley()
      return res.json(respons)
   },
   koko: async (req, res) => {
     
      const benchs = new Benchs(req.body)
       const response = benchs.KoKo()
      console.log(response,'ctrl 206')
       return res.json(response)

   },


   nice: async (req, res) => {
      
   //   console.log(req.body,"dkfk")
      const users = new Benchs(req.body)
      const respons = await users.Nice() 

       return res.json(respons)

   },
   search: async (req, res) => {
      
     
         const users = new Benchs(req.body)
         const response =await users.SEARCH()
           
         return res.json(response)
   
      },
   certification: async (req, res) => {
      
     
      const users = new User(req.body)
      const respons = await users.certiFication()
      return res.json(respons)

   },
   enter: async (req, res) => {

     const benchs = new Benchs(req.body)
     const respons =await benchs.getNext()


       if(respons === "goodsfalse"){
          return res.json(respons)
       }
      else if (respons.success === true) {
         //MQTT 보내는 쪽
         var topic = "emc22wonil/wonil/ilim"
         var message = "2"
         var options = {
            retain: true,
            qos: 0 // 정확도

         };

         // 받는곳_1
         var count = 0
         client.on("message", function (topic, msg, packet) {
            console.log(" messabe : " + msg);


         });
         // 받는곳_2
         client.on("connect", function () {
            // console.log("connected " + client.connected);
            client.subscribe(topic, { qos: 0 });

         })


         //publish  발해하는 곳
         function publish(topic, message, options) {
            console.log(topic, message, "re", options)
            if (client.connected == true) {
               // console.log("publish :{ ", topic, " : ", message, "}")
               //topic으로 를 발행한다.

               client.publish(topic, message, options);

            }
         }


         publish(topic, message, options)
      }

      return res.json(respons)
   },
}

// setInterval(time, 2000)

// function time() {

//    console.log("koko")
   
//    }
module.exports = {
   output,
   process
}