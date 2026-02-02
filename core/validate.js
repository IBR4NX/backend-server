function validateEmail(email) {
  const re = /^\S+@\S+\.\S+$/;
  if (!re.test(String(email))) throw new Error("Invalid email address");
}
function validatePassword(password) {
  if (!password || password.length < 6)
    throw new Error("Password must be at least 6 characters long");
}
export {validateEmail, validatePassword}