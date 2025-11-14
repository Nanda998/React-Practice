import ComponentOne from "./components/component1"
import { team } from "./data/data"

function App(){
  return(
    <div>
      {
        team.map((member) =>{
        return <ComponentOne name={member.name} age={member.age} role={member.role} exp={member.exp} />
      })
      }
    </div>
  )
  

}
export default App