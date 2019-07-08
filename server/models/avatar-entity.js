module.exports = AvatarEntity => {
    AvatarEntity.validatesInclusionOf('name', { 
        in: ['John', 'Jane'],
        message: 'The only avatars available are `John` and `Jane`. Please use one of them.'
    });
};