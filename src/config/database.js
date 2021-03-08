module.exports = {
   
    //Postgres
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
    //MYSQL
    /*
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '8889',
    username: 'root',
    password: 'root',
    database: 'tasklist',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },*/
};