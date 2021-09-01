const allUsers = require("../data/users.json");

function getAllUsers(limit) {
  return limit ? allUsers.slice(0, limit) : allUsers;
}

function getUser(id) {
  return allUsers.find(user => user.id === id);
}

// function getCategories() {
//   let categories = [];
//   allUsers.forEach(product => {
//     if (!categories.includes(product.category)) {
//       categories.push(product.category);
//     }
//   });
//   return categories;
// }
function getUserByGender(gender) {
  return allUsers.filter(
    user => user.gender.toLowerCase() === gender.toLowerCase()
  );
}

module.exports = {
  getAllUsers,
  getUser,
  // getCategories,
  getUserByGender,
};
