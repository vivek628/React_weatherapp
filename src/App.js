
import './App.css';
import Left from "../src/Component/Part/Leftside"
import Right from "../src/Component/Part/Right"
function App() {
  return (
   <div class="container">
     <div className='left'>
      <Left></Left>
     </div>
     <div className='right'>
     <Right></Right>
     </div>
   </div>
  );
}

export default App;
