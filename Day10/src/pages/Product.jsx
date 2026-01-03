import { Link, Outlet } from "react-router-dom";
export const Product = () => {
  return (
    <div>
      <div>
        <Link to="">Prodcut</Link>
        <Link to="men">Men</Link>
        <Link to="women">Women</Link>
      </div>
      <Outlet />
    </div>
  );
};
