import { sql } from './DB.js'
 

sql`
CREATE TABLE videos(
	id 			TEXT PRIMARY KEY,
	title		TEXT,
	description TEXT,
	duration	INTEGER
	
)
	`.then(() => {
		console.log("tabela criada !")
	})