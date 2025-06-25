hide: [navigation]
# Desenvolvimento

Esta seção aborda critérios e boas práticas de desenvolvimento de sistemas, interfaces e conteúdos digitais acessíveis. Ela se destina principalmente a profissionais de desenvolvimento **front-end**, **back-end** e equipes técnicas que trabalham na implementação de sites, aplicativos e sistemas.

!!! info "Por que é importante?"  
    Grande parte das barreiras de acessibilidade são causadas por decisões técnicas na codificação. Implementar corretamente semântica, foco de teclado, descrição de elementos, controle de mídia e feedback visual é essencial para que pessoas com deficiência possam acessar e utilizar a tecnologia de forma plena.

## Imagens


<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Adicionar ``` alt ```  para imagens, botões-imagem, gráficos e imagens de mapas com pontos de acesso. <a href="#1">[1]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Adicionar ``` alt="" ```  para imagens decorativas que não tem significado. <a href="#1">[1]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Incluir a descrição no ``` alt ``` para imagens que contém texto. <a href="#1">[1]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Todas as imagens que transmitem informação ou conteúdo relevante possuem texto alternativo que descreve essa informação ou conteúdo. <a href="#NBR">[NBR]</a> <a href="#1">[1]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Todas as imagens funcionais possuem texto alternativo que descreve a funcionalidade do elemento. <a href="#NBR">[NBR]</a> <a href="#1">[1]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
 <b>Só há imagens de texto essenciais ou personalizáveis, e todas têm texto alternativo igual ao conteúdo. <a href="#NBR">[NBR]</a> <a href="#2">[2]</a></b>
</label>

## Botões e Controles

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
 Adicionar estados de foco em campos de entrada, botões, e elementos interativos. <a href="#3">[3]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Adicionar ```type="button"``` nos botões. <a href="#4">[4]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
 <b>Todos os botões possuem texto, texto alternativo ou nome acessível que indica sua função.<a href="#NBR">[NBR 5.8.3]</a> <a href="#4">[4]</a> <a href="#5">[5]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Todos os botões são utilizados para acionar uma funcionalidade.<a href="#NBR">[NBR]</a> <a href="#6">[6]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
 <b>Todos os componentes que possuem a mesma funcionalidade e se repetem em um conjunto de páginas são identificados de maneira consistente.<a href="#NBR">[NBR 5.8.4]</a> <a href="#7">[7]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Caso haja áudio que toque automaticamente e dure mais de 3 s, existe um mecanismo para pausar, parar, silenciar ou ajustar o seu volume sem afetar o volume geral do sistema.<a href="#NBR">[NBR 5.14.7]</a> <a href="#8">[8]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
 <b>Toda funcionalidade que requer movimento de arrastar também pode ser realizada com um único clique ou toque (sem arrastar). <a href="#9">[9]</a></b>  
</label>
      

## Links 

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 <b>Não há links com texto, texto alternativo ou nome acessível iguais que levam para destinos diferentes. <a href="#NBR">[NBR 5.7.5]</a> <a href="#7">[7]</a> <a href="#10">[10]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 <b>Todos os links para sites externos informam isso ao usuário.<a href="#NBR">[NBR 5.7.9]</a> <a href="#11">[11]</a> <a href="#10">[10]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 <b>Todos os links para arquivos incluem no texto ou no texto alternativo a informação do formato e tamanho do arquivo; ou O link para arquivo informa isso ao usuário de outra forma.<a href="#NBR">[NBR 5.7.7]</a> <a href="#11">[11]</a> <a href="#10">[10]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Não há texto complementar que repete o texto, texto alternativo ou nome acessível do link.<a href="#NBR">[NBR 5.7.9]</a> <a href="#11">[11]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Não há links adjacentes que levam para o mesmo destino. <a href="#NBR">[NBR 5.7.10]</a> <a href="#11">[11]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Há um ou mais links (ou outro mecanismo) que permitem contornar blocos de conteúdo na página ou contornar blocos de conteúdo que se repetem  em um conjunto de páginas.<a href="#NBR">[NBR 5.7.11]</a> (2.4.1 (A))</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
 <b>Há mais de uma forma para encontrar uma página em um conjunto de páginas<a href="#NBR">[NBR 5.7.13]</a> (2.4.5 (AA))</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
 <b>Todos os mecanismos de navegação que se repetem em um conjunto de páginas estão na mesma ordem relativa; ou A posição do mecanismo é alterada pelo usuário<a href="#NBR">[NBR 5.7.15]</a> (3.2.3 (AA))</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Todos os mecanismos de ajuda que se repetem em um conjunto de páginas estão na mesma ordem relativa; ou A posição do mecanismo é alterada pelo usuário. <a href="#NBR">[NBR 5.7.16]</a> (3.2.6 (A))</b>  
