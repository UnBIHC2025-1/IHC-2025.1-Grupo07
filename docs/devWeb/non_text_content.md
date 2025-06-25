hide: [navigation]
# Desenvolvimento

Esta seção aborda critérios e boas práticas de desenvolvimento de sistemas, interfaces e conteúdos digitais acessíveis. Ela se destina principalmente a profissionais de desenvolvimento **front-end**, **back-end** e equipes técnicas que trabalham na implementação de sites, aplicativos e sistemas.

!!! info "Por que é importante?"  
    Grande parte das barreiras de acessibilidade são causadas por decisões técnicas na codificação. Implementar corretamente semântica, foco de teclado, descrição de elementos, controle de mídia e feedback visual é essencial para que pessoas com deficiência possam acessar e utilizar a tecnologia de forma plena.


## Progresso WCAG
<div class="progress-sidebar" style="display: flex; flex-direction: row;">
    <div>
        <h3>Nível A</h3>
        <canvas id="graficoAdev" width="200" height="200" style="width: 200px; height: 200px;"></canvas>
    </div>
    <div>
        <h3>Nível AA</h3>
        <canvas id="graficoAAdev" width="200" height="200" style="width: 200px; height: 200px;"></canvas>
    </div>
    <div>
        <h3>Nível AAA</h3>
        <canvas id="graficoAAAdev" width="200" height="200" style="width: 200px; height: 200px;"></canvas>
    </div>
</div>

## Imagens


<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 Adicionar ``` alt ```  para imagens, botões-imagem, gráficos e imagens de mapas com pontos de acesso (A). <a href="#1">[1]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 Adicionar ``` alt="" ```  para imagens decorativas que não tem significado (A). <a href="#1">[1]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 Incluir a descrição no ``` alt ``` para imagens que contém texto (A). <a href="#1">[1]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Todas as imagens que transmitem informação ou conteúdo relevante possuem texto alternativo que descreve essa informação ou conteúdo (A).</b>  <a href="#NBR">[NBR]</a> <a href="#1">[1]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Todas as imagens funcionais possuem texto alternativo que descreve a funcionalidade do elemento (A).</b>  <a href="#NBR">[NBR]</a> <a href="#1">[1]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
 <b>Só há imagens de texto essenciais ou personalizáveis, e todas têm texto alternativo igual ao conteúdo (AA).</b> <a href="#NBR">[NBR]</a> <a href="#2">[2]</a>
</label>

## Botões e Controles

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
 Adicionar estados de foco em campos de entrada, botões, e elementos interativos (AA). <a href="#3">[3]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 Adicionar ```type="button"``` nos botões (A). <a href="#4">[4]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
 <b>Todos os botões possuem texto, texto alternativo ou nome acessível que indica sua função (AA).</b> <a href="#NBR">[NBR 5.8.3]</a> <a href="#4">[4]</a> <a href="#5">[5]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Todos os botões são utilizados para acionar uma funcionalidade (A).</b> <a href="#NBR">[NBR]</a> <a href="#6">[6]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
 <b>Todos os componentes que possuem a mesma funcionalidade e se repetem em um conjunto de páginas são identificados de maneira consistente (AA).</b> <a href="#NBR">[NBR 5.8.4]</a> <a href="#7">[7]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Caso haja áudio que toque automaticamente e dure mais de 3 s, existe um mecanismo para pausar, parar, silenciar ou ajustar o seu volume sem afetar o volume geral do sistema (A).</b> <a href="#NBR">[NBR 5.14.7]</a> <a href="#8">[8]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
 <b>Toda funcionalidade que requer movimento de arrastar também pode ser realizada com um único clique ou toque (sem arrastar) (AA).</b> <a href="#9">[9]</a> 
</label>
      

## Links 

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 <b>Não há links com texto, texto alternativo ou nome acessível iguais que levam para destinos diferentes (AAA).</b>  <a href="#NBR">[NBR 5.7.5]</a> <a href="#7">[7]</a> <a href="#10">[10]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 <b>Todos os links para sites externos informam isso ao usuário (AAA).</b> <a href="#NBR">[NBR 5.7.9]</a> <a href="#11">[11]</a> <a href="#10">[10]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 <b>Todos os links para arquivos incluem no texto ou no texto alternativo a informação do formato e tamanho do arquivo; ou O link para arquivo informa isso ao usuário de outra forma (AAA).</b> <a href="#NBR">[NBR 5.7.7]</a> <a href="#11">[11]</a> <a href="#10">[10]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Não há texto complementar que repete o texto, texto alternativo ou nome acessível do link (A).</b> <a href="#NBR">[NBR 5.7.9]</a> <a href="#11">[11]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Não há links adjacentes que levam para o mesmo destino (A).</b> <a href="#NBR">[NBR 5.7.10]</a> <a href="#11">[11]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Há um ou mais links (ou outro mecanismo) que permitem contornar blocos de conteúdo na página ou contornar blocos de conteúdo que se repetem  em um conjunto de páginas (A).</b> <a href="#NBR">[NBR 5.7.11]</a> <a href="#13">[13]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
 <b>Há mais de uma forma para encontrar uma página em um conjunto de páginas (AA).</b> <a href="#NBR">[NBR 5.7.13]</a> <a href="#14">[14]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
 <b>Todos os mecanismos de navegação que se repetem em um conjunto de páginas estão na mesma ordem relativa; ou A posição do mecanismo é alterada pelo usuário (AA).</b> <a href="#NBR">[NBR 5.7.15]</a> <a href="#15">[15]</a>
