import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Authors extends Model {
  declare id: number;
  declare name: string;
};

Authors.init({
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: INTEGER,
    },
    name: {
      allowNull: false,
      type: STRING
    }
  }, {
    sequelize: db,
    modelName: 'Books',
    timestamps: false,
  });

export default Authors;

