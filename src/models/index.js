const models = {
  usersModel: require(`./nosql/usersModel`),
  projectsModel: require(`./sql/projectsModel`),
  clientsModel: require(`./sql/clientsModel`),
};

module.exports = models;