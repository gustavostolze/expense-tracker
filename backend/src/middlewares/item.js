const validateField = (request, response, next) => {
  const { body } = request;
  const { id, date, category, title, value } = body;

  if (
    id === undefined ||
    date === undefined ||
    category === undefined ||
    title === undefined ||
    value === undefined
  ) {
    response.status(400).json({ message: "ALL fields must be defined." });
  } else if (
    id === "" ||
    date === "" ||
    category === "" ||
    title === "" ||
    value === ""
  ) {
    response.status(400).json({ message: "Fields must not be empty." });
  } else {
    next();
  }
};

const validateUpdate = (request, response, next) => {
  const { body } = request;
  const { date, category, title, value } = body;

  if (
    date === undefined ||
    category === undefined ||
    title === undefined ||
    value === undefined
  ) {
    response.status(400).json({ message: "ALL fields must be defined." });
  } else if (
    date === "" ||
    category === "" ||
    title === "" ||
    value === ""
  ) {
    response.status(400).json({ message: "Fields must not be empty." });
  } else {
    next();
  }
};

module.exports = {
  validateField,
  validateUpdate,
};
