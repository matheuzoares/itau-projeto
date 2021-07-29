# Projeto Itaú
Repositório do Desafio Gama: Cadastro Pessoal

# Sobre o Projeto:
- Para o projeto, foi pensado em construir um formulário conciso de forma que um usuário comum possa usar sem maiores dificuldades.
- Uma paleta de cores simples foi implementada, que incluem <b>purple</b>, <b>indigo</b> e tons de cinza.
- Procurei dividir o cadastro em etapas simples, para evitar o acúmulo de informações em uma só tela.
- Cada etapa deixa bem claro que tipo de informações o usuário deve colocar, através de uma linguagem interativa e amigável.
- O site abre uma tela que convida o usuário a apertar um botão roxo e chamativo, que o leva à próxima página e inicia as etapas de cadastro.
- A página seguinte pede para o usuário colocar suas informações pessoais mais básicas, tais como nome, CPF, RG e sexo.
- Vale notar que os botões "Voltar" e "Avançar" são diferentes, pois o primeiro é mais discreto de forma que o segundo possa se destacar e facilmente localizado e pressionado.
- Ademais, o clique dos botões faz a página retornar ao topo, de forma que facilite a visualização pelo usuário, implementado com JavaScript.
- Os campos nome e CPF são obrigatórios. Ou seja, através de JavaScript, o usuário não pode prosseguir para a próxima página sem ter preenchido esses campos.
- As informações que não foram preenchidas deixarão vermelho o <b>border-bottom</b> dos campos e exibirão um <b>placeholder</b>, na cor vermelho claro, escrito "Campo obrigatório".
- Além disso, há um validador de CPF, implementado com JavaScript, que altera o <b>value</b> da <b>label</b> para "CPF VÁLIDO", na cor verde, e "CPF INVÁLIDO", na cor vermelha; ambos com um <b>font-weight</b> de 600.
- A página "Endereço" tem como informações obrigatórias os campos endereço e número, além do bairro, cidade, estado e CEP. O campo estado foi implementado com a tag <b>select</b> por se tratar de um pequeno número de opções facilmente selecionável, ao contrário das cidades e bairros, por exemplo.
- A penúltima etapa de cadastro pede que o usuário insira suas informações de contato, sendo obrigatório o campo telefone celular.
- Nesta etapa, o botão que era "Avançar" passa a ser "Concluir".
- Ao clicar em "Concluir", o usuário será levado a uma página de confirmação de cadastro. É importante que o site mostre um feedback para o usuário ter certeza de que suas ações foram bem sucedidas.
- Por fim, foi implementado também responsividade para que o site possa ser visualizado em celulares sem quaisquer entraves, exibindo as informações necessárias para o usuário de forma confortável e utilizável. 

# Link do Site:
https://projeto-matheus.netlify.app/

# Link do Repositório:
https://github.com/matheuzoares/itau-projeto

# Perfil do LinkedIn:
https://www.linkedin.com/in/matheuzoares/

# Links de Pesquisa:
[Formulário de várias páginas](https://www.w3schools.com/howto/howto_js_form_steps.asp)\
[Responsividade](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)\
[Scroll para cima](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)\
[Validar CPF](https://www.devmedia.com.br/validar-cpf-com-javascript/23916)\
[Obter ID de um elemento](https://stackoverflow.com/questions/3623110/get-an-elements-id)\
[Select de estados](https://velhobit.com.br/programacao/carregando-cep-cidades-dinamicamente.html)
