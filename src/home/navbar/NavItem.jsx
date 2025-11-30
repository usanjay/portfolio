function NavItem({ content, toggleMenu }) {
  return (
    <a
      href={`#${content.toLowerCase()}`}
      className="hover-border cursor-pointer"
      {...(toggleMenu ? { onClick: toggleMenu } : {})}
    >
      {content}
    </a>
  );
}

export default NavItem;
