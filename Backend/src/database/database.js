import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(process.env.MYSQL_URL, {
    define: { timestamps: false },
});