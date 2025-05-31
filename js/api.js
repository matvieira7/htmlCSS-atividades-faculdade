$(document).ready(function () {
    function buscarPais(nome) {
      if (!nome) {
        alert('Por favor, digite o nome de um país!');
        return;
      }
  
      const url = `https://restcountries.com/v3.1/name/${nome}`;
  
      $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
          const info = data[0];
  
          const nomeOficial = info.name.official;
          const capital = info.capital ? info.capital[0] : 'N/A';
          const populacao = info.population.toLocaleString();
          const regiao = info.region;
          const moeda = Object.values(info.currencies)[0].name;
          const idioma = Object.values(info.languages)[0];
          const bandeira = info.flags.png;
  
          $('#result').html(`
            <h2>${nomeOficial}</h2>
            <p><strong>Capital:</strong> ${capital}</p>
            <p><strong>População:</strong> ${populacao}</p>
            <p><strong>Região:</strong> ${regiao}</p>
            <p><strong>Moeda:</strong> ${moeda}</p>
            <p><strong>Idioma:</strong> ${idioma}</p>
            <img src="${bandeira}" alt="Bandeira de ${nomeOficial}" width="150" />
          `);
        },
        error: function () {
          $('#result').html('<p class="text-danger">País não encontrado. Verifique o nome e tente novamente.</p>');
        }
      });
    }
  
    $('#btnSearch').click(function () {
      const nome = $('#country').val().trim();
      buscarPais(nome);
    });

    $('#country').keypress(function (e) {
      if (e.which === 13) { // tecla Enter
        e.preventDefault();
        buscarPais($(this).val().trim());
      }
    });
  
     $('#country').blur(function () {
      const nome = $(this).val().trim();
      if (nome) {
        buscarPais(nome);
      }
    });
  
    $.ajax({
      url: 'https://restcountries.com/v3.1/all',
      type: 'GET',
      success: function (data) {
        data.forEach(country => {
          const nome = country.name.common;
          $('#listaPaises').append(`<option value="${nome}">`);
        });
      }
    });
  });
  