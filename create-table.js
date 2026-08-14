import { sql } from "./db.js";
// sql`DROP TABLE IF EXISTS videos`.then(() => {
//   console.log("Tabela Apagada!");
// });

sql`CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    duration INTEGER NOT NULL
);`.then(() => {
  console.log("Tabela criada");
});
