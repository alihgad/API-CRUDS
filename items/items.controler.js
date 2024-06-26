import connect from './../DB/connection.js';


//=============== get data =============================

export const getData = (req ,res)=>{
    connect.execute(` select * from items `,(err,result)=>{
        if(err) return res.json({msg:'query error',error:err})
       return res.json({result});
    })
}


//=============== add data =============================

export const addData = (req ,res)=>{
    const {name , price , category , description} = req.body
    let query = `insert into items (name, price, category, description) values ('${name}', '${price}', '${category}', '${description}')`
    connect.execute(query,(err,result)=>{
        if (err){
            return res.status(500).json({msg: 'query error' , err})
        }

        console.log(result);
        res.status(200).json({msg : 'done',result});
    })

}


//=============== update data =============================

export const updateData = (req ,res)=>{
    const {id , name , price , category , description} = req.body
    let query = `UPDATE items set name = '${name}' , price = '${price}' , category = '${category}' , description = '${description}' where id = '${id}'`
    connect.execute(query,(err,result)=>{
        if (err){
            return res.status(500).json({msg: 'query error' , err})
        }

        console.log(result);
        if(result.affectedRows > 0){
            return res.status(200).json({msg:'done'});
        }else{
            return res.status(500).json({msg:'error'});
        }
    })

}


//=============== delete data =============================

export const deleteData = (req ,res)=>{
    const {id} = req.body
    let query = `delete from items where id = '${id}' `
    connect.execute(query,(err,result)=>{
        if (err){
            return res.status(500).json({msg: 'query error' , err})
        }

        console.log(result);
        if(result.affectedRows > 0){
            res.status(200).json({msg:'done'});
        }else{
            res.status(500).json({msg:'error'});
        }
    })

}


