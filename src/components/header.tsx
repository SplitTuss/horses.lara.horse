
export function Header() {
  return (
    <ol className="bg-purple-700 flex items-center justify-center gap-6 py-4">
      <li className="hidden sm:block">
        <a href="https://lara.horse">
          <a>lara.horse</a>
        </a>
      </li>
      <li className="">
        <a href="https://sso-log.lara.horse/">
          <a>game horses</a>
        </a>
      </li>
      <li>
        <a href="https://laracraft.io">
          <a>laracraft.io</a>
        </a>
      </li>
    </ol>
  );
}
export default Header;