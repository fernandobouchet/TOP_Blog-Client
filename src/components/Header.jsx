const Header = () => {
  return (
    <header
      className="container"
      style={{
        minHeight: '5rem',
      }}
    >
      <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1 style={{ fontSize: 'calc(2rem + 1.5vw)', fontWeight: '900' }}>
          Blog.
        </h1>
      </a>
    </header>
  );
};

export default Header;
