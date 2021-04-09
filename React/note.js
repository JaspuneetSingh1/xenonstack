class Note extends React.Component {
  
  editing(){
    alert ('Editing')
    }
  
  
  deleting(){
    alert ('Deleting')
    }
  
  render() {
    return{
      <div className="Note">
      <p></p>
      <span> 
      <button OnClick=this.editing>EDIT</button>
      <button OnClick=this.deleting>X</button>
      
      </span>
      
      
      </div>
    }
  }
}
      
      
      ReactDOM.render(<Note>Hello World!</Note>, document.getElementbyId('root'))
      
