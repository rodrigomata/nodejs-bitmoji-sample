'use strict';

module.exports = Avatar => {

    Avatar.render = async data => {
        console.log('data', data)
        return 
    }

    Avatar.remoteMethod('render', {
        accepts: {
            arg: 'name', 
            type: 'string'
        },
        returns: {
            arg: 'data', 
            type: 'Avatar'
        }
  });
};
