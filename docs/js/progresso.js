document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('input.criterio');

  function getCSSVar(name, target = document.documentElement) {
    return getComputedStyle(target).getPropertyValue(name).trim();
  }

  function getResolvedColor(varName) {
    const el = document.createElement('div');
    el.style.display = 'none';
    el.style.color = `var(${varName})`;
    document.body.appendChild(el);
    const resolved = getComputedStyle(el).color;
    document.body.removeChild(el);
    return resolved;
  }

  const primaryColor = getCSSVar('--md-primary-fg-color', document.querySelector('.md-header'));
  console.log(primaryColor);

  function calcularProgressoPorNivel() {
    const totais = {};
    const marcados = {};

    checkboxes.forEach(c => {
      const nivel = c.getAttribute('data-level');
      if (nivel) {
        totais[nivel] = (totais[nivel] || 0) + 1;
        if (c.checked) {
          marcados[nivel] = (marcados[nivel] || 0) + 1;
        }
      }
    });

    return { totais, marcados };
  }

  function criarGrafico(id, marcados, totais, nivel, cor) {
    const canvas = document.getElementById(id);
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');

    const textoColor = getResolvedColor('--md-default-fg-color');
    const pendenteColor = getCSSVar('--md-default-fg-color--lightish');

    const centerTextPlugin = {
      id: 'centerText',
      afterDatasetDraw(chart) {
        const { ctx, width, height } = chart;
        ctx.save();

        const dataset = chart.data.datasets[0].data;
        const total = dataset[0] + dataset[1];
        const percentual = total === 0 ? 0 : Math.round((dataset[0] / total) * 100);

        percentual.fillStyle = getCSSVar('--md-default-fg-color--light');

        ctx.font = 'bold 18pt sans-serif';
        ctx.fillStyle = textoColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${percentual}%`, width / 2, 240 / 2);

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

    const cores = {
      // Defina cores específicas por nível se quiser, senão usará o tema
      // A: '#4caf50',
      // AA: '#2196f3',
      // AAA: '#9c27b0',
      // Adev: '#ff9800',
      // AAdev: '#03a9f4',
      // AAAdev: '#e91e63'
    };

    const graficos = {};

    Object.keys({ ...totais, ...marcados, ...cores }).forEach(nivel => {
      const canvasId = 'grafico' + nivel;
      if (document.getElementById(canvasId)) {
        graficos[nivel] = criarGrafico(
          canvasId,
          marcados[nivel] ?? 0,
          totais[nivel] ?? 0,
          nivel.replace('dev', '',),
          primaryColor
        );
      }
    });

    checkboxes.forEach(c => {
      c.addEventListener('change', () => {
        const { totais, marcados } = calcularProgressoPorNivel();
        Object.keys(graficos).forEach(nivel => {
          const grafico = graficos[nivel];
          if (grafico) {
            grafico.data.datasets[0].data = [
              marcados[nivel] ?? 0,
              (totais[nivel] ?? 0) - (marcados[nivel] ?? 0)
            ];
            grafico.options.plugins.title.text = `(${marcados[nivel] ?? 0}/${totais[nivel] ?? 0})`;
            grafico.update();
          }
        });
      });
    });
  }

  gerarGraficos();
  
});

