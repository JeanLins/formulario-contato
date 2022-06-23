function validarPlaca(entradaDoUsuario) {
  var placa = entradaDoUsuario.value // Passa para a variável 'placa' o que o usuário digitar no formulário

  if (placa.length === 1 || placa.length === 2) {
    // Quando a string possuir 1 ou 2 dígitos
    placaMaiuscula = placa.toUpperCase() // Passa a string para letras maiúsculas
    document.forms[0].placa.value = placaMaiuscula // Coloca a string modificada de volta no formulário
    return true
  }

  if (placa.length === 3) {
    // Quando a string possuir 3 dígitos
    placa += '-' // Adiciona um hífen
    placaMaiuscula = placa.toUpperCase() // Passa a string para letras maiúsculas
    document.forms[0].placa.value = placaMaiuscula // Coloca a nova string de volta no formulário
    return true
  }
  if (placa.length === 8) {
    // Quando a string possuir 1 ou 2 dígitos
    placaMaiuscula = placa.toUpperCase() // Passa a string para letras maiúsculas
    document.forms[0].placa.value = placaMaiuscula // Coloca a string modificada de volta no formulário
    return true
  }
}

function validarTel() {
  document.getElementById('celular').addEventListener('input', function (e) {
    var x = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,5})(\d{0,4})/)
    e.target.value = !x[2]
      ? x[1]
      : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
  })
}

function validarCep() {
  document.getElementById('cep').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,5})(\d{0,3})/)
    e.target.value = x[1] + (x[2] ? '-' + x[2] : '')
  })
}

function validarRF() {
  document.getElementById('RF').addEventListener('input', function (e) {
    var x = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/)
    e.target.value =
      x[1] +
      (x[2] ? '.' + x[2] : '') +
      (x[3] ? '.' + x[3] : '') +
      (x[4] ? '-' + x[4] : '')
  })
}

function validaDTA() {
  document
    .getElementById('nascimento_')
    .addEventListener('input', function (e) {
      var x = e.target.value
        .replace(/\D/g, '')
        .match(/(\d{0,2})(\d{0,2})(\d{0,4})/)
      e.target.value =
        x[1] + (x[2] ? '-' + x[2] : '') + (x[3] ? '-' + x[3] : '')
    })
}

function gerarLink() {
  document.querySelector('input[name="link_whatsapp"]').value =
    'https://wa.me/55' +
    document.getElementById('celular').value.replace(/\D/g, '')
}

function escerve_info() {
  document.querySelector('input[id="vinculo_"]').value =
    document.getElementById('select_').value
}

function falarWhats() {
  window.open(
    'https://wa.me/5511950089099?text=Nome: ' +
      document.getElementById('name').value +
      ' Email: ' +
      document.getElementById('mail_').value +
      ' CPF: ' +
      document.getElementById('RF').value +
      ' Data de nascimento: ' +
      document.getElementById('nascimento_').value +
      ' CEP: ' +
      document.getElementById('cep').value +
      ' Placa: ' +
      document.getElementById('placa').value +
      ' Vencimento do Seguro: ' +
      document.getElementById('vigencia_').value +
      ' Vinculo professor: ' +
      document.getElementById('vinculo_').value
  )
}
