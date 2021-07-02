const Database = require("./config")

const initDB = {//iniciar banco de dados
    async init(){
        const db = await Database()

        db.exec(`CREATE TABLE rooms (id INTEGER PRIMARY KEY, pass TEXT)`)

        await db.exec(`CREATE TABLE questions (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, read INT, room INT)`)

        await db.close()
    }
}

initDB.init()