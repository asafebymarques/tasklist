module.exports = {
    dialect: 'postgres',
    host: '127.0.0.1',
    username: 'postgres',
    password: 'admin',
    database: 'tasklist',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};