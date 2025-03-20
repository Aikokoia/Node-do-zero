import 'dotenv/config'
import postgres from 'postgres'

 const URL = 'postgresql://neondb_owner:npg_WIBjbE5SKu2Y@ep-lucky-grass-a5tiu5un-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require'

export const sql = postgres(URL, { ssl: 'require' } )

