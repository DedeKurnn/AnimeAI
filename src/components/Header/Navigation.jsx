const Navigation = () => {
  return (
    <header className="container sticky flex justify-between p-4 mx-auto">
      <span>AniAI</span>
      <nav>
        <ul className="flex gap-8">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Support Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation
