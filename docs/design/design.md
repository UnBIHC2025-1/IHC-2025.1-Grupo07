hide: [navigation]

# Design

Esta seção apresenta boas práticas e critérios fundamentais para garantir a acessibilidade no design visual e de interface de produtos digitais. Ela se destina a profissionais de UX, UI, designers gráficos e equipes responsáveis pela criação visual de sites, sistemas e aplicativos.


!!! info "Por que é importante?"
    Decisões de design impactam diretamente a capacidade das pessoas de perceber, compreender e interagir com os conteúdos. Aspectos como contraste, cores, tipografia, espaçamento, responsividade, organização da informação e controle de animações são essenciais para atender a uma ampla diversidade de usuários, incluindo pessoas com deficiências visuais, cognitivas, motoras e neuro divergentes.


## Progresso WCAG
<div class="progress-sidebar" style="display: flex; flex-direction: row;">
    <div>
        <h3>Nível A</h3>
        <canvas id="graficoA" width="200" height="200" style="width: 200px; height: 200px;"></canvas>
    </div>
    <div>
        <h3>Nível AA</h3>
        <canvas id="graficoAA" width="200" height="200" style="width: 200px; height: 200px;"></canvas>
    </div>
    <div>
        <h3>Nível AAA</h3>
        <canvas id="graficoAAA" width="200" height="200" style="width: 200px; height: 200px;"></canvas>
    </div>
</div>



## Aparência

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
  <b>Além das cores, há recursos auxiliares como meio de transmitir informação (A).</b> <a href="#1">[1]</a> <a href="#16">[16]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
  Adicionar informações (como gráficos e diagramas) que não dependam exclusivamente da cor (A). <a href="#1">[1]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
  Garantir que dicas visuais significativas atinjam 3:1 em relação ao fundo (AA).<a href="#1">[1]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
  Oferece uma opção de alto contraste das páginas web (AA). <a href="#2">[2]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
  <b>O site pode ser rotacionado  para qualquer orientação (AA).</b> <a href="#15">[NBR 5.10.3]</a> <a href="#3">[3]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
  <b>O conteúdo permanece funcional e sem perda de informação quando visualizado em uma área de 320px de largura ou 256px de altura, a menos que um leiaute bidimensional seja essencial (AA).</b> <a href="#15">[NBR 5.10.4]</a> <a href="#4">[4]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
  <b>A interface é responsiva e adaptável a diferentes tamanhos de tela (AA).</b> <a href="#15">[NBR 5.10.4]</a> <a href="#4">[4]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    Áreas clicáveis com no mínimo 44px (pixels) de altura e 44px de largura (AAA). <a href="#15">[NBR 5.8.6]</a>  <a href="#5">[5]</a> <a href="#6">[6]</a> 
</label>

## Textos
<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    <b>Todos os blocos de texto têm espaçamento entre as linhas (entrelinhas) de pelo menos 1,5 vez o tamanho da fonte (AAA).</b> <a href="#15">[NBR 5.1.12]</a> <a href="#7">[7]</a> <a href="#8">[8]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    <b>Todos os parágrafos têm espaçamento entre si de pelo menos 2 vezes o tamanho da fonte (AAA).</b> <a href="#15">[NBR 5.12.2]</a> <a href="#7">[7]</a> <a href="#8">[8]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
    <b>Todos os blocos de texto têm espaçamento entre as palavras de pelo menos 0,16 vez o tamanho da fonte (AA).</b> <a href="#15">[NBR 5.12.4]</a>  <a href="#8">[8]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    <b>Não há perda de conteúdo ou funcionalidade quando o texto é redimensionado sem o uso de recursos de tecnologia assistiva em até 200 % (AAA).</b> <a href="#15">[NBR 5.12.7]</a> <a href="#7">[7]</a> <a href="#9">[9]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    <b>Textos estão alinhados conforme o sentido de leitura, a menos que o alinhamento seja essencial para a compreensão (AAA).</b> <a href="#15">[NBR 5.12.5]</a> <a href="#7">[7]</a> <a href="#16">[16]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    <b>Blocos de texto têm no máximo 80 caracteres por linha (AAA).</b> <a href="#15">[NBR 5.12.6]</a> <a href="#4">[4]</a> <a href="#16">[16]</a> 
