const createUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { username, fullName, email, password },
  } = req;

  // TODO: check if username is taken, what should you return?
  const user = await User.create({
    username,
    full_name: fullName,
    email,
    password,
  });
  session.userId = user.id;

  res.send(user);
};

module.exports = createUser;
