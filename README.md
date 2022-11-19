# Começando os estudos sobre REACT


## Anotações
no diretório do projeto, se utiliza:

### `cd (nome do projeto)`
é utilizado este comando no inicio de todo projeto para abrir a pasta do projeto

### `npm start`

Usando esse comando, será aberto um localhost [http://localhost:3000](http://localhost:3000) 
A pagina recarregará sempre que uma alteração for feita e salva

Voce pode sempre verificar se há erros em seu código utilizando o console do navegador


## `Aprendendo o básico de JSX`

Falando de forma simples, JSX é o Html que está juntamente com o JavaScript, podendo fazer a utilizagem de variáveis e equações


<img width="500px" src="./public/toReadme/JXS em html - react.png">


## `Aprendendo o básico sobre componentes`

Assim como toda aplicação há JSX, toda aplicação há componentes

Permite dividir a aplicação em partes

Precisamos criar um `arquivo de componentes`
E importa-lo onde precisamos utilizar

Normalmente ficam em uma pasta chamada `components`

Sempre criamos arquivos com a primeira letra de cada palavra em maiúscula,
como se pode ver no exemplo:

<img width="200px" src="./public/toReadme/arquivoComponent.png">

componentes podem ser importados e exportados em diferentes arquivos, veja o exemplo:

<img width="400px" src="./public/toReadme/HelloWord-Import.png">
<img width="400px" src="./public/toReadme/HelloWord-Export.png">


## `Aprendendo sobre Props`

- são valores passados para componentes

- podem deixa-los mais dinamicos
- ou seja, mudando a execução por causa do valor do prop.

- o valor é passado como um atributo na chamada do componente

<img width="400px" src="./public/toReadme/props-import.png">
<img width="400px" src="./public/toReadme/props-export.png">

## `Adicionando CSS no REACT`

O css pode ser adicionado de forma glocal na aplicação,
por meio do arquivo index.css por exemplo
- porém é possível	estilizar a nível de componentes
- utilizamos o CSS modules para isso 

- Basta criar um arquivo como: `Componente.module.css`
e chamar este css no componete


<img width="400px" src="./public/toReadme/module.png">

A estrutura é exatamente a mesma do css padrão

podem o nome do arquivo sempre se utiliza (nome do arquivo).module.css para dar-mos um padrão
a ele.

Logo após, no arquivo que desejamos aplicar o css, iremos exporta-lo: 

<img width="400px" src="./public/toReadme/css-export.png">

para aplicarmos o css em uma div, basta user className="styles.(nome da div)", veja abaixo:

<img width="400px" src="./public/toReadme/export.png">
