const proffys = [
  {
    name: "Diego Fernandes",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "123456789",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: "Orlando Brock",
    avatar:
      "https://avatars2.githubusercontent.com/u/39416095?s=460&u=df84eb1c4f9621cb24960c6cdeb16aaf2e440d23&v=4",
    whatsapp: "40028922",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "40",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
];

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
];
const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

function getSubject(subjectNumber) {
  return subjects[subjectNumber];
}

function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
  const data = req.query;
  const isNotEmpty = Object.keys(data).length > 0;
  data.subject = getSubject(data.subject);
  if (isNotEmpty) {
    proffys.push(data);
    return res.redirect("/study");
  }

  return res.render("give-classes.html", { subjects, weekdays });
}

const express = require("express");
const server = express();
const nunjucks = require("nunjucks");

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server
  .use(express.static("public")) //Configurar arquivos estaticos
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5500);
