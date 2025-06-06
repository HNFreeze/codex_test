

export default function App() {
  return (
    <>
 codex/crear-componente-navbar.jsx-con-enlaces
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animales" element={<Animales />} />
        <Route path="/protectoras" element={<Protectoras />} />
      </Routes>

      <nav>
        <Link to="/">Inicio</Link> | <Link to="/animales">Animales</Link> | <Link to="/protectoras">Protectoras</Link>
      </nav>
      <AppRoutes />
 main
    </>
  );
}
