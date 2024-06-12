const { db } = require("./app.js");

db.connect(async (err) => {
  console.error(err);
  console.log("Start migration");

  await db.query(`CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        user_id BIGINT NOT NULL,
        message TEXT
    )`);

  console.log("Migration completed");
  db.end();
});
