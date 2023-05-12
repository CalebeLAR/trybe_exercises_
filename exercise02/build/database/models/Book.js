"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Author_1 = __importDefault(require("./Author"));
const _1 = __importDefault(require("."));
class Book extends sequelize_1.Model {
}
Book.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER
    },
    title: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    authorId: {
        // field: 'author_id',
        allowNull: false,
        type: sequelize_1.INTEGER,
        references: {
            model: 'authors',
            key: 'id'
        }
    },
    genreId: {
        // field: 'genre_id',
        allowNull: false,
        type: sequelize_1.INTEGER,
        references: {
            model: 'genres',
            key: 'id'
        }
    },
}, {
    sequelize: _1.default,
    modelName: 'books',
    timestamps: false,
    underscored: true,
});
Book.belongsTo(Author_1.default, { foreignKey: 'authorId', as: 'author' });
Author_1.default.hasMany(Book, { foreignKey: 'authorId', as: 'author' });
exports.default = Book;
