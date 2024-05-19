import mysql from 'mysql2'

let connect =  mysql.createConnection('mysql://utsnh7g2nt2mtoqy:R8vUnB43rKkXAMdGdZPu@bpjsiqy2jjodf6qlyqok-mysql.services.clever-cloud.com:3306/bpjsiqy2jjodf6qlyqok')


connect.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('connected')
    }
})

export default connect