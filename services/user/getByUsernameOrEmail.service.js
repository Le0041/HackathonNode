import getPool from "../../db/getPool.js";
import errors from '../../helpers/error.helpers.js' 

const main = async (username, email) => { 
    try {
        const pool = await getPool();
        const sqlQuery  = 'SELECT * FROM users WHERE username = ? or email = ?';
        const values = [username, email];
        const [users] = await pool.query(sqlQuery,values);

        return users;
      
    } catch (error) {
        errors.internalServerError(error.message, 'DATA_QUERY_ERROR');
    }
}

export default main;