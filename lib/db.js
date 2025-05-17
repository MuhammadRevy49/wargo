import mysql from "mysql2/promise";

export async function connectDB() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });
        console.log("Alhamdulillah koneksi berhasil.");
        return connection;
    } catch (error) {
        error.console("Astaghfirullah koneksi gagal.", message.error);
        throw error;
    }
}