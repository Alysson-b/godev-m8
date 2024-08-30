// aqui nos vamos aguardar o retorno de uma promise em 1s  //


function dados(url){
    return new Promise((resolve, rejeita)=>{
        setTimeout(()=>{
            if(url){
                resolve(`Dados: ${url}`)
            }else{
                rejeita('NAO ENCONTRADO')
            }
        }, 1000)
    })
}
// funçao com promises // 
dados('https://instagram.com')
    .then(dados =>{
        console.log(dados)
    })
    .catch(erro =>{
        console.log(erro)
})

// agora com uma funçao async //
// aqui o await espera a promise retornar os dados //
// try cacth para tratar os erros //

async function dados(){
    try{
        const infor = await dados('https://instagram.com')
        console.log(dados)
    } catch (erro){
        console.error(erro)
    }
}

dados()