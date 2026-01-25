import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import { roles } from "../data/roles.js";
import { useNavigate } from "react-router-dom";

export default function Roles() {

    const navigate= useNavigate()
    
    
    
    const handleChange = (e) => {
        const roleId= e.target.value;
        if (roleId) {
            navigate(`/questions/${roleId}`) 
        }
    };

    

    return (          
            <>

                <Header/>            

        <select className ="roleslist" defaultValue="" onChange= {handleChange}>
            <option value="" disabled>Get Started</option>

            {roles.map(role => (
            <option key={role.id} value={role.id}>
               {role.label}
            </option>
            ))}
        </select>

            <Footer/>
        
        
        </>
        
        
       
    )
};
