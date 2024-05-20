import mysql from 'mysql2'

let connect =  mysql.createConnection('mysql://items_purplebest:284b75c41423cf9115993d847e83b93c32e79b5b@8w3.h.filess.io:3307/items_purplebest')


connect.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('connected')
    }
})

export default connect