document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('input.criterio');

  function calcularProgressoPorNivel() {
    const totais = { A: 0, AA: 0, AAA: 0 };
    const marcados = { A: 0, AA: 0, AAA: 0 };

    checkboxes.forEach(c => {
      const nivel = c.getAttribute('data-level');
      if (nivel) {
        totais[nivel]++;
        if (c.checked) {
          marcados[nivel]++;
        }
      }
    });

    return { totais, marcados };
  }

  function criarGrafico(id, marcados, totais, nivel, cor) {
    const ctx = document.getElementById(id).getContext('2d');

    const textoColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--md-default-fg-color')
        .trim();

    const pendenteColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--md-default-fg-color--lightish')
        .trim();

    const centerTextPlugin = {
        id: 'centerText',
        afterDatasetDraw(chart) {
            const {ctx, width, height} = chart;
            ctx.save();

            const dataset = chart.data.datasets[0].data;
            const total = dataset[0] + dataset[1];
            const percentual = total === 0 ? 0 : Math.round((dataset[0] / total) * 100);

            ctx.font = 'bold 18px sans-serif';
            ctx.fillStyle = textoColor;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${percentual}%`, width / 2, height / 2);

            ctx.restore();
        }
    };

    Chart.register(centerTextPlugin);

    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Concluído', 'Pendente'],
            datasets: [{
                data: [marcados, totais - marcados],
                backgroundColor: [cor, pendenteColor],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: `(${marcados}/${totais})`
                },
                legend: {
                    display: false
                }
            }
        }
    });
}


  function gerarGraficos() {
    const { totais, marcados } = calcularProgressoPorNivel();

    const graficos = {
      A: criarGrafico('graficoA', marcados.A, totais.A, 'A', 'rgba(75, 192, 192, 1)'),
      AA: criarGrafico('graficoAA', marcados.AA, totais.AA, 'AA', 'rgba(75, 192, 192, 1)'),
      AAA: criarGrafico('graficoAAA', marcados.AAA, totais.AAA, 'AAA', 'rgba(75, 192, 192, 1)')
    };

    checkboxes.forEach(c => {
      c.addEventListener('change', () => {
        const { totais, marcados } = calcularProgressoPorNivel();

        graficos.A.data.datasets[0].data = [marcados.A, totais.A - marcados.A];
        graficos.A.options.plugins.title.text = `Nível A (${marcados.A}/${totais.A})`;
        graficos.A.update();

        graficos.AA.data.datasets[0].data = [marcados.AA, totais.AA - marcados.AA];
        graficos.AA.options.plugins.title.text = `Nível AA (${marcados.AA}/${totais.AA})`;
        graficos.AA.update();

        graficos.AAA.data.datasets[0].data = [marcados.AAA, totais.AAA - marcados.AAA];
        graficos.AAA.options.plugins.title.text = `Nível AAA (${marcados.AAA}/${totais.AAA})`;
        graficos.AAA.update();
      });
    });
  }

  gerarGraficos();
});


