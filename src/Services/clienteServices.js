module.exports.ValidacaoDeRegras = (cliente) => {
  var retorno
  if(cliente.Idade < 18){
      retorno = {
          Mensagem:"Limite de crédito não disponível"
      }
  }
  else if(cliente.RestricaoSerasa == true && cliente.Emprego == false){
      retorno = {
          Mensagem:"Limite de crédito não disponível"
      }
  }
  else if(cliente.RestricaoSerasa == true && cliente.Emprego == true && cliente.TempoDeEmprego < 6){
      retorno = {
          Mensagem:"Limite de crédito não disponível"
      }
  }
  else if(cliente.RestricaoSerasa == true && cliente.Emprego == true && ccliente.TempoDeEmprego >= 6 && cliente.TempoDeEmprego < 12){
      retorno = {
          Mensagem:"Limite de 10% do salário bruto disponível", 
          Limite: this.calculaLimite(cliente.SalarioBruto, 10)
      }
  }
  else if(cliente.RestricaoSerasa == true && cliente.Emprego == true && cliente.TempoDeEmprego >= 12){
      retorno = {
          Mensagem:"Limite de 20% do salário bruto disponível", 
          Limite: this.calculaLimite(cliente.SalarioBruto, 20)
      }
  } 
  else if(cliente.RestricaoSerasa == false && cliente.Emprego == false){
      retorno = {
          Mensagem:"Limite de crédito não disponível"
      }
  }
  else if(cliente.RestricaoSerasa == false && cliente.Emprego == true && cliente.TempoDeEmprego < 6){
      retorno = {
          Mensagem:"Limite de 10% do salário bruto disponível",
          Limite: this.calculaLimite(cliente.SalarioBruto, 10)
      }
  }
  else if(cliente.RestricaoSerasa == false && cliente.Emprego == true && cliente.TempoDeEmprego >= 6 && cliente.TempoDeEmprego < 12){
      retorno = {
          Mensagem:"Limite de 20% do salário bruto disponível", 
          Limite: this.calculaLimite(cliente.SalarioBruto, 20)
      }
  }
  else if(cliente.RestricaoSerasa == false && cliente.Emprego == true && cliente.TempoDeEmprego > 12){
      retorno = {
          Mensagem:"Limite de 30% do salário bruto disponível",
          Limite: this.calculaLimite(cliente.SalarioBruto, 30)
      }
  }
  return retorno;
};

module.exports.calculaLimite = (salario, porcentagem) =>{
  return (salario * (porcentagem/100))
}