module.exports = Avatar => {

    // :: TODO: Method that seeds the database with the presets
    Avatar.generate = async () => {

    }

    // :: Public method that modifies an avatar and retrieves its info
    Avatar.render = async data => {
        console.log('data', data)
        const { name } = data
        let avatar
        try {
           avatar = await Avatar.upsertWithWhere({ where: { name }, data })
        } catch (error) {
            throw new Error(error)
        }
        return avatar
    }
};
