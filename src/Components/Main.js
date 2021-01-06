import {Component} from 'react'
import Title from './Title'
import List from './List'

class Main extends Component {
    render(){
      return (
        <div>
          <Title title="Sample Task Lists"/>,
          <List tasks={['Get Ready','Go to Grocery'] }/>
          <List tasks={['Iron Clothes','Order Lunch'] }/>
        </div>
      )
    }
  }

  export default Main