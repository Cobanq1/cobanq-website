import { Link } from "react-router-dom";

// Renders a real <a> for external URLs (http/https) and a router <Link>
// for internal paths, so callers can pass either without caring which.
export default function SmartLink({ to, children, className }) {
  if (to.startsWith("http")) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
