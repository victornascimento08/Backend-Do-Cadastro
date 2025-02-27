import mysql from "mysql2/promise";

export default async function conectar() {
    //criar um pool de conexões
    if (global.poolConexoes){
        return await global.poolConexoes.getConnection();
    } else {
        global.poolConexoes = mysql.createPool({
            host: 'localhost',
            user: 'root',
            database: 'backend',
            port: 3324,
            password: 'Tabapora2003@',
            waitForConnections: true,
            connectionLimit: 20,
            maxIdle: 10, 
            idleTimeout: 60000, 
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
          });
        
          return await global.poolConexoes.getConnection();
    }

}