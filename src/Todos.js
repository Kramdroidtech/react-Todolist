const Todos = () => {
  const storage = localStorage.getItem('Todos')
  if(storage){
    return JSON.parse(localStorage.getItem('Todos'));
  }else{
    JSON.stringify(localStorage.setItem('Todos',`[]`));
    return []
  }
}

export default Todos;