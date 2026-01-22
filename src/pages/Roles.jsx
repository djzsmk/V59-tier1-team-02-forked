export default function Roles(selectedRole) {
    const handleChange = (e) => {
        const path = e.target.value;
        if (path) {
            window.location.href=path 
        }
    };

    return (
        <select value= {selectedRole} onChange= {handleChange}>
            <option value="">Get Started</option>
            <option value= "/questions/scrum-master">SCRUM Master</option>
            <option value= "/questions/product-owner">Product Owner</option>
            <option value= "/questions/ui-ux">UX/UI Designer</option>
            <option value= "/questions/web-developer"> Web Developer</option>
            <option value = "/questions/python-Developer">Python Developer</option>
        </select>
    )
};
