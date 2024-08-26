const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" />
        </div>
      </div>
      <button>Login</button>
    </div>
  );
};
export default SignIn;
