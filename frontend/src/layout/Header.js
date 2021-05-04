function Header({ loggedIn }) {
  return (
    <div>
      {loggedIn && <p>Logout</p>}
      {!loggedIn && <p>Login</p>}
    </div>
  );
}

export default Header;
