import React from 'react';

function App() {

  const onSubmit = () => {
    var e = new FormData()

    const file = document.getElementById('file')
    e.append("file", file.files[0])

    console.log(file.files[0])
  }

  return (
    <div className="App">
      <form>
        <input onChange={onSubmit} type="file" name="file" id="file"/>
        <button type="submit">salvar</button>
      </form>
    </div>
  );
}

export default App;
