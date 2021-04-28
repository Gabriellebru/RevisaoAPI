const { Router, request } = require("express");
const { validate } = require("../Validations/validations");
const { ClienteValidationRules } = require("../Validations/clienteValidations");
const Service = require("../Services/clienteServices");


const routes = Router();

routes.post("/", ClienteValidationRules(), validate, (request, response) => {
  const {Nome, CPF, Idade, SalarioBruto, QtdeDependentes, Emprego, TempoDeEmprego, RestricaoSerasa} = request.body;
  const cliente = {Nome, CPF, Idade, SalarioBruto, QtdeDependentes, Emprego, TempoDeEmprego, RestricaoSerasa};
  const clienteRetorno = Service.ValidacaoDeRegras(cliente);
  return response.status(201).json({ clienteRetorno });
});

module.exports = routes;