const { Sequelize } = require("sequelize");
const database = require("../database/db");

const Artists = database.sequelize.define(
    "artists",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        type:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        img:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        description:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        playlist:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        last_release:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        link_last_release:{
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updateAt: false,
    }
);

const initTable = async () => {
    await Artists.sync();
}

initTable(); 

module.exports = Artists ;