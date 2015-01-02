/**
* Pet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

 attributes: {
    name: {
	  type: 'string',
	  required: true,
	  minLength: 3,
	  maxLength: 100
	},

    password: {
      type: 'string',
      required: true,
      minLength: 7,
    },
 	email: {
      type: 'email',
      required: true
    },
    age: {
      type: 'integer',
      min: 0
    },

    //  // Add a reference to Pets
    marks: {
       collection: 'mark',
       via: 'owner'
     }, 

 // Add a reference to Pet
        shares: {
            collection: 'mark',
            via: 'sharedby'
        },

    buddies: 'array',
  


    // Override toJSON instance method
    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  }
};

