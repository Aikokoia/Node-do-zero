/*import { createServer } from 'node:http' //file system (node:fs) crypto (node:crypto) criação de http >> node:http

const server = createServer ((request,response) => { //request obter dados da requsição do usuario // response devolve uma resposta para quem chama a API 
    response.write("ola")


    return response.end()
} )

server.listen(3333) */

// métodos : POST, GET, DELET 
//localhost:3333/videos

// isntalamos um micro framwork que se chama fastify

// metodo get obtem alguma informação 
// post cria um registo 
// put altera 
// delete deleta 
// patch pode mudar somente uma informação 

import { fastify } from 'fastify' 
//import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()


const database = new DatabasePostgres()

server.post("/videos", async (request,reply) => {
    const { title, description, duration } = request.body

    await database.create({
        title,
        description,
        duration,

    })

    return reply.status(201).send
})

server.get("/videos", async (request) => {
    const search = request.query.search

    var videos = await database.list(search)

    return videos
})
//route parameter, é um parametro enviado na propria rota :ID
server.put("/videos/:id",  async (request,reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body


    await database.update(videoId, {
        title,
        description,
        duration
    })

    return reply.status(204).send() //204 = resposta com sucesso mas sem conteúdo
})

server.delete("/videos/:id", async (request,reply) => {
    const videoId = request.params.id
    
    await database.delete(videoId)

    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port : process.env.PORT ?? 4000,
   
})

//CRUD é create read update delete o que são todas as operações basicas em uma entidade no nosso codigo