function tratarErroELancar(error) {
   //throw new Error('.....')
   // throw 10
//    throw true 

    throw {
        nome: error.name,
        msg : error.message,
        date : new Date 
    }
}

function imorimirNomeGritando (obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
        } catch (e) {
            tratarErroELancar(e)
        } finally {
            console.log('final')
        }
}
const obj = { name:'Roberto'}
imorimirNomeGritando(obj)