</label>
      

## Formulário

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Todos os campos de formulário possuem um rótulo que os identifica; ou O campo de formulário possui propósito visualmente evidente e um nome acessível que o identifica.<a href="#NBR">[NBR 5.9.1]</a>  (3.2.2 (A) <a href="#4">[4]</a>)</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Todos os rótulos estão associados aos respectivos campos de formulário de forma programaticamente determinada. <a href="#NBR">[NBR 5.9.3]</a> <a href="#6">[6]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Todas as mensagens de erro descrevem em texto qual é o erro e identificam qual é o campo com erro. <a href="#NBR">[NBR 5.9.9]</a> (3.3.1 (A))</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Adicionar ``` aria-describedby ``` para os campos de entrada. 3.3.2 (A)  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Exibir mensagens de erro e sucesso não só visualmente.  (1.4.1 (A))  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>O sistema evita solicitar novamente informações que o usuário já forneceu no mesmo processo (ex.: nome, endereço), oferecendo preenchimento automático ou seleção (3.3.7 (A))</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Textos de ajuda estão posicionados de maneira previsível em relação aos campos do formulário.<a href="#NBR">[NBR 5.9.5]</a> (3.3.2 (A))</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Todos os campos de entrada relacionados estão agrupados programaticamente.<a href="#NBR">[NBR 5.9.6]</a> <a href="#6">[6]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Todos os campos obrigatórios estão devidamente identificados<a href="#NBR">[NBR 5.9.7]</a> (1.3.2 (A))</b>
</label>

## Semântica


<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Uso de elementos nativos HTML com a semântica adequada. <a href="#4">[4]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
 Todos os botões possuem rótulos claros e compreensíveis. UK <a href="#5">[5]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 Não há mais do que uma região do tipo ``header``/``banner``, ``main`` ou ``footer``/``contentinfo``.<a href="#6">[6]</a>, 1.3.6 (AAA)  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
 <b>A página tem seu idioma declarado de forma programaticamente determinada.<a href="#NBR">[NBR 5.13.2]</a>  (3.1.1 (AA))</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Todo frame ou iframe possui um título único, que o identifica.<a href="#NBR">[NBR 5.13.4]</a>  <a href="#6">[6]</a>, <a href="#4">[4]</a>)</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>A ordem dos elementos conforme aparecem no código é lógica e intuitiva, de modo que preserva o significado e a operabilidade.<a href="#NBR">[NBR 5.13.6]</a>  (1.3.2 (A))</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Todos os componentes que requerem identificação por nome possuem um nome acessível.<a href="#NBR">[NBR 5.13.10]</a>  <a href="#4">[4]</a></b>
</label>

## Teclado


<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 As funcionalidades  da página web estão disponíveis por teclado. (2.1.1 (A))  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Quando se tem o mouseover é permitido o uso de teclado . (2.1.1 (A))</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 <b>Todos os elementos focáveis estão completamente visíveis quando recebem foco. <a href="#NBR">[NBR 5.1.2]</a>  (2.4.11 (AA), 2.4.12 (AAA))</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 <b>O indicador de foco visível cobre uma área mínima equivalente a um perímetro de 2px CSS de espessura ao redor do componente focado. (WCAG 2.4.13 (AAA))</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Os conteúdos com movimento (como carrosséis e banners) permitem pausar, ocultar ou parar o movimento, oferecem navegação por teclado e informam transições aos leitores de tela? (WCAG 2.2.2 (A))</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 <b>Nenhuma parte do componente com foco pelo teclado é encoberta por conteúdo criado pelo autor da página (WCAG 2.4.12 (AAA))</b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
 Adicione o ``` .hover, .focus { } ```  para tornar o foco visível. <a href="#NBR">[NBR 5.1.1]</a>  <a href="#3">[3]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Permite/visa o uso de Atalhos de teclado  como o `TAB`. (2.1.1 (A))  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Primeiro  item interativo da página é um link para o conteúdo principal (2.4.2 (A)).
</label>

## Título

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 A hierarquia de conteúdo da página é definida por sua lógica e não pelo tamanho do texto. <a href="#NBR">[NBR 5.13.6]</a> (1.3.2 (A))  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 Use elementos de título ``` h1 h2 h3 ``` para apresentar o conteúdo. <a href="#NBR">[NBR 5.3.5]</a> <a href="#6">[6]</a>, <a href="#5">[5]</a> , <a href="#12">[12]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
 Não pular níveis lógicos. <a href="#NBR">[NBR 5.7.15]</a> (3.2.3 (AA))  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 Toda página contém um único título ``` h1 ``` descrevendo a página. 1719 <a href="#NBR">[NBR 5.3.5]</a> <a href="#6">[6]</a>, <a href="#5">[5]</a>, <a href="#12">[12]</a>
