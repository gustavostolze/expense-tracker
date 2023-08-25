const validateField = (request, response, next) => {
    const { body } = request;
    const [categoryKey] = Object.keys(body);
    const { title, color, expense } = body[categoryKey]
    
    response.header('Access-Control-Allow-Origin', '*');

    if (categoryKey === undefined) {
        response.status(400).json({ ERROR: "CategoryKey cannot be undefined" });
    } else if (categoryKey === '') {
        response.status(400).json({ ERROR: "CategoryKey cannot be empty" });
    } else if (title === undefined) {
        response.status(400).json({ ERROR: "Title cannot be undefined" });
    } else if (title === '') {
        response.status(400).json({ ERROR: "Title cannot be empty" });
    } else if (color === undefined) {
        response.status(400).json({ ERROR: "Color cannot be undefined" });
    } else if (color === '') {
        response.status(400).json({ ERROR: "Color cannot be empty" });
    } else if (expense === undefined) {
        response.status(400).json({ ERROR: "Expense must have a true or false" });
    } else {
        next();
    }
};

module.exports = {
    validateField
};