const { body, validationResult } = require("express-validator");
const { validarCPF } = require("../Validations/cpfValidations");

const ClienteValidationRules = () => {
  return [
    body("Idade").notEmpty().withMessage("é obrigatório informar a idade"),
    body("Idade").isFloat({min:15,max:Infinity}).withMessage("Idade não pode ser menor que 16"),
    body("CPF").notEmpty().withMessage("CPF obrigatório"),
    body("CPF")
    .custom((value) => {
      if (!validarCPF(value)) throw new Error("CPF é inválido!");
      return true;
    })
    .withMessage("CPF inválido"),
    body("SalarioBruto").notEmpty().withMessage("é obrigatório informar o salário"),
    body("SalarioBruto").isFloat({min:0, max:Infinity}).withMessage("Salário deve ser maior ou igual a 0"),
    body("QtdeDependentes").isFloat({min:0,max:Infinity}).withMessage("Dependentes deve ser maior ou igual a 0")
  ];
};

module.exports = {
    ClienteValidationRules,
};