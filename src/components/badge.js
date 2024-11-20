function Badge(props) {
  const { status = "Default", color = "light" } = props;

  let badgeClass = "badge";
  if (color === "warning") {
    badgeClass === " bg-warning";
  } else if (color === "success") {
    badgeClass === " bg-success"; 
  } else if (color === "secondary") {
    badgeClass === " bg-secondary"; 
  } else {
    badgeClass === "bg-light"
  }

  return <span className={badgeClass}>{status}</span>;
}

export default Badge;
