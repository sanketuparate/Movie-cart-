// import { Component } from "react";



// class Student extends Component{
    
//     render(){
//         console.log(this.props);
//         const {stuname,marks} =this.props
//         return(
//            <>
//            <h2>Hello ,{stuname}</h2>
//            <p>You have Scored{marks}%</p>
//            <hr/>
//            </>
//         )
//     }
// }

function Student(props){
    const{stuname,marks}=props;
    return(
            <>
            <h2>Hello ,{stuname}</h2>
            <p>You have Scored{marks}%</p>
            <hr/>
            </>
    )
}

export default Student;