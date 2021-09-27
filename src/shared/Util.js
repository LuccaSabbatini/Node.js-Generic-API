module.exports = {
  nowDate() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    if (day < 10) {
      day = "0" + day;
    }

    if (month < 10) {
      month = "0" + month;
    }

    return `${year}-${month}-${day}T${hours}:${minutes}:00.000Z`;
  },

  filterReqBody(req, filter) {
    let filteredReqBody;

    switch (filter) {
      case "post":
        filteredReqBody = {
          title: req.body.title,
          content: req.body.content,
          author: req.body.author,
          publicationDate: this.nowDate(),
        };

        return filteredReqBody;
      case "user":
        filteredReqBody = {
          name: req.body.name,
          biography: req.body.biography,
          registrationDate: this.nowDate(),
        };

        return filteredReqBody;
      default:
        return null;
    }
  },
};