</label>
      

## Formulário

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Todos os campos de formulário possuem um rótulo que os identifica; ou O campo de formulário possui propósito visualmente evidente e um nome acessível que o identifica (A).</b> <a href="#NBR">[NBR 5.9.1]</a> <a href="#18">[18]</a> <a href="#4">[4]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Todos os rótulos estão associados aos respectivos campos de formulário de forma programaticamente determinada (A).</b> <a href="#NBR">[NBR 5.9.3]</a> <a href="#6">[6]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Todas as mensagens de erro descrevem em texto qual é o erro e identificam qual é o campo com erro (A).</b> <a href="#NBR">[NBR 5.9.9]</a> <a href="#16">[16]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 Adicionar ``` aria-describedby ``` para os campos de entrada (A). <a href="#17">[17]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 Exibir mensagens de erro e sucesso não só visualmente (A). <a href="#19">[19]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>O sistema evita solicitar novamente informações que o usuário já forneceu no mesmo processo (ex.: nome, endereço), oferecendo preenchimento automático ou seleção (A).</b> <a href="#20">[20]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Textos de ajuda estão posicionados de maneira previsível em relação aos campos do formulário (A).</b> <a href="#NBR">[NBR 5.9.5]</a> <a href="#17">[17]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Todos os campos de entrada relacionados estão agrupados programaticamente (A).</b> <a href="#NBR">[NBR 5.9.6]</a> <a href="#6">[6]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Todos os campos obrigatórios estão devidamente identificados (A).</b> <a href="#NBR">[NBR 5.9.7]</a> <a href="#6">[6]</a> 
</label>

## Semântica


<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 Uso de elementos nativos HTML com a semântica adequada (A). <a href="#4">[4]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
 Todos os botões possuem rótulos claros e compreensíveis (AA). <a href="#5">[5]</a> <a href="#34">[34]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 Não há mais do que uma região do tipo ``header``/``banner``, ``main`` ou ``footer``/``contentinfo`` (AAA).<a href="#6">[6]</a> <a href="#21">[21]</a>   
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
 <b>A página tem seu idioma declarado de forma programaticamente determinada (AA).</b> <a href="#NBR">[NBR 5.13.2]</a> <a href="#22">[22]</a>   
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Todo frame ou iframe possui um título único, que o identifica (A).</b> <a href="#NBR">[NBR 5.13.4]</a> <a href="#6">[6]</a> <a href="#4">[4]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>A ordem dos elementos conforme aparecem no código é lógica e intuitiva, de modo que preserva o significado e a operabilidade (A).</b> <a href="#NBR">[NBR 5.13.6]</a> <a href="#23">[23]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Todos os componentes que requerem identificação por nome possuem um nome acessível (A).</b> <a href="#NBR">[NBR 5.13.10]</a> <a href="#4">[4]</a>
</label>

## Teclado


<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 As funcionalidades  da página web estão disponíveis por teclado (A). <a href="#24">[24]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Quando se tem o mouseover é permitido o uso de teclado (A).</b> <a href="#24">[24]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 <b>Todos os elementos focáveis estão completamente visíveis quando recebem foco (AAA).</b>  <a href="#NBR">[NBR 5.1.2]</a> <a href="#25">[25] </a> <a href="#26">[26]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 <b>O indicador de foco visível cobre uma área mínima equivalente a um perímetro de 2px CSS de espessura ao redor do componente focado (AAA).</b> <a href="#27">[27]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Os conteúdos com movimento (como carrosséis e banners) permitem pausar, ocultar ou parar o movimento, oferecem navegação por teclado e informam transições aos leitores de tela? (A)</b> <a href="#28">[28]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 <b>Nenhuma parte do componente com foco pelo teclado é encoberta por conteúdo criado pelo autor da página (AAA).</b> <a href="#26">[26]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
 Adicione o ``` .hover, .focus { } ```  para tornar o foco visível (AA). <a href="#NBR">[NBR 5.1.1]</a> <a href="#3">[3]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 Permite/visa o uso de Atalhos de teclado  como o `TAB` (A). <a href="#24">[24]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 Primeiro  item interativo da página é um link para o conteúdo principal (A). <a href="#29">[29]</a> 
