import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map()// armazena os videos 

    // Set é como se fosse um array mas nao aceita valores duplicados 
    // Map é como se fosse um objeto com particularidades 
    list(search){

       return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0] // id do video na posição 0 
            const info = videoArray[1] // outras informações na posição 1

            return{
                id, 
                ...info, //spread operator
            } // retornando um objeto com a informação dos objetos 
       }).filter(video => {
            if (search){
                return video.title.includes(search)
              }else {
                return true
              }
       })
       
   }

    create(video){ 
        const videoId = randomUUID()

         this.#videos.set(videoId, video)
         //esta adicionando um video ao array usando (set) com a chave e o valor 
        
    }

    update(id, video){ 
        this.#videos.set(id, video)
   }

    delete(id){ 
        this.#videos.delete(id)
    }   
}