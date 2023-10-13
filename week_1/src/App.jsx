import logo from './Rigel Foto.jpg';
import './App.css';
import React , { useState } from 'react';


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
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'App' },
      React.createElement(
        'div',
        { className: 'section1' },
        React.createElement(
          'div',
          { className: 'Foto' },
          React.createElement('img', { src: logo, className: 'Foto', alt: 'logo', style: imgStyle })
        ),
        React.createElement(
          'div',
          { className: 'nama' },
          React.createElement('h1', null, 'RIGEL SUNDUN TANDILOLO')
        )
      ),
      React.createElement(
        'div',
        { className: 'section2' },
        React.createElement(
          'div',
          { className: 'poinKiri' },
          React.createElement('p', null, 'Gender : Male'),
          React.createElement('p', null, 'Career : Ga Tau jga')
        ),
        React.createElement(
          'div',
          { className: 'poinKanan' },
          React.createElement('p', null, 'Angkatan : 2022/2023'),
          React.createElement('p', null, 'Jalur Sukses : Jalur Percaya Yesus'),
          React.createElement('p', null, 'Jurusan : IMT - Full Stack Development'),
          React.createElement('p', null, 'Hobi : Mendesain, Ngoding, Menyanyi, Sekian')
        )
      ),
      React.createElement(
        'div',
        { className: 'organisasi' },
        React.createElement('h1', null, 'PENGALAMAN BERORGANISASI'),
        React.createElement(
          'div',
          { className: 'organisasipenjelas' },
          React.createElement('h1', { className: 'judulorganisasi' }, 'INFINITY GENERASI KE-2 UC MAKASSAR'),
          React.createElement(
            'pre',
            null,
            'Bekerja sebagai Koordinator Divisi Media yang bertugas untuk mengkoordinasi antar divisi serta menjadi ketua dari divisi Media.'
          ),
          React.createElement('h1', { className: 'judulorganisasi' }, 'O-WEEK UC MAKASSAR 2023'),
          React.createElement('pre', null, 'Bekerja sampai tipes dan dbd.')
        ),
        React.createElement('button', { onClick: toggleCircular }, 'Ubah Ukuran Foto')
      )
    )
  );
}

export default App;
