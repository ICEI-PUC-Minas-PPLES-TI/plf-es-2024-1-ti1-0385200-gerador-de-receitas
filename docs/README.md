# Documentação do Projeto (TIDocs)

Esta pasta armazena a documentação do projeto para a disciplina de **Trabalho Interdisciplinar 1** dos cursos de Tecnologia da Informação da **[PUC Minas](https://pucminas.br)**. Essa documentação é estruturada na forma de um site que fica disponível por meio do GitHub Pages e pode ser incluído, também, no site da solução hospedada. Um [exemplo publicado do TIDocs](https://webtech-puc-minas.github.io/ti1-template/) está disponível por meio do repositório do **[WebTech PUC Minas](https://github.com/webtech-pucminas)**.

A documentação do projeto inclui as seguintes seções:

1. Introdução
2. Contexto
3. Concepção
4. Metodologia
5. Solução
6. FAQ (Questões frequentes)
7. Referências Bibliográficas

O template para o site é estruturado e permite que a equipe evolua a documentação do projeto à medida que avance no desenvolvimento.

---

# Introdução

Nosso projeto tem como objetivo principal auxiliar pessoas na arte da culinária, fornecendo orientações para cozinhar de maneira simples, fácil, prática e eficiente, mesmo com ingredientes limitados ou reaproveitando os que já estão disponíveis em casa. Além disso, buscamos ajudar aqueles que precisam economizar dinheiro na compra de ingredientes para a preparação de alimentos e reduzir o desperdício de alimentos no dia a dia.

## Informações Gerais

**Projeto:** KitchenCompanion
**Repositório GitHub:** [Gerador de Receitas](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-gerador-de-receitas)
**Membros da equipe:**

- Thiago Branco de Oliveira
- Diogo Gouvêa Bastos Braga
- João Vitor Ferreira Jacinto
- Miguel Augusto de Paula

---

# Contexto

## Problema

Muitas pessoas frequentemente enfrentam dificuldades ao cozinhar com poucos ingredientes ou ao encontrar maneiras de reutilizar os ingredientes ou alimentos que já possuem, resultando em desperdício e gastos desnecessários. Essa preocupação com os gastos tornou-se comum, pois muitos buscam economizar nas despesas com alimentos, mas raramente conseguem. Isso ocorre porque uma porção da populção não possui o conhecimento necessário para preparar refeições simples, práticas, rápidas e básicas, ou não sabe por onde ou como aprender novas receitas. Assim, muitas vezes acabam recorrendo a aplicativos e serviços de entrega de comida (delivery), resultando em gastos desnecessários e prejudicando a própria saúde aos poucos, uma vez que a maioria dos deliveries não oferece comidas muito saudáveis. E, mesmo quando oferecem, não é tão comum que as pessoas peçam comidas "100%" saudáveis.

A mesma situação ocorre quando vão às compras; muitas vezes as pessoas gastam muito dinheiro desnecessariamente com alimentos que não são saudáveis e que normalmente não precisam ser preparados para serem consumidos. Quanto ao desperdício de alimentos, além de ser, infelizmente, algo comum, também se tornou um problema sério, conforme apontado por uma pesquisa da Organização das Nações Unidas (ONU) em 2021. Esse tipo de descarte é o terceiro maior emissor de CO2 no mundo, contribuindo com aproximadamente 10% das emissões globais de gases de efeito estufa. Portanto, o desperdício de alimentos também é uma questão ambiental crucial, e nosso projeto busca mitigar todos esses problemas.

## Objetivo

Nosso projeto visa criar uma plataforma online (app/site web) que possa sugerir e gerar receitas com base nos ingredientes disponíveis para os usuários, auxiliando-os na preparação de pratos práticos, simples, básicos, rápidos e, o mais importante: saborosos e saudáveis. Além disso, a plataforma também oferecerá dicas extras sobre economia na cozinha, substituição de ingredientes, conservação de alimentos, reutilização saudável de alimentos, planejamento de refeições e muito mais. Dessa forma, não apenas ajudaremos os usuários a economizar dinheiro e reduzir o desperdício, mas também promoveremos uma maior conscientização ambiental, responsabilidade e uma melhor qualidade de vida através de uma alimentação mais saudável.

## Justificativa

A criação do nosso projeto "KitchenCompanion" baseia-se na crescente necessidade de conscientização e responsabilidade sobre a economia doméstica/alimentar, sustentabilidade e a falta de habilidades culinárias por parte da maioria das pessoas. Com o aumento dos preços dos alimentos e a preocupação crescente com o impacto ambiental do desperdício de alimentos, torna-se cada vez mais importante encontrar maneiras de maximizar o uso dos ingredientes disponíveis para preparar as refeições e minimizar o desperdício e os gastos. Além disso, como já mencionado, muitas pessoas têm dificuldade em encontrar receitas que possam ser feitas com ingredientes simples (ou baratos) que já possuem (ou não) em casa. Nossa plataforma pode resolver esses problemas, fornecendo aos usuários soluções vantajosas e receitas personalizadas com base nos ingredientes que já possuem (ou que sejam acessíveis), além de dicas sobre como economizar dinheiro e reduzir o desperdício na cozinha.

## Público-alvo

Nosso público-alvo é amplo e diversificado, pois a necessidade de cozinhar de forma eficiente e econômica é universal. No entanto, identificamos alguns grupos específicos que podem se beneficiar particularmente da nossa plataforma. Para cada um desses grupos, apresentamos brevemente as razões pelas quais nossa plataforma pode ser especialmente útil para eles:

**Estudantes:** Muitos estudantes, principalmente universitários ou aqueles que já estão estagiando e não possuem muito tempo, ou "não param em casa", vivem com um orçamento "apertado" e podem não ter muita experiência em cozinhar.

**Profissionais:** Não muito diferente dos estudantes, profissionais que trabalham em tempo integral podem ter pouca experiência e pouco tempo para planejar e preparar suas refeições.

**Famílias:** As famílias, especialmente as grandes, podem achar difícil cozinhar refeições que agradem a todos sem gastar muito dinheiro ou desperdiçar ingredientes/comida.

**Pessoas que vivem sozinhas:** Cozinhar para uma ou várias pessoas pode ser difícil, mas cozinhar para si mesmo pode ser ainda mais desafiador.

**Idosos:** Pessoas idosas podem ter necessidades dietéticas específicas ou podem ter dificuldade em preparar refeições mais complexas.

**Pessoas com restrições dietéticas:** Pessoas com alergias alimentares, intolerâncias ou que seguem dietas específicas (como veganismo, vegetarianismo, dieta sem glúten, entre outras) podem achar difícil encontrar receitas que atendam às suas necessidades.

**Aprendizes de culinária:** Pessoas que estão aprendendo a cozinhar e querem experimentar novas receitas ou pessoas que querem elevar o nível e desafiar suas próprias habilidades culinárias podem usar nosso site para encontrar receitas adequadas ao seu nível de habilidade e aos ingredientes que têm disponíveis no momento.

---

# Concepção (Design Thinking)

## Processo de Design Thinking

**1. Matriz CSD (Certezas, Suposições, Dúvidas)**

**Certezas:**

- O aplicativo será uma plataforma online que gera receitas com base nos ingredientes disponíveis para os usuários.
O público-alvo inclui estudantes, profissionais, famílias, pessoas que vivem sozinhas, idosos, pessoas com restrições dietéticas e aprendizes de culinária.
As pessoas têm acesso limitado a ingredientes.
As pessoas querem receitas rápidas e simples.
Muitas pessoas carecem de habilidades culinárias, resultando em gastos excessivos com serviços de entrega de alimentos.

**Suposições:**

Os usuários terão algum conhecimento básico de culinária.
Os usuários estarão dispostos a experimentar novas receitas.
As pessoas têm um orçamento específico para gastar com ingredientes.
As pessoas têm uma quantidade específica de utensílios de cozinha em casa.
As pessoas têm uma quantidade específica de tempo para cozinhar.

**Dúvidas:**

Como os usuários interagirão com o aplicativo?
Quais recursos adicionais os usuários gostariam de ver no aplicativo?
Eles não têm criatividade.
Eles não sabem cozinhar muito bem.

**2. Mapa de Stakeholders**

**Usuários:**

Estudantes
Profissionais
Famílias
Pessoas que vivem sozinhas
Idosos
Pessoas com restrições dietéticas
Aprendizes de culinária

**Desenvolvedores:**

Thiago Branco de Oliveira
Diogo Gouvêa Bastos Braga
João Vitor Ferreira Jacinto
Miguel Augusto de Paula

**Parceiros:**

Blogs de culinária e chefs online
Empresas de alimentos e bebidas
Nutricionistas e dietistas
Organizações sem fins lucrativos focadas em sustentabilidade alimentar

**3. Diagrama de Personas**

Já criamos algumas personas, incluindo Ana, Tony, Laura e Roberto. Cada persona tem um perfil detalhado que inclui idade, hobby, trabalho, personalidade, sonhos e objetivos com o aplicativo. (Detalhamento no próximo tópico)

**4. Mapa da Proposta de Valor**

Proposta de Valor: Uma plataforma online que gera receitas personalizadas com base nos ingredientes disponíveis para os usuários, promovendo economia, redução de desperdício e uma alimentação mais saudável.

Benefícios para o Usuário: Economia de dinheiro, redução do desperdício de alimentos, descoberta de novas receitas, melhoria das habilidades culinárias e qualidade de vida.

Valor para a Organização: Os usuários fornecem feedback valioso que pode ser usado para melhorar o aplicativo. Eles também podem promover o aplicativo para outros, aumentando a base de usuários, entre outras coisas.

**5. Mural de Possibilidades**

Possibilidade 1: Integração com redes sociais para compartilhar receitas
Possibilidade 2: Uma seção de comentários onde os usuários podem compartilhar suas experiências com as receitas
Possibilidade 3: A capacidade de salvar receitas favoritas para acesso fácil no futuro

**6. Mapa de Priorização**

**Alta Prioridade:**

Desenvolvimento do gerador de receitas
Funcionalidade de cadastro e login
Visualização de receita em tela cheia

**Média Prioridade:**

Funcionalidade de favoritar receitas
Visualização de histórico de receitas

**Baixa Prioridade:**

Lista de ingredientes recomendados para compra
Integração com redes sociais
Seção de comentários

---

# Especificações do Projeto

## Personas

**1. Persona: Ana**

- **Idade:** 40 anos
- **Hobby:** Assistir filmes e séries
- **Trabalho:** Médica
- **Personalidade:** Focada e esforçada
- **Sonhos:** Ser uma médica de renome
- **Objetivos com o aplicativo:** Ana é uma médica ocupada que valoriza seu tempo. Ela está interessada em aprender a cozinhar refeições rápidas e saudáveis após um longo dia de trabalho. Ela também está procurando maneiras de economizar dinheiro ao maximizar o uso dos ingredientes que já tem em casa.

**2. Persona: Tony**

- **Idade:** 22 anos
- **Hobby:** Jogar videogames e ler
- **Trabalho:** Estudante universitário
- **Personalidade:** Curioso, determinado e prático
- **Sonhos:** Se formar e morar fora do Brasil
- **Objetivos com o aplicativo:** Tony é um estudante que busca cozinhar algo rápido e saboroso com os recursos acessíveis. Ele está interessado em aprender a cozinhar e encontrar receitas fáceis e rápidas que podem ser preparadas depois de chegar em casa da universidade.

**3. Persona: Laura**

- **Idade:** 34 anos
- **Hobby:** Esportes e fotografia
- **Trabalho:** Fotógrafa freelancer
- **Personalidade:** Criativa, aventureira e consciente sobre saúde
- **Sonhos:** Viajar pelo mundo e documentar suas experiências através da fotografia
- **Objetivos com o aplicativo:** Laura é uma fotógrafa freelancer que passa muito tempo viajando para diferentes locais para seu trabalho. Ela está procurando maneiras de preparar refeições saudáveis e simples em qualquer lugar que esteja. Ela também está interessada em experimentar receitas de diferentes culturas.

**4. Persona: Roberto**

- **Idade:** 70 anos
- **Hobby:** Pescar e jardinagem
- **Trabalho:** Aposentado
- **Personalidade:** Calmo, metódico e consciente sobre saúde
- **Sonhos:** Aprender novas habilidades culinárias e preparar refeições saudáveis para seus netos
- **Objetivos com o aplicativo:** Roberto é um idoso que gosta de cozinhar para sua família. Ele está procurando por receitas simples e nutritivas que são fáceis de preparar. Ele também está interessado em aprender sobre substituição de ingredientes para acomodar suas necessidades dietéticas específicas. Além disso, ele gostaria de planejar suas refeições semanais e criar uma lista de compras eficiente.

---

## Histórias de Usuários

**Como um estudante universitário com orçamento limitado**, eu gostaria de encontrar receitas rápidas e econômicas, para que eu possa preparar refeições saudáveis e saborosas sem gastar muito tempo ou dinheiro.

**Como um profissional ocupado**, eu gostaria de acessar receitas que possam ser preparadas com antecedência, para que eu possa ter refeições prontas para consumir durante a semana de trabalho.

**Como pai/mãe de uma família grande**, eu gostaria de encontrar receitas que sejam versáteis e agradem a todos, para que eu possa preparar uma única refeição que satisfaça as preferências de toda a família.

**Como alguém que vive sozinho**, eu gostaria de encontrar receitas que sejam adequadas para porções individuais, para evitar o desperdício e preparar a quantidade certa de comida para uma refeição.

**Como um idoso**, eu gostaria de encontrar receitas simples e nutritivas que são fáceis de preparar, para atender às minhas necessidades dietéticas específicas e evitar a preparação de refeições complexas.

**Como uma pessoa com restrições dietéticas**, eu gostaria de filtrar receitas por tipo de dieta (como vegana, sem glúten, etc.), para que eu possa encontrar receitas que atendam às minhas necessidades nutricionais específicas.

**Como um aprendiz de culinária**, eu gostaria de usar o aplicativo para encontrar receitas adequadas ao meu nível de habilidade e aos ingredientes que tenho disponíveis no momento, para que eu possa experimentar novas receitas e desafiar minhas próprias habilidades culinárias.

---

## Requisitos

**Requisitos Funcionais:**

- O usuário deve ser capaz de acessar uma receita gerada por um banco de dados.
- O sistema deve permitir que o usuário se cadastre e faça login.
- O usuário deve ser capaz de visualizar a receita em tela cheia.
- O sistema deve permitir que o usuário favorite as receitas.
- O usuário deve ser capaz de visualizar seu histórico de receitas.
- O usuário deve ser capaz de visualizar suas receitas favoritas.

**Requisitos Não-Funcionais:**

- O sistema deve ser compatível com os navegadores Chrome e Mozilla.
- O sistema deve ser desenvolvido usando HTML, CSS e JS.
- O sistema deve utilizar o JSON Server para acessar o banco de dados.
- O design do sistema deve ser responsivo, adaptando-se a diferentes tamanhos de tela.
- O sistema deve ser capaz de gerar receitas com base nos ingredientes disponíveis/selecionados pelo usuário.

---

# Projeto de Interface

## User/Screen Flow e Protótipo interativo

[User-Flow](https://www.figma.com/file/ZNHwYf0uQvqoMS3YTv3oi0/Kitchen-Companion?type=design&node-id=26%3A45&mode=design&t=rUFez5oaggbkA7Aw-1)

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-gerador-de-receitas/assets/164224207/ba138624-f90c-4fbd-b757-7cf35426847b)

## Wireframes

[Wireframe](https://www.figma.com/file/ZNHwYf0uQvqoMS3YTv3oi0/Kitchen-Companion?type=design&node-id=0%3A1&mode=design&t=wkK34SY5DbemPRkl-1)

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-gerador-de-receitas/assets/164224207/16668b51-e58a-4761-a1a3-54e1bf090296)

---

# Metodologia

## Ferramentas

- **Figma:** Utilizado para a criação do User Flow, Wireframe e Protótipo.
- **Github:** Empregado para o rastreamento da documentação e do progresso do projeto.
- **Visual Studio Code:** Utilizado para a criação dos códigos HTML, CSS, JS e estrutura JSON em LocalStorage/SessionStorage e Document Object Model (DOM).
- **Replit:** Utilizado para a criação do JSON Server e estrutura geral JSON.

## Gestão do Projeto

- **Microsoft To-Do:** Utilizado para o rastreamento e a divisão de tarefas/papéis. Para criar um fluxo de trabalho efetivo, foi necessário fazer o acompanhamento das tarefas com este aplicativo fácil de usar. Nele, foi possível atribuir tarefas aos membros do grupo e, quando cada um terminava seu afazer, marcava como concluído. Uma solução simples e efetiva.
- **Discord:** Utilizado para reuniões semanais, correção dos códigos e implementações de algumas funcionalidades do site. Por meio de ligações, a plataforma permite a vizualização da tela de outros dispositivos em tempo real, facilitando a identificação e correção de problemas durante o desenvolvimentro dos códigos de cada parte das páginas do site, consequentemente auxiliando e sanando as dificuldades dos membros do time em relação a determinados assuntos durante o projeto.
- **WhatsApp:** Utilizado apenas para avisos e comunicados de caráter urgente e relevante para todos os membros do time. O aplicativo provou ser eficaz ao garantir que todos os membros se mantenham atualizados de forma rápida e eficiente.

## Controle de Versão

**Atribuição de Tarefas na Sprint 1:**

- **Thiago Branco de Oliveira:** Encarregado da criação do userflow, protótipo, wireframes, repositório e parte do design thinking.
- **Diogo Gouvêa Bastos Braga:** Responsável pela criação da apresentação em PowerPoint do grupo a respeito da introdução e apresentação do projeto.
- **João Vitor Ferreira Jacinto:** Encarregado da criação das histórias de usuário, aprimoramento da documentação e criação da lista de tarefas no Microsoft To-do.
- **Miguel Augusto de Paula:** Contribuiu com auxílio na documentação, na criação do mapa de stakeholders e parte do design thinking.

**Atribuição de Tarefas na Sprint 2:**

- **Thiago Branco de Oliveira:** Encarregado da criação das páginas de Cadastro e Login do site.
- **Diogo Gouvêa Bastos Braga:** Responsável pela criação de alguns elementos específicos da Página Principal do site.
- **João Vitor Ferreira Jacinto:** Encarregado da criação das páginas de Visualização de Receitas do site e primeira tentativa de implementação do Gerador de Receitas em uma página do site.
- **Miguel Augusto de Paula:** Contribuiu com a criação de alguns elementos específicos da Página Principal do site.

**Atribuição de Tarefas na Sprint 3:**

- **Thiago Branco de Oliveira:** Encarregado da criação da página de Perfil do Usuário e alguns elementos presentes na mesma Página de Perfil do Usuário.
- **Diogo Gouvêa Bastos Braga:** Responsável pela implementação da funcionalidade de Favoritar uma Receita e Visualização do Histórico de Receitas na Página de Perfil do Usuário.
- **João Vitor Ferreira Jacinto:** Encarregado da criação de uma nova página para uma nova versão da implementação do Gerador de Receitas do site e correção de alguns elemnentos da Página Principal do site.
- **Miguel Augusto de Paula:** Criação da página de Notícias e Anúncios do site.

**Atribuição de Tarefas na Sprint 4:**

- **Thiago Branco de Oliveira:** Encarregado pela integração das páginas por meio dos servidores JSON, e contribuiu com a revisão da documentação.
- **Diogo Gouvêa Bastos Braga:** Responsável pela atualização da documentação e criação da apresentação em PowerPoint do grupo a respeito da conclusão do projeto.
- **João Vitor Ferreira Jacinto:** Encarregado pela integração das páginas por meio dos códigos HTML, CSS e JS, e contribuiu com a revisão da documentação.
- **Miguel Augusto de Paula:** Contribuiu com auxílio na documentação e criação da apresentação em PowerPoint do grupo.

---

# Solução

## Video do Projeto

(vídeo de apresentação do problema que a equipe está tratando e a proposta de solução; colocar aqui depois)

## Funcionalidades

(funcionalidades que a aplicação fornece tanto para os usuários quanto aos administradores da solução; apaga essa linha depois)

- **Funcionalidade 1 -** Cadastro
- **Estrutura de Dados:** JSON - usuarios (exemplo)

"usuarios": [
    {
      "nome": "Simone Nogueira",
      "email": "Sincere@april.biz",
      "senha": "123654",
      "historico": [67, 89, 90],
      "favoritos": [89, 90],
      "id": 1
    }
}

- **Instruções de acesso e uso:** 

- Baixe a pasta do projeto, abra no Visual Studio Code e execute o comando "npm run start" no terminal para iniciar o JSON Server. Abra com o plugin Live Server para ter acesso ao site.
- Na tela de cadastro, você pode registrar um novo usuário para ter acesso às funcionalidades de perfil digitando seu nome, e-mail e senha. Com o cadastro bem-sucedido, você será redirecionado para a página principal.
- Se tentar se cadastrar sem preencher todos os campos, você receberá uma mensagem de erro indicando que deve preencher todos os campos.
- Se tentar se cadastrar com um e-mail já existente no banco de dados JSON, você também receberá uma mensagem de erro informando que o e-mail já foi cadastrado.

![telacadastro](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-gerador-de-receitas/assets/164263649/e2a6648b-91bd-43d5-8e08-d53e5aa39f51)

- **Funcionalidade 2 -** Login
- **Estrutura de Dados:** JSON - usuarios (exemplo)

"usuarios": [
    {
      "nome": "Sauron",
      "email": "mail.com",
      "senha": "123",
      "historico": [12],
      "favoritos": [],
      "id": 5
    }
}

- **Instruções de acesso e uso:** 

- Baixe a pasta do projeto, abra no Visual Studio Code e execute o comando "npm run start" no terminal para iniciar o JSON Server. Abra com o plugin Live Server para ter acesso ao site.
- escrever aqui
- escrever aqui

![telalogin](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-gerador-de-receitas/assets/164263649/63849534-76eb-4ae5-af37-4fbce0d30232)

- **Funcionalidade 3 -** Editar Perfil do Usuário
- **Estrutura de Dados:** JSON - usuarios (exemplo)

"usuarios": [
    {
      "nome": "Leon S. Kennedy",
      "email": "leon@mail",
      "senha": "1212",
      "historico": [2, 4, 6],
      "favoritos": [4, 6],
      "id": 4
    }
}

- **Instruções de acesso e uso:** 

- Baixe a pasta do projeto, abra no Visual Studio Code e execute o comando "npm run start" no terminal para iniciar o JSON Server. Abra com o plugin Live Server para ter acesso ao site.
- escrever aqui
- escrever aqui

![telaeditarperfil](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-gerador-de-receitas/assets/164263649/c80050ab-b1af-4202-98cd-c1a8fd15f2ea)

- **Funcionalidade 4 -** Geração de Receita
- **Estrutura de Dados:** JSON - receitas (exemplo)

"receitas:" [
{
      "nome": "Carne bovina com arroz e cebola",
      "proteina": "bovina",
      "carboidrato": "arroz",
      "vegetal": "cebola",
      "modo-de-preparo": "Tempere a carne bovina com sal, pimenta, alho e um fio de azeite. Aqueça uma grelha ou frigideira em fogo alto e sele a carne dos dois lados. Reduza o fogo e cozinhe até o ponto desejado. Sirva com arroz e cebola preparados da seguinte forma: Lave o arroz e cozinhe em água com sal até que toda a água seja absorvida e o arroz esteja macio. Descasque e corte a cebola em rodelas. Refogue em uma frigideira com azeite até que estejam caramelizadas.",
      "id": 7
    }
}

- **Instruções de acesso e uso:** 

- Baixe a pasta do projeto, abra no Visual Studio Code e execute o comando "npm run start" no terminal para iniciar o JSON Server. Abra com o plugin Live Server para ter acesso ao site.
- escrever aqui
- escrever aqui

![gerar receita](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-gerador-de-receitas/assets/164263649/c2f0acec-513e-41b2-a7f1-f58eb730ea7a)

- **Funcionalidade 5 -** Vizualização da Receita
- **Estrutura de Dados:** JSON - receitas (exemplo)

"receitas": [
{
      "nome": "Carne bovina com feijão e cenoura",
      "proteina": "bovina",
      "carboidrato": "feijao",
      "vegetal": "cenoura",
      "modo-de-preparo": "Tempere a carne bovina com sal, pimenta, alho e um fio de azeite. Aqueça uma grelha ou frigideira em fogo alto e sele a carne dos dois lados. Reduza o fogo e cozinhe até o ponto desejado. Sirva com feijão e cenoura preparados da seguinte forma: Cozinhe o feijão em água com uma folha de louro até que esteja macio. Escorra e tempere com sal, alho refogado e azeite. Descasque e corte as cenouras em rodelas. Cozinhe em água com sal até que estejam macias. Tempere com azeite e ervas frescas.",
      "id": 17
    }
}

- **Instruções de acesso e uso:** 

- Baixe a pasta do projeto, abra no Visual Studio Code e execute o comando "npm run start" no terminal para iniciar o JSON Server. Abra com o plugin Live Server para ter acesso ao site.
- escrever aqui
- escrever aqui
  
![visualizar receita](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385200-gerador-de-receitas/assets/164263649/74a998e1-8ce9-4d65-943c-b4cdc0c657fe)

## Estruturas de Dados

**Estrutura de Dados - usuarios** 
- Usado para Cadastro, Login e Editar Perfil do Usuário

**Estrutura de Dados - receitas** 
- Usado para Visualização de Receitas e Geração de Receitas

# Módulos e APIs

(módulos e APIs utilizados; escrever aqui depois)

# FAQ

**1. Pergunta:** “Como as receitas são geradas?”
- **Resposta:** Utilizando o banco de dados original do KitchenCompanion.

**2. Pergunta:** “Como gerar a receita?”
- **Resposta:** Acesse a página inicial e clique em "Gerar uma receita" no menu superior. Depois, escolha, com base nos seus ingredientes disponíveis, uma proteína, um carboidrato e um vegetal. Então, clique em "Gerar receita" e será possível visualizar o nome e o modo de preparo em uma página exclusiva para isso.

**3. Pergunta:** “Posso me cadastrar na página?”
- **Resposta:** Sim, além disso, cadastrar-se na página oferece uma experiência mais rica, pois aumenta a possibilidade de interações com as receitas do usuário.

**4. Pergunta:** “Após ter feito o login, posso editar meus dados?”
- **Resposta:** Sim, após fazer o login, é possível editar seus dados na página de perfil do usuário, em "Configurações". Dessa forma, é possível alterar o nome, e-mail e senha cadastrados.

**5. Pergunta:** “As receitas que gerei ficam salvas em algum lugar?”
- **Resposta:** Sim, se o usuário estiver cadastrado na página, ao gerar uma receita e clicar em "Visualizar", as receitas ficam salvas na parte de "Histórico".

**6. Pergunta:** “Existe uma maneira de guardar as receitas?”
- **Resposta:** Sim, é possível favoritar uma receita para acessá-la mais rapidamente quando necessário. Estas receitas ficam salvas na página de "Favoritos" no perfil do usuário.

# Referências Bibliográficas

(referências bibliográficas utilizadas no projeto; escrever aqui depois)
