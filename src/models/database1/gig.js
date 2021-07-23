'use strict';

module.exports = (sequelize, DataTypes) => {


    const Gig = sequelize.define('gig', {
            title: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            description: DataTypes.TEXT,
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            date: DataTypes.DATEONLY,
            time: DataTypes.TIME,
            venue: DataTypes.STRING(100),
            pay: DataTypes.FLOAT,
            isRepeat: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            frequency: {
                type: DataTypes.STRING(20)
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
