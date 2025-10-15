
export function Header() {
  return (
    <ol className="bg-purple-700 flex items-center justify-center gap-6 py-4">
      <li className="hidden sm:block">
        <a href="https://lara.horse">
          <p>lara.horse</p>
        </a>
      </li>
      <li className="">
        <a href="https://sso-log.lara.horse/">
          <p>game horses</p>
        </a>
      </li>
      <li>
        <a href="https://laracraft.io">
          <p>laracraft.io</p>
        </a>
      </li>
    </ol>
  );
}
export default Header;