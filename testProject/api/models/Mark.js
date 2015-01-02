/**
* Mark.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	message: {
  		type: 'json',
  		required: true
    },


 
	owner: {
      model: 'pet'
     },
  // Add a reference to User
    // Add a reference to User
        sharedby: {
            collection: 'pet',
            via: 'shares',
            dominant:true
        }
 	// comments: {
  //     model: 'comment'
  //   }

    }
};