</label>

## Título

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 A hierarquia de conteúdo da página é definida por sua lógica e não pelo tamanho do texto (A). <a href="#NBR">[NBR 5.13.6]</a> <a href="#23">[23]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 Use elementos de título ``` h1 h2 h3 ``` para apresentar o conteúdo (AAA). <a href="#NBR">[NBR 5.3.5]</a> <a href="#6">[6]</a>, <a href="#5">[5]</a> , <a href="#12">[12]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
 Não pular níveis lógicos (AA). <a href="#NBR">[NBR 5.7.15]</a> <a href="#15">[15]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 Toda página contém um único título ``` h1 ``` descrevendo a página (AAA) <a href="#NBR">[NBR 5.3.5]</a> <a href="#6">[6]</a>, <a href="#5">[5]</a>, <a href="#12">[12]</a>
</label>

## Tabela


<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 Use o ``` table ```  para elementos em formato de tabela (A). <a href="#NBR">[NBR 5.6.1]</a>  <a href="#6">[6]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 Insira cabeçalhos para explicar os dados, use ``` th ``` com ``` scope ``` correto (A) <b> <a href="#NBR">[NBR 5.6.3]</a> <a href="#6">[6]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 Use o ``` captione ```  elemento para fornecer um título para a tabela (AAA). <a href="#NBR">[NBR 5.6.4]</a>  <a href="#5">[5]</a> <a href="#12">[12]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 <b>Toda  tabela deve possuir um título ou legenda que a identifica (AAA) <a href="#NBR">[NBR 5.6.4]</a> <a href="#5">[5]</a> <a href="#12">[12]</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
 <b>Todos os títulos ou legendas de tabela estão associados à respectiva tabela de forma programaticamente determinada (A).</b> <a href="#NBR">[NBR 5.6.5]</a> <a href="#6">[6]</a>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 <b>Toda tabela complexa deve possuir uma descrição da tabela em texto (AAA).</b> <a href="#NBR">[NBR 5.6.6]</a> <a href="#30">[30]</a> 
</label>

## Modais


<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 Deve ser fácil fechar (AAA). <a href="#31">[31]</a> <a href="#34">[34]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 Permite o uso da tecla escape ``` ESC ``` (AAA). <a href="#31">[31]</a> <a href="#34">[34]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 Evita  modais em tela cheia (AAA). <a href="#31">[31]</a> <a href="#34">[34]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
 Evita  modais em tela cheia (AAA). <a href="#31">[31]</a> <a href="#34">[34]</a>
</label>

## Visualização

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
O site pode ser rotacionado  para qualquer orientação (AA). <a href="#NBR">[NBR 5.10.3]</a> <a href="#32">[32]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
<b>O conteúdo permanece funcional e sem perda de informação quando visualizado em uma área de 320px de largura ou 256px de altura, a menos que um leiaute bidimensional seja essencial (AA).</b> <a href="#NBR">[NBR 5.10.4]</a> <a href="#33">[33]</a>
</label>

## Referência Bibliográfica

