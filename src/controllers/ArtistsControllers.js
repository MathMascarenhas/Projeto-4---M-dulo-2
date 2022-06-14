const Artist = require("../models/Artists");
const orderById = { order: [["id", "ASC"]] };

const Op = require("sequelize").Op;

let message=""

const getAll = async (req, res) => {
  try {
    const artists = await Artist.findAll(orderById);
    res.render("index", {
      artists, message
    });
    message = ""
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const artist = await Artist.findByPk(req.params.id);
    res.render("details", {
      artist
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const createPage = (req, res) => {
  try {
    res.render("create", {message});
    message = "";
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const create = async (req, res) => {
  try {
    const artist = req.body;
    if (!artist.name ||
      !artist.type ||
      !artist.img ||
      !artist.description ||
      !artist.playlist ||
      !artist.last_release ||
      !artist.link_last_release) {
      message = "Preencha todos os campos"
      return res.redirect("/createPage");
    }
    await Artist.create(artist);
    message = "Novo item adicionado as descobertas"
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const editPage = async (req, res) => {
  const artist = await Artist.findByPk(req.params.id);

  if (!artist) {
    res.render("edit");
  }
  res.render("edit", {
    artist, message
  });
  message = ""
};

const edit = async (req, res) => {
  try {
    const artist = await Artist.findByPk(req.params.id);
    const {
      name,
      type,
      img,
      description,
      playlist,
      last_release,
      link_last_release,
    } = req.body;

    artist.name = name;
    artist.type = type;
    artist.img = img;
    artist.description = description;
    artist.playlist = playlist;
    artist.last_release = last_release;
    artist.link_last_release = link_last_release;

    if (!artist.name ||
      !artist.type ||
      !artist.img ||
      !artist.description ||
      !artist.playlist ||
      !artist.last_release ||
      !artist.link_last_release) {
      message = "Preencha todos os campos"
      return res.redirect(`/editPage/${artist.id}`);
    }

    const artistEdited = await artist.save(); 
    message = "Item Editado com sucesso!";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const delet = async (req, res) => {
  try {
    await Artist.destroy({ where: { id: req.params.id } });
    message = "Item deletado das descobertas";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};


module.exports = {
    getAll,
    getById,
    createPage,
    create,
    editPage,
    edit,
    delet
  };