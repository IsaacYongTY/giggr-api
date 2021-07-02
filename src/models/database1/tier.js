'use strict';

module.exports = (sequelize, DataTypes) => {

    const Tier = sequelize.define('tier', {

        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },

    }, {
        timestamps: false,
        underscored: true
    })

    Tier.associate = models => {
        Tier.hasMany(models.user)
    }
    return Tier
}