> <a id="1" href="">1.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 1.1.1 Conteúdo Não Textual (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#non-text-content](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#non-text-content). Acesso em: 23 Jun. 2025.

> <a id="2" href="">2.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 1.4.5 Imagens de Texto (Nível AA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#images-of-text](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#images-of-text). Acesso em: 23 Jun. 2025.

> <a id="3" href="">3.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.4.7 Foco Visível (Nível AA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-visible](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-visible). Acesso em: 23 Jun. 2025.

> <a id="4" href="">4.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 4.1.2 Nome, Função, Valor (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#name-role-value](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#name-role-value). Acesso em: 23 Jun. 2025.

> <a id="5" href="">5.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.4.6 Cabeçalhos e Rótulos (Nível AA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#headings-and-labels](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#headings-and-labels). Acesso em: 23 Jun. 2025.

> <a id="6" href="">6.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 1.3.1 Informações e Relações (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#info-and-relationships](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#info-and-relationships). Acesso em: 23 Jun. 2025.

> <a id="7" href="">7.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 3.2.4 Identificação Consistente (Nível AA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-identification](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-identification). Acesso em: 23 Jun. 2025.


> <a id="8" href="">8.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 1.4.2 Controle de Áudio (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#audio-control](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#audio-control). Acesso em: 23 Jun. 2025.

> <a id="9" href="">9.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.5.8 Tamanho do Alvo (Mínimo) (Nível AA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#target-size-minimum](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#target-size-minimum/wcag22-pt-BR/#audio-control). Acesso em: 23 Jun. 2025.

> <a id="10" href="">10.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.4.9 Finalidade do Link (Apenas o Link) (Nível AAA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-link-only](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-link-only). Acesso em: 23 Jun. 2025.

> <a id="11" href="">11.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.4.4 Finalidade do Link (Em contexto) (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-in-context](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-in-context). Acesso em: 23 Jun. 2025.

> <a id="12" href="">12.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.4.10 Cabeçalhos da Seção (Nível AAA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#section-headings](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#section-headings). Acesso em: 23 Jun. 2025.

> <a id="13" href="">13.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.4.1 Contornar Blocos (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#bypass-blocks](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#bypass-blocks). Acesso em: 23 Jun. 2025.

> <a id="14" href="">14.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.4.5 Várias Formas (Nível AA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#multiple-ways](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#multiple-ways). Acesso em: 23 Jun. 2025.

> <a id="15" href="">15.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 3.2.3 Navegação Consistente (Nível AA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation). Acesso em: 23 Jun. 2025.

> <a id="16" href="">16.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 3.3.1 Identificação do Erro (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#error-identification](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#error-identification). Acesso em: 23 Jun. 2025.

> <a id="17" href="">17.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 3.3.2 Rótulos ou Instruções (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#labels-or-instructions](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#labels-or-instructions). Acesso em: 23 Jun. 2025.

> <a id="18" href="">18.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 3.2.2 Em Entrada (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#on-input](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#on-input). Acesso em: 23 Jun. 2025.

> <a id="19" href="">19.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 1.4.1 Uso de Cores (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#use-of-color](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#use-of-color). Acesso em: 23 Jun. 2025. 

> <a id="20" href="">20.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 3.3.7 Entrada Redundante (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#redundant-entry](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#redundant-entry). Acesso em: 23 Jun. 2025. 

> <a id="21" href="">21.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 1.3.6 Identificar o Propósito (Nível AA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#info-and-relationships](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#info-and-relationships). Acesso em: 23 Jun. 2025. 

> <a id="22" href="">22.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 3.1.1 Idioma da Página (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#language-of-page](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#language-of-page). Acesso em: 23 Jun. 2025. 

> <a id="23" href="">23.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 1.3.2 Sequência com Significado (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#meaningful-sequence](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#meaningful-sequence). Acesso em: 23 Jun. 2025. 


> <a id="24" href="">24.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.1.1 Teclado (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#keyboard](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#keyboard). Acesso em: 23 Jun. 2025.

> <a id="25" href="">25.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.4.11 **Foco não Obscurecido (Mínimo) (Nível AA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-not-obscured-minimum](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-not-obscured-minimum). Acesso em: 23 Jun. 2025. 

> <a id="26" href="">26.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.4.12 Foco não Obscurecido (Melhorado) (Nível AA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-not-obscured-enhanced](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-not-obscured-enhanced). Acesso em: 23 Jun. 2025.

> <a id="27" href="">27.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.4.13 Aparência do Foco (Nível AAA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-appearance](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-appearance). Acesso em: 23 Jun. 2025.

> <a id="28" href="">28.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.2.2 Colocar em Pausa, Parar, Ocultar (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#pause-stop-hide](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#pause-stop-hide). Acesso em: 23 Jun. 2025.

> <a id="29" href="">29.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.4.2 Página com Título (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#page-titled](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#page-titled). Acesso em: 23 Jun. 2025.

> <a id="30" href="">30.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 3.1.5 Nível de Leitura (Nível AAA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#reading-level](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#reading-level). Acesso em: 23 Jun. 2025.

> <a id="31" href="">31.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 2.2.4 Interrupções (Nível AAA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#interruptions](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#interruptions). Acesso em: 23 Jun. 2025.

> <a id="32" href="">32.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 1.3.4 Orientação (Nível AA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#orientation](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#orientation). Acesso em: 23 Jun. 2025.

> <a id="33" href="">33.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **CS 1.4.10 Realinhar (Nível AA)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#reflow](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#reflow). Acesso em: 23 Jun. 2025.

> <a id="34" href="">34.</a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. **Guia de Boas Práticas para Acessibilidade Digital**. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 25 Jun. 2025.



> <a id="NBR" href=""> </a> ABNT NBR 17225:2025. **Acessibilidade em conteúdo e aplicações web – Requisitos**. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf) Acesso em: 23 Jun. 2025

## Bibliografia

> </a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. **Guia de Boas Práticas para Acessibilidade Digital**. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024.