</label>


## Animação
<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
    <b>Todos os movimentos de tela piscam abaixo de 3 vezes por segundo (A).</b> <a href="#10">[10]</a> <a href="#16">[16]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
    Permitir que os usuários controlem as alterações de conteúdo que ocorrem em paralelo com outro conteúdo (A). <a href="#11">[11]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    Toda a animação deve obedecer à prefers-reduced-motion consulta de mídia (AAA). <a href="#12">[12]</a>
</label>

## Contraste de Cores

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
    Verificar o contraste de todos os ícones (AA). <a href="#13">[13]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
    <b>O texto (incluindo imagens de texto) possui contraste suficiente com o fundo de 4,5:1 para textos normais (AA).</b> <a href="#15">[NBR 5.11.3]</a> <a href="#2">[2]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
    <b>O texto (incluindo imagens de texto) possui contraste suficiente com o fundo de 3:1 para textos grandes (AA).</b> <a href="#15">[NBR 5.11.3]</a> <a href="#2">[2]</a> 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    <b>O indicador de foco visível dos elementos focáveis tem relação de contraste de pelo menos 3:1 com o fundo e entre os estados em foco e sem foco (AAA).</b> <a href="#15">[NBR 5.11.6]</a> <a href="#14">[14]</a>
    
</label>

## Referências Bibliograficas

> <a id="1" href="">1.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.1 Uso de Cores (Nível A). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#use-of-color](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#use-of-color). Acesso em: 23 Jun. 2025.

> <a id="2" href="">2.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.3 Contraste (Mínimo) (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#contrast-minimum](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#contrast-minimum). Acesso em: 23 Jun. 2025.

> <a id="3" href="">3.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.3.4 Orientação (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#orientation](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#orientation). Acesso em: 23 Jun. 2025.

> <a id="4" href="">4.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.10 Realinhar (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#reflow](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#reflow). Acesso em: 23 Jun. 2025.

> <a id="5" href="">5.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 2.5.5 Tamanho do Alvo (Melhorado) (Nível AAA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#target-size-enhanced](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#target-size-enhanced). Acesso em: 23 Jun. 2025.

> <a id="6" href="">6.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 2.5.8 Tamanho do Alvo (Mínimo) (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#target-size-minimum](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#target-size-minimum). Acesso em: 23 Jun. 2025.

> <a id="7" href="">7.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.8 Apresentação Visual (Nível AAA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#visual-presentation](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#visual-presentation). Acesso em: 23 Jun. 2025.

> <a id="8" href="">8.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.12 Espaçamento de Texto (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#text-spacing](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#text-spacing). Acesso em: 23 Jun. 2025.

> <a id="9" href="">9.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.4 Redimensionar Texto (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#resize-text](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#resize-text). Acesso em: 23 Jun. 2025.

> <a id="10" href="">10.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 2.3.1 Três Flashes ou Abaixo do Limite (Nível A). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#three-flashes-or-below-threshold](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#three-flashes-or-below-threshold). Acesso em: 23 Jun. 2025.

> <a id="11" href="">11.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 2.2.2 Colocar em Pausa, Parar, Ocultar (Nível A). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#pause-stop-hide](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#pause-stop-hide). Acesso em: 23 Jun. 2025.

> <a id="12" href="">12.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 2.2.3 Sem limite de tempo (Nível AAA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#no-timing](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#no-timing). Acesso em: 23 Jun. 2025.

> <a id="13" href="">13.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.11 Contraste Não textual (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#non-text-contrast](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#non-text-contrast). Acesso em: 23 Jun. 2025.

> <a id="14" href="">14.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 2.4.13 Aparência do Foco (Nível AAA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-appearance](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-appearance). Acesso em: 23 Jun. 2025.

> <a id="15" href="">15.</a> **ABNT NBR 17225**:2025, Acessibilidade em conteúdo e aplicações web – Requisitos. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf) Acesso em: 23 Jun. 2025

> <a id="16" href="">16.</a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. **Guia de Boas Práticas para Acessibilidade Digital**. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2025.



## Bibliografia

> </a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2025.