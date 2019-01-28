import React from 'react'


class Edit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} style={{marginLeft: 350, marginTop: 80}}>
          <label >
            Name of School:
            <input type="text" value={this.state.value} onChange={this.handleChange} style={{marginLeft: 15}} />
          </label><br/>
          <label >
            Url of School:
            <input type="text" value={this.state.value} onChange={this.handleChange} style={{marginLeft: 15, marginTop: 10}} />
          </label><br/>
          <label >
            Description of School:
            <input type="text" value={this.state.value} onChange={this.handleChange} style={{marginLeft: 15, marginTop: 10}} />
          </label><br/>
          <label >
            Logo of School:
            <input type="text" value={this.state.value} onChange={this.handleChange} style={{marginLeft: 15, marginTop: 10}} />
          </label><br/>
          <input type="submit" value="Submit" style={{marginLeft: 100, marginTop: 20}} />
        </form>
      );
    }
  }
         
         export default Edit