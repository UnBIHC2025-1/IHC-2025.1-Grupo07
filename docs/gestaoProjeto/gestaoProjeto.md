hide: [navigation]

# Gestão de Projeto

Esta seção traz recomendações para incorporar a acessibilidade desde a concepção do projeto, passando pelo planejamento, pela definição de requisitos e pela gestão de equipes, recursos e cronogramas. É voltada a gestores, líderes de projeto, product owners, analistas de requisitos, scrum masters e *stakeholders*.

!!! info "Por que é importante?"
    A acessibilidade não deve ser tratada como uma etapa isolada ou um requisito opcional. Incorporá-la desde o início do ciclo de desenvolvimento reduz custos, evita retrabalho, garante conformidade legal e amplia o alcance e a qualidade do produto. Além disso, promove inclusão social e melhora a experiência para todos os usuários, não apenas para pessoas com deficiência.



<!-- <h3>Progresso WCAG</h3>
<div class="progress-sidebar" style="display: flex; flex-direction: row;">
    <div>
        <h4>Nível A</h4>
        <canvas id="graficoA" width="200" height="200" style="width: 200px; height: 200px;"></canvas>
    </div>
</div> -->

## Gestão Técnica

Nessa lógica, durante a etapa inicial do desenvolvimento de um software, elabore *personas* com os seguintes perfis abaixo, dessa forma, seu projeto vai garantir que o software contenha requisitos de acessibilidade.

Em seu projeto, foram elaboradas *personas* para...


<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Pessoas com Deficiência Visual</b>  (cegueira, baixa visão, daltonismo ou deficiência cromática)
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Pessoas com Deficiência Física</b>  (fraqueza, tremores, movimentos involuntá rios, paralisia, limitações da sensação, dor que impede movimento, ausênciade membros)  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Pessoas com Deficiência Auditiva</b>  (surdez, baixa audição, surdocegueira)  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Pessoas com Deficiência na Fala</b>  (dificuldade para falar, volume insuficiente, gagueira, mudez)  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Pessoas Neuro Diversas</b>  (dificuldades de diferentes graus para ver, escutar, falar, compreender e interagir socialmente)  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Pessoas com Múltiplas Deficiências</b>  (combinação de duas ou mais deficiências anteriores)  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Possíveis limitações decorrentes do envelhecimento</b>  (que podem ser de um ou mais grupos de deficiências)  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Pessoas com analfabetismo</b>  (analfabetismo digital e funcional níveis 1, 2 e 3)
</label>

Além disso, outras questões também devem ser atendidas

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>A equipe conhece e aplica as diretrizes do WCAG (mínimo nível A e AA)? <a href="#RP1">[1].</a></b>
</label>

## Conscientização

"Na iniciação do projeto, é necessário garantir que a equipe de projeto esteja consciente sobre a questão da acessibilidade digital, dos direitos das pessoas com deficiência e do potencial de mercado desse público" <a href="#RP1">[1].</a>

Sendo assim, existem argumentos que podem facilitar o processo de conscientização da equipe sobre a questão da acessibilidade digital. Esses argumentos estão representados no checklist abaixo.

Em seu projeto, a equipe está consciente de...

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Quantidade de pessoas no mundo com algum tipo de deficiência.  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Quantidade de pessoas no Brasil com algum tipo de deficiência, segundo IBGE.  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Natureza da deficiência: congênita, hereditária, adquirida, temporária.  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Grupos mais comuns de tipos de deficiência.  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Quanto custa a acessibilidade?  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Quanto tempo a mais o projeto precisará para implementar acessibilidade?  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Quantas pessoas com deficiência vão usar meu aplicativo ou acessar meu sítio de Internet?  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Pessoas cegas compram online?  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Pessoas tetraplégicas usam smartphone?  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Legislação: A Convenção sobre os Direitos das Pessoas com Deficiência Comentada.  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Legislação: PORTARIA Nº 3, DE 7 DE MAIO DE 2007\.  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Análise de mercado de software de acessibilidade digital.
</label>

## Planejamento

"É importante prever e elaborar a arquitetura para todos os públicos com deficiência, visando uma vida autônoma, com segurança e bem-estar" <a href="#RP1">[1].</a>.

Assim, é de suma importância que se tenha, incluído no plano de projeto, e, definição de recursos alocados, para estratégia de acessibilidade de um projeto de software.

Em seu planejamento, há...

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 Atividades bem delineadas, cronogramas e atribuições de responsabilidade relacionadas à acessibilidade?  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>Definição de Recursos (pessoas, softwares, cursos, tarefas)? <a href="#RP1">[1].</a></b>  
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="A">
 <b>O planejamento considera as especificidades de cada tipo de deficiência? <a href="#RP1">[1].</a></b>
</label>

## Referências Bibliográficas

> <a id="RP1" href="#TEC1">1.</a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024.

## Bibliografia

> </a> A Convenção sobre Direitos das Pessoas com Deficiência comentada / Coordenação de Ana Paula Crosara de Resende e Flavia Maria de Paiva Vital . _ Brasília : Secretaria Especial dos Direitos Humanos, 2008. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/convencao-direitos-pessoas-deficiencia-comentada.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/convencao-direitos-pessoas-deficiencia-comentada.pdf). Acesso em: 9 Mai. 2024

> </a> BRASIL. Secretaria de Logística e Tecnologia da Informação. Portaria nº 3, de 7 de maio de 2007. Institucionaliza o Modelo de Acessibilidade em Governo Eletrônico – e-MAG no âmbito do Sistema de Administração dos Recursos de Informação e Informática – SISP. Diário Oficial da União, Brasília, DF, 7 maio 2007. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/legislacao/portaria3_eMAG.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/legislacao/portaria3_eMAG.pdf). Acesso em: 9 Mai. 2024

> </a> MORDOR INTELLIGENCE. Digital Accessibility Software Market Size & Share Analysis- Growth Trends & Forecasts (2024-2029). Disponível em: [https://www.mordorintelligence.com/industry-reports/digital-accessibility-software-market](https://www.mordorintelligence.com/industry-reports/digital-accessibility-software-market). Acesso em: 9 Mai. 2024

> </a> WORLD WIDE WEB CONSORTIUM. Web Content Accessibility Guidelines (WCAG) 2.1. Recomendação W3C, 21 setembro 2023. Disponível em: [https://www.w3.org/TR/WCAG21/#sotd](https://www.w3.org/TR/WCAG21/#sotd). Acesso em: 9 Mai. 2024