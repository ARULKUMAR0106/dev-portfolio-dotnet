
const items = [
    { id: 1, label: 'Home' },   
    { id: 2, label: 'About' },                   
    { id: 3, label: 'Contact' } 
]






function Sidebar(items: any ) {
    return (
   <>       
   <div className="sidebar">

    <div className="sidebar-item">
        <ul>
           <li>{items.label}</li>
        </ul>
    </div>
   </div>
   
   </>
    )}

export default Sidebar;