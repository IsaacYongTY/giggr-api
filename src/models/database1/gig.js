'use strict';

module.exports = (sequelize, DataTypes) => {


    const Gig = sequelize.define('gig', {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: DataTypes.TEXT,
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            date: DataTypes.DATEONLY,
            time: DataTypes.TIME,
            venue: DataTypes.STRING,
            pay: DataTypes.FLOAT,
            isRepeat: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            frequency: {
                type: DataTypes.STRING
            }


        }, {
            underscored: true
        }
    )

    Gig.associate = models => {
        Gig.belongsTo(models.user)

    }
    return Gig
}
