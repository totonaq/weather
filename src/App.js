import React, { Component } from 'react';
import './App.css';
import { API_URL } from './config';
import DayNightTemp from './DayNightTemp';
import TextArea from './TextArea';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      dayTime: 0
    }
  }

  getTemp = list => {
    
    const dayTemp = list.filter((item, idx) => {
      return (new Date(item.dt * 1000).getHours() >= 9)
    })

    const nightTemp = list.filter((item, idx) => {
      return (new Date(item.dt * 1000).getHours() < 9)
    })

    return {
      nightTemp: this.getMinMax(nightTemp),
      dayTemp: this.getMinMax(dayTemp)
    }

  }

  getMinMax = list => {

    if (!list.length) return false

    const maxList = list.map((item, idx) => {
      return item.main.temp_max
    });

    const minList = list.map((item, idx) => {
      return item.main.temp_min
    });

    return {
      max: Math.max(...maxList),
      min: Math.min(...minList)
    }
  }

  componentDidMount() {

    const dayTime = new Date().getHours();

    this.setState({dayTime})
  
    fetch(API_URL)
    .then(response => response.json()
      .then(json => response.ok ? json : Promise.reject(json))
    )
    .then(json => {
      localStorage.setItem('weather', JSON.stringify(json))
      localStorage.setItem('time', +new Date())
    
      this.setState({
        list: json.list.slice(0, 8)
      })

    })
    .catch(error => console.log('error', error))
    
  }

  render() {

    const { list, dayTime } = this.state;

    const minNight = this.getTemp(list).nightTemp.min || 0;
    const maxNight = this.getTemp(list).nightTemp.max || 0;
    const minDay = this.getTemp(list).dayTemp.min || 0;
    const maxDay = this.getTemp(list).dayTemp.max || 0;

    return (
     
        <div className='app'>
          <DayNightTemp 
            minNight={minNight}
            maxNight={maxNight}
            minDay={minDay}
            maxDay={maxDay}
          />
          <TextArea list={this.state.list} dayTime={dayTime} />
        </div>
      
    );
  }
}

export default App;