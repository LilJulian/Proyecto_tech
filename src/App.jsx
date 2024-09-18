import { useState } from 'react'
<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
import './App.css'


function Encabezado() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='contenedor1'>
    <img className='logo' src="https://www.imprentaonline.net/blog/wp-content/webpc-passthru.php?src=https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png&nocache=1" alt="" />
    <h1 className='titulo'>GESTION DE TAREAS</h1>
    <img className='carrito' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQNJREFUSEvNlNENwjAMRK+bwCawCfzCEMAQ8AtMApvAJtBDMbISJ7EUguqvqkl9frlLB3SuoXN//FXgFWieAK7j8/4XdJpABKTvEsC9VcQ6ohWAc2hOEatkmOoRWxtmAB6ha46iSYC9SUCSC4C1gdAsIBQ0fN5DgD1vow+LQEASpmqX8URIE/KSSWK2pqA3pNPFpEkYZJ3U/K540Syz+Y5kIqLFzfTVYibHos3WIjpl8ZF+KGsCObMpzOkpLGUmqyagzT4Ufh8WqYuAm5gk4nsquZgeAjYuRVSEdZq+w3gFPNObe7wCRwAbACcA26hTaa2aojghVvL0bz4ZeDIE3T2YrsAbv7hAGc/p7GMAAAAASUVORK5CYII="/>
    </div>
    <div className='contenedor2'>
      <nav className='aside'></nav>
      <div className='header'></div>
      <div className='contenido'></div>
    </div>
    </>
  )
}

export default Encabezado
