
export function Header() {
  return (
    <ol className="bg-primary flex items-center justify-center gap-6 py-4 m-8">
      <li>
        <a href="https://lara.horse">
          <a>lara.horse</a>
        </a>
      </li>
      <li className="hidden sm:block">
        <a href="https://sso-log.lara.horse/">
          <a>game horses</a>
        </a>
      </li>
      <li className="hidden sm:block">
        <a href="https://laracraft.io">
          <a>laracraft.io</a>
        </a>
      </li>
    </ol>
  );
}
export default Header;