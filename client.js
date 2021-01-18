const grpc = require('grpc')

const NoteService =  grpc.load('notes.proto').NoteService 

const client = new NoteService('localhost:50051',
grpc.credentials.createInsecure())


client.list({},(err,notes)=>{
    if(err) {
        console.error(err)
        return
    }
    console.log(notes)
})

// client.insert({id: "12", title: 'New Note', content: 'New Content'},(err,notes)=>{
//     if(err) {
//         console.error(err)
//         return
//     }
//     console.log(notes)
// })