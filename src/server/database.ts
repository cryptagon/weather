import * as sqlite3 from 'sqlite3'

const FILE = 'database.sqlite'

export default class Database {

  db: sqlite3.Database

  constructor() {
    this.db = new sqlite3.Database(FILE)
  }

  test() {
    this.db.serialize(() => {
      this.db.run("CREATE TABLE IF NOT EXISTS hello (id INT, message TEXT)")

      const insert = this.db.prepare("INSERT INTO hello VALUES (?,?)")
      insert.run(1, "hello world")

      this.db.each("SELECT id, message FROM hello", (err, row) => console.log(row.message))

      this.db.run("DROP TABLE hello")
    })
  }

}
