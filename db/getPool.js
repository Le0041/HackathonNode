import mysql from 'mysql2/promise';
import { Pool } from 'mysql2/typings/mysql/lib/Pool';

const {
    MYSQL_HOST,
    MYSQL_DB,
    MYSQL_USER,
    MYSQL_PASS   
} = process.env;

let pool;
 
const getPool = async () => {
   try {
        if(!pool) {
          const poolTemp = mysql.createPool({
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASS,
          });

          await poolTemp.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`);

          pool = mysql.createPool({
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASS,
            database: MYSQL_DB,
            connectionLimit: 10,
            timezone: 'Z',
          });
        }
   } catch (error) {
    console.error(error);
   }
}

export default getPool;