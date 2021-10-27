function WelcomePage({ user, setIsLoggedIn }) {
  function HandleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <h1>Seja bem-vindo {user}</h1>
      <button onClick={HandleLogout}>Logout</button>
    </div>
  );
}

export default WelcomePage;