</label>

## Tabela


<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Use o ``` table ```  para elementos em formato de tabela. <a href="#NBR">[NBR 5.6.1]</a>  <a href="#6">[6]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Insira cabeçalhos para explicar os dados, use ``` th ``` com ``` scope ``` correto <b><a href="#NBR">[NBR 5.6.3]</a> <a href="#6">[6]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 Use o ``` captione ```  elemento para fornecer um título para a tabela. <a href="#NBR">[NBR 5.6.4]</a>  <a href="#5">[5]</a> <a href="#12">[12]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 <b>Toda  tabela deve possuir um título ou legenda que a identifica <a href="#NBR">[NBR 5.6.4]</a> <a href="#5">[5]</a> <a href="#12">[12]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Todos os títulos ou legendas de tabela estão associados à respectiva tabela de forma programaticamente determinada <a href="#NBR">[NBR 5.6.5]</a> <a href="#6">[6]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 <b>Toda tabela complexa deve possuir uma descrição da tabela em texto.<a href="#NBR">[NBR 5.6.6]</a> (3.1.5 (AAA))<b>
</label>

## Modais


<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 Deve ser fácil fechar. UK (WCAG 2.2.4(AAA))  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 Permite o uso da tecla escape ``` ESC ```. UK (WCAG 2.2.4(AAA))  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 Evita  modais em tela cheia. UK (WCAG 2.2.4(AAA))  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
 Evita  modais em tela cheia. UK (WCAG 2.2.4(AAA))
</label>

## Visualização

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
O site pode ser rotacionado  para qualquer orientação.  <a href="#NBR">[NBR 5.10.3]</a> (1.3.4 (AA))  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
<b>O conteúdo permanece funcional e sem perda de informação quando visualizado em uma área de 320px de largura ou 256px de altura, a menos que um leiaute bidimensional seja essencial. 16 <a href="#NBR">[NBR 5.10.4]</a> (1.4.10 (AA))</b>
</label>

## Referência Bibliográfica

> <a id="1" href="">1.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. 1.1.1 Conteúdo Não Textual (Nível A). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#non-text-content](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#non-text-content). Acesso em: 23 Jun. 2025.

> <a id="2" href="">2.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. 1.4.5 Imagens de Texto (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#images-of-text](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#images-of-text). Acesso em: 23 Jun. 2025.

> <a id="3" href="">3.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. 2.4.7 Foco Visível (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-visible](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-visible). Acesso em: 23 Jun. 2025.

<a id="4" href="">4.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. 4.1.2 Nome, Função, Valor (Nível A). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#name-role-value](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#name-role-value). Acesso em: 23 Jun. 2025.

<a id="5" href="">5.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. 2.4.6 Cabeçalhos e Rótulos (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#headings-and-labels](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#headings-and-labels). Acesso em: 23 Jun. 2025.

<a id="6" href="">6.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. 1.3.1 Informações e Relações (Nível A). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#info-and-relationships](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#info-and-relationships). Acesso em: 23 Jun. 2025.

<a id="7" href="">7.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. 3.2.4 Identificação Consistente (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-identification](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-identification). Acesso em: 23 Jun. 2025.


<a id="8" href="">8.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. 1.4.2 Controle de Áudio (Nível A). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#audio-control](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#audio-control). Acesso em: 23 Jun. 2025.

<a id="9" href="">9.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. 2.5.8 Tamanho do Alvo (Mínimo) (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#target-size-minimum](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#target-size-minimum/wcag22-pt-BR/#audio-control). Acesso em: 23 Jun. 2025.

<a id="10" href="">10.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. 2.4.9 Finalidade do Link (Apenas o Link) (Nível AAA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-link-only](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-link-only). Acesso em: 23 Jun. 2025.

<a id="11" href="">11.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. 2.4.4 Finalidade do Link (Em contexto) (Nível A). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-in-context](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-in-context). Acesso em: 23 Jun. 2025.

<a id="12" href="">12.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2.  2.4.10 Cabeçalhos da Seção(Nível AAA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#section-headings](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#section-headings). Acesso em: 23 Jun. 2025.
















> <a id="NBR" href=""> </a> ABNT NBR 17225:2025, Acessibilidade em conteúdo e aplicações web – Requisitos. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf) Acesso em: 23 Jun. 2025
## Bibliografia

> </a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024.