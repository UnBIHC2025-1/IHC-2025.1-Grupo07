hide: [navigation]

# Design

Esta seção apresenta boas práticas e critérios fundamentais para garantir a acessibilidade no design visual e de interface de produtos digitais. Ela se destina a profissionais de UX, UI, designers gráficos e equipes responsáveis pela criação visual de sites, sistemas e aplicativos.


!!! info "Por que é importante?"
    Decisões de design impactam diretamente a capacidade das pessoas de perceber, compreender e interagir com os conteúdos. Aspectos como contraste, cores, tipografia, espaçamento, responsividade, organização da informação e controle de animações são essenciais para atender a uma ampla diversidade de usuários, incluindo pessoas com deficiências visuais, cognitivas, motoras e neuro divergentes.



<h2>Progresso WCAG</h2>
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
  <b>Além das cores, há recursos auxiliares como meio de transmitir informaçã.</b> <a href="#1">[1]</a> [UK]
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
  Adicionar informações (como gráficos e diagramas) que não dependam exclusivamente da cor. <a href="#1">[1]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
  Garantir que dicas visuais significativas atinjam 3:1 em relação ao fundo.<a href="#1">[1]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
  Oferece uma opção de alto contraste das páginas web. <a href="#2">[2]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
  <b>O site pode ser rotacionado  para qualquer orientação.</b> <a href="#3">[3]</a> [NBR 5.10.3]
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
  <b>O conteúdo permanece funcional e sem perda de informação quando visualizado em uma área de 320px de largura ou 256px de altura, a menos que um leiaute bidimensional seja essencial.</b> <a href="#4">[4]</a> [NBR 5.10.4]
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
  <b>A interface é responsiva e adaptável a diferentes tamanhos de tela.</b> [NBR 5.10.4]<a href="#4">[4]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    Áreas clicáveis com no mínimo 44px (pixels) de altura e 44px de largura [NBR 5.8.6] (WCAG 2.5.8 (AA), 2.5.5 (AAA))
</label>

## Textos
<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    <b>Todos os blocos de texto têm espaçamento entre as linhas (entrelinhas) de pelo menos 1,5 vez o tamanho da fonte [NBR 5.1.12] (1.4.12 (AA) 1.4.8 (AAA))</b>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    <b>Todos os parágrafos têm espaçamento entre si de pelo menos 2 vezes o tamanho da fonte; [NBR 5.12.2] (1.4.12 (AA) 1.4.8 (AAA))</b>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
    <b>Todos os blocos de texto têm espaçamento entre as palavras de pelo menos 0,16 vez o tamanho da fonte[NBR 5.12.4] (1.4.12 (AA))</b>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    <b>Não há perda de conteúdo ou funcionalidade quando o texto é redimensionado sem o uso de recursos de tecnologia assistiva em até 200 %[NBR] (5.12.7 Texto redimensionado 1.4.4 (AA) 1.4.8 (AAA))</b>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    <b>Textos estão alinhados conforme o sentido de leitura, a menos que o alinhamento seja essencial para a compreensão [UK, NBR 5.12.5] (1.4.8 (AAA))</b>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    <b>Blocos de texto têm no máximo 80 caracteres por linha.</b>[NBR 5.12.6][UK] <a href="#4">[4]</a>
</label>


## Animação
<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
    <b>Todos os movimentos de tela piscam abaixo de 3 vezes por segundo? [6] [UK] (2.3.1 (A))</b>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
    Permitir que os usuários controlem as alterações de conteúdo que ocorrem em paralelo com outro conteúdo. (2.2.2 (A))
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    Toda a animação deve obedecer à prefers-reduced-motion consulta de mídia. [8] (2.2.3 (AAA))
</label>

## Contraste de Cores

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
    Verificar o contraste de todos os ícones. (1.4.11 (AA))
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
    <b>O texto (incluindo imagens de texto) possui contraste suficiente com o fundo de 4,5:1 para textos normais.</b> <a href="#2">[2]</a> [NBR 5.11.3]
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AA">
    <b>O texto (incluindo imagens de texto) possui contraste suficiente com o fundo de 3:1 para textos grandes.</b> <a href="#2">[2]</a> [NBR 5.11.3] 
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAA">
    <b>O indicador de foco visível dos elementos focáveis tem relação de contraste de pelo menos 3:1 com o fundo e entre os estados em foco e sem foco. [NBR] (5.11.6 Contraste para indicador de foco visível) (2.4.13 (AAA))
    </b>
</label>

## Referências Bibliograficas

> <a id="1" href="">1.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.1 Uso de Cores (Nível A). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#use-of-color](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#use-of-color). Acesso em: 23 Jun. 2025.

> <a id="2" href="">2.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.3 Contraste (Mínimo) (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#contrast-minimum](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#contrast-minimum). Acesso em: 23 Jun. 2025.

> <a id="3" href="">3.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.3.4 Orientação (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#orientation](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#orientation). Acesso em: 23 Jun. 2025.

> <a id="4" href="">4.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.10 Realinhar (Nível AA). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#reflow](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#reflow). Acesso em: 23 Jun. 2025.






> <a id="RP2" href="#TEC2">2.</a> WCAG 2.2 Understanding Docs. SC 1.4.4 Resize Text (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html). Acesso em: 9 Mai. 2024.

> <a id="RP3" href="#TEC3">3.</a> WCAG 2.2 Understanding Docs. SC 1.3.3 Sensory Characteristics (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html). Acesso em: 9 Mai. 2024.

> <a id="RP4" href="#TEC4">4.</a> WCAG 2.2 Understanding Docs. SC 1.4.11 Non-text Contrast (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Acesso em: 9 Mai. 2024.

> <a id="RP6" href="#TEC6">6.</a> WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Acesso em: 9 Mai. 2024.

> <a id="RP7" href="#TEC7">7.</a> WCAG 2.2.2 Understanding Docs. SC 2.2.2 Pause, Stop, Hide (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html). Acesso em: 9 Mai. 2024.

> <a id="RP8" href="#TEC8">8.</a> WCAG 2.2 Understanding Docs. SC 2.3.3 Animation from Interactions (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html). Acesso em: 9 Mai. 2024.


## Bibliografia

> </a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024.