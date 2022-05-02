function nowDate() {
  return new Date().toJSON();
}

function filterReqBody(req, filter) {
  let filteredReqBody;

  switch (filter) {
    case "post":
      filteredReqBody = {
        title: req.body.title,
        content: req.body.content,
        authorId: req.body.author,
        creationDate: nowDate(),
      };

      return filteredReqBody;
    case "user":
      filteredReqBody = {
        name: req.body.name,
        biography: req.body.biography,
        creationDate: nowDate(),
      };

      return filteredReqBody;
    default:
      return null;
  }
}

module.exports = {
  filterReqBody,
  nowDate,
};
