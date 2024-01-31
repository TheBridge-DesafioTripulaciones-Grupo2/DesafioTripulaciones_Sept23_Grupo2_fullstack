const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require("../schemas/User");

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    done(null, user);
  } catch (error) {
    done(error);
  }
});

passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  try {
    const userSigned = await User.findOne({ where: { email: email } });
    const match = await bcrypt.compare(password, userSigned.password);
    if(match){
        const user = userSigned;
        return done(null, user);
    } else {
      return done(null, false, { message: 'Credenciales incorrectas' });
    }  
    } catch (error) {
    return done(error);
  }
}));

module.exports = passport;