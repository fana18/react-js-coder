import CartWidget from "./CartWidget"; 

const Navbar = () => {
  const navbarStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    background: "#2d3748", 
    zIndex: "1000", 
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
    margin: "0 auto",
    maxWidth: "100%",
  };

  const ulStyle = {
    display: "flex",
    listStyle: "none",
    margin: "0",
    padding: "0",
  };

  const liStyle = {
    margin: "0 0.5rem",
    padding: "0",
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "white",
    transition: "color 0.3s",
    cursor: "pointer",
  };

  titleStyle["&:hover"] = {
    color: "#fuchsia",
  };

  const redirectToPage = (pageId) => {
    const pageUrls = {
      inicio: "/inicio",
      nosotros: "/nosotros",
      form: "/formulario",
      productos: "/productos",
    };

    window.location.href = pageUrls[pageId];
  };

  return (
    <nav style={navbarStyle}>
    <div className="container mx-auto h-16">
      <div style={containerStyle}>
        <h1 style={titleStyle} onClick={() => redirectToPage("inicio")}>
          Power-Technology
        </h1>
        <ul style={ulStyle} className="lg:flex space-x-8">
          <li style={liStyle}>
            <span
              className="text-white hover:text-fuchsia-600 transition cursor-pointer"
              onClick={() => redirectToPage("inicio")}
            >
              Inicio
            </span>
          </li>
          <li style={liStyle}>
            <span
              className="text-white hover:text-fuchsia-600 transition cursor-pointer"
              onClick={() => redirectToPage("nosotros")}
            >
              Nosotros
            </span>
          </li>
          <li style={liStyle}>
            <span
              className="text-white hover:text-fuchsia-600 transition cursor-pointer"
              onClick={() => redirectToPage("form")}
            >
              Form
            </span>
          </li>
          <li style={liStyle}>
            <span
              className="text-white hover:text-fuchsia-600 transition cursor-pointer"
              onClick={() => redirectToPage("productos")}
            >
              Productos
            </span>
          </li>
        </ul>
        
        <CartWidget />
      </div>
    </div>
  </nav>
  );
};



export default Navbar;
