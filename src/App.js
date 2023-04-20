import { useState } from 'react';

import './App.scss';
import { data } from './context/data';

import Header from './components/header/Header';
import Card from './components/cards/Card';
import Menu from './components/menu/Menu';
import Lists from './components/lists/Lists';

function App() {
  const [customData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);
  const [hasAscending, setHasAscending] = useState(false);
  const [hasListView, setHasListView] = useState(false);

  const onSortData = () => {
    customData.sort((a, b) => {
      if (!hasAscending) {
        setHasAscending(true);
        return a.title.localeCompare(b.title);
      } else {
        setHasAscending(false);
        return b.title.localeCompare(a.title);
      }
    });
    setFilteredData(prevState => [...prevState]);
  }

  const toggleView = () => {
    setHasListView(!hasListView);
  }

  const onHandleSearch = (e) => {
    if (e.target.value !== '') {
      const filteredEmployee = customData.filter(item => item.title.toLowerCase().includes((e.target.value).toLowerCase()));
      setFilteredData(filteredEmployee);
    } else {
      setFilteredData(customData);
    }
  }

  return (
    <div className="App">
      <Header onHandleSearch={onHandleSearch} />
      <Menu onSortData={onSortData} toggleView={toggleView} />
      {!hasListView ? filteredData && filteredData.length ?
        <div className='grid-container' style={{ gridTemplateColumns: `${filteredData.length > 2 ? 'auto auto auto' : 'auto auto'}` }}>
          {filteredData.map((item, index) => {
            return <Card key={index} details={item} />
          })}
        </div> : <h2>No Record Found</h2> :
        filteredData && filteredData.length ? <Lists data={filteredData} /> : <h2>No Record Found</h2>
      }
    </div>
  );
}

export default App;
