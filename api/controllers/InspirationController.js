/**
 * InspirationController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

 'new': function(req, res) {
   
  },


  create: function(req, res, next) { 
   Inspiration.create(req.params.all(), function inspirationCreated(err, inspiration) {
      if (err) {
       console.log(err);
      }
     //socket stuff
      inspiration.save(function(err, inspiration){
        if (err) return next(err);
     Inspiration.publishCreate(inspiration); 

     //Inspiration.publishCreate(inspiration.id) {
       //new_inspiration: true,
       //id: inspiration.id
     //});
     });

   })

  },
  
    
  
 subscribe: function(req, res) {

     Inspiration.find(function foundInspirations(err, inspirations) {
       if (err) return next(err);

       Inspiration.subscribe(req.socket);

       Inspiration.subscribe(req.socket, inspirations);

       res.send(200);
     });

   },
                     
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to InspirationController)
   */
  _config: {}

  
};
