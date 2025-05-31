$("#calcular").click(function () {
    var nome = String($("#txtnome").val());
    var idade = parseInt($("#txtidade").val());
    var salarioBruto = parseFloat($("#txtsalario").val());
    var qtddependente = $("#qtddepen").val();

    var dependentes = 0;
    if (qtddependente === "6 ou +") {
        dependentes = 6; 
    } else {
        dependentes = parseInt(qtddependente);
    }

    if (!nome || isNaN(idade) || isNaN(salarioBruto) || isNaN(dependentes)) {
        alert('Por favor, insira as informações validas');
        return;
    }
    var bonus = (idade > 50) ? 300 : 200;

    var inss = salarioBruto * 0.08

    var vt = salarioBruto * 0.05

    var valorDependente = dependentes * 50;

    var salarioLiquido = salarioBruto - inss - vt + bonus + valorDependente

    $("#txtnome_result").text("Nome: " + nome);
    $("#qtddepen_result").text("Quantidade de dependentes: " + dependentes);
    $("#txtsalario_result").text("Salário bruto: R$ " + salarioBruto.toFixed(2));
    $("#inss").text("INSS (8%): R$ " + inss.toFixed(2));
    $("#vt").text("Vale transporte (5%): R$ " + vt.toFixed(2));
    $("#txtsalarioliq").text("Salário Líquido: R$ " + salarioLiquido.toFixed(2));
});