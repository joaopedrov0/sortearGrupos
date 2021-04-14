function sortearGrupos() {
    console.log('Inicio da função')

    //definição das variáveis

    //pega os valores digitados
    var tamanhoGrupos = document.querySelector('#tamanhoGrupo').value
    console.log('tamanhoGrupos recebe: ' + tamanhoGrupos)

    var inputNomes = document.querySelector('#pessoas').value
    console.log('inputNome recebe: ' + inputNomes)

    //transforma a string que o usuario digitou e separa ela em uma array
    var nomes = inputNomes.split(" ")
    console.log('Array de nomes é gerada: ' + nomes)

    embaralhar(nomes)
    console.log('Array de nomes é embaralhada: ' + nomes)

    //pega o valor interno do "#resultado" do html
    var lista = document.querySelector('#resultado')
    console.log('html onde será colocado a lista é lido: ' + lista)

    var content = ""
    var num = 0
    for(var i = Math.ceil(nomes.length / tamanhoGrupos); i > 0; i--){
        //para cada grupo:
        num++
        var indice = i*tamanhoGrupos
        for(var a = tamanhoGrupos; a > 0; a--){
            //para cada membro do grupo
            indice--
            content += '<li>' + nomes[indice] + '</li>'
            console.log(nomes[indice])
        }
        lista.innerHTML += '<div class="box"><h2>Grupo ' + num + '</h2><ul>' + content + '</ul></div>'
        content = ""
    }
}



function embaralhar(array){
    var indice_atual = array.length, valor_temporário, indice_aleatório
    while(indice_atual !== 0){
      indice_aleatório = Math.floor(Math.random() * indice_atual)
      
      indice_atual--
      
      valor_temporário = array[indice_atual]
      
      array[indice_atual] = array[indice_aleatório]
      
      array[indice_aleatório] = valor_temporário
      
    }
    return(array)
  }