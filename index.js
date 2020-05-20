const fs = require("fs")
let data = JSON.parse(fs.readFileSync(`./user.json`, 'utf-8'))
Object.keys(data.relationships).forEach(b=>{
    if(data.relationships[b].type == 1){
    console.log(data.relationships[b].user.username + "#" + data.relationships[b].user.discriminator + "-" + data.relationships[b].user.id)
    fs.appendFile('./friends.txt', data.relationships[b].user.username + "#" + data.relationships[b].user.discriminator + '\n', (err) => {
        if (err) throw err;
    })
    }
})
