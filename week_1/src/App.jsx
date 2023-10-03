import logo from './Rigel Foto.jpg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isCircular, setIsCircular] = useState(false);

  const imgStyle = {
    width: '40%',
    borderRadius: isCircular ? '50%' : '0%'
  };

  const pengalamanStyle = {
    border: '2px solid #000',
    padding: '10px'
  };

  const toggleCircular = () => {
    setIsCircular(!isCircular);
  }

  return (
    <div>
      <div className="App">

        <div className='section1'>
          {/* Div untuk Gambar */}
          <div className="Foto">
            <img src={logo} className="Foto" alt="logo" style={imgStyle}/>
          </div>

          {/* Div untuk Nama */}
          <div className='nama'>
            <h1>RIGEL SUNDUN TANDILOLO</h1>
          </div>
        </div>

        <div className='section2'>
          {/* Div untuk 2 poin */}
          <div className='poinKiri'>
            <p>Gender : Male</p>
            <p>Career : Ga Tau jga</p>
          </div>

          {/* Div untuk 4 poin */}
          <div className='poinKanan'>
            <p>Angkatan : 2022/2023</p>
            <p>Jalur Sukses : Jalur Percaya Yesus</p>
            <p>Jurusan : IMT - Full Stack Development</p>
            <p>Hobi : Mendesain, Ngoding, Menyanyi, Sekian</p>
          </div>
        </div>
        <div className='organisasi'>
          <h1>PENGALAMAN BERORGANISASI</h1>

          <div className='organisasipenjelas'>
          <h1 className='judulorganisasi'>INFINITY GENERASI KE-2 UC MAKASSAR</h1>
          <pre>Bekerja sebagai Koordinator Divisi Media yang bertugas
            untuk mengkoordinasi antar divisi serta menjadi ketua dari
            divisi Media.</pre>

          <h1 className='judulorganisasi'>O-WEEK UC MAKASSAR 2023</h1>
          <pre>
            Bekerja sampai tipes dan dbd.
          </pre>
          </div>

          <button onClick={toggleCircular}>Ubah Ukuran Foto</button>
        </div>
      </div>

    </div>
  );
}

export default App;
