import ComponentOne from "./component/component1";
import { team } from "./data/data";
import './App.css'

function App(){
    return(<div className="con">
        <div className="card">
            {
                team.map((member) =>{
                return <ComponentOne picture={member.picture} name={member.name} age={member.age} role={member.role} exp={member.exp} />
                })
            }
        </div>
        </div>
    )
}
export default App