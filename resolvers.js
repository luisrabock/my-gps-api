const user = {
    _id: '1',
    name: 'Luis',
    email: 'luis@rocketlab.com.br',
    picture: 'https://cloudinary.com/asfd',
};

module.exports = {
    Query: {
        me: () => user,
    },
};
