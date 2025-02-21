import Logo from "./Logo";

function Header() {
  return (
    <header className="flex items-center gap-2 bg-white p-2">
      <Logo />
      <h1 className="text-xl font-bold">반려견 피부질환 진단 서비스</h1>
    </header>
  );
}

export default Header;
