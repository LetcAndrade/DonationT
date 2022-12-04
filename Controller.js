const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let user = models.User;
let doacao = models.Doacao;
let preagendamento = models.PreAgendamento;

app.post('/login', async (req, res) => {
  let response = await user.findOne(
    {
      where: { cpf: req.body.cpf, senha: req.body.senha }
    }
  );

  if (response === null) {
    res.send(JSON.stringify('error'));
  } else {
    res.send(response);
  }
});

app.post('/create', async (req, res) => {
  let reqs = await models.User.create
    ({
      'name': req.body.nameUser,
      'cpf': req.body.cpfUser,
      'data': req.body.dataUser,
      'celular': req.body.celularUser,
      'peso': req.body.pesoUser,
      'sexo': req.body.sexoUser,
      'tsangue': req.body.tsangueUser,
      'senha': req.body.senhaUser,
      'createdAt': new Date(),
      'updatedAt': new Date()
    });
  if (reqs) {
    res.send(JSON.stringify(' O usuário foi cadastrado com sucesso!'));
    console.log(reqs);
  }
});

app.post('/pre-schedule', async (req, res) => {
  let reqs = await preagendamento.create
    (
      {
        'Confirmacao': 0,
        'horarioAgend': req.body.horarioAgend,
        'dataAgendamento': req.body.dataAgendamento,
        'idUser': req.body.idUser
      }
    )

  if (reqs) {
    res.send(JSON.stringify('Pré-agendamento confirmado com sucesso!'));
  }
});

app.get('/verify-pre-schedule-status/:preScheduleId', async (req, res) => {
  let response = await preagendamento.findOne(
    {
      where: { id: req.params.preScheduleId }
    }
  );

  if (response === null) {
    res.send(JSON.stringify('error'));
  } else {
    res.send(response);
  }
})

app.post('/donate', async (req, res) => {
  let reqs = await doacao.create(
    {
      'idUsuario': req.body.idUser,
      'DataSaida': null,
      'DataDoacao': new Date(),
    }
  );

  if (reqs) {
    res.send(JSON.stringify('A doação foi realizada com sucesso!'));
  }
})

app.get('/get-all-donate/:userId', async (req, res) => {
  let totalDonate = await doacao.count(
    {
      where: {userId: req.params.userId}
    }
  )

  if (totalDonate === null) {
    res.send(JSON.stringify('error'))
    return
  }

  let totalOut = await doacao.count(
    {
      where: {userId: req.params.userId, dataSaida: {$ne: null}}
    }
  )

  res.send(JSON.stringify({totalDoado: totalDonate, totalSaida: totalOut}))
})

app.get('/verify-donate-status/:donateId', async (req, res) => {
  let response = await doacao.findOne(
    {
      where: { id: req.params.donateId }
    }
  );

  if (response === null) {
    res.send(JSON.stringify('error'));
  } else {
    res.send(response);
  }
})

let port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log('Servidor rodando');
});

