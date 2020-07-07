import React from 'react';
//import './App.css';
import './title.scss';
import {Input,Button, Select} from 'antd'
import 'antd/dist/antd.css'
const Search = Input.Search;
const Option = Select.Option; 
class App extends React.Component{
  state = {
    val:'',
    list:[]
  }
  handleAdd = (event)=>{
    let{val,list} = this.state;
    list.push(val);
    this.setState({
      list
    })
  }
  handlechange = (event)=>{
    let val = event.target.value;
    this.setState({
      val
    })
    
  }
  handleSearch = (value)=>{
    let{list} = this.state;
    list.push(value);
    this.setState({
      list
    })
  }
  render(){
      let {val,list} = this.state;
      const options = [];
      const LiItem = list.map((item,index) =>{
            options.push(<Option key = {index}>  {item}</Option>)
            return <li key = {index}>{item}</li>
      });
      return <div>
        <p>欢迎使用antd！</p>
        <h1>hello world!</h1>
        <Input type = "text" onChange={this.handlechange} value = {val} style={{ width: 300 }}></Input>
        <Button type = "primary"  onClick={this.handleAdd}>添加</Button>
        <ul>
          {LiItem}
        </ul>
        <div>
          <Search  style = {{width :400}}
          enterButton = "添加" 
          onSearch = {this.handleSearch}></Search>
          <br/>
          <Select style = {{width: 150}}>
            {options}
          </Select>
        </div>
      </div>

  }
}


export default App;
