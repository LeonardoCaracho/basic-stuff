module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'nodesql',
    define: {
        timestamps: true, //toda tabela tem created_at, updated_at
        underscored: true
    }
}

// yarn sequelize db:create
// yarn sequelize migration:create --name=create-users