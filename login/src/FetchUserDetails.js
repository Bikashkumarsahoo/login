import React from "react";

export default class FetchUserDetails extends React.Component{
    state ={
        loading : true,
        student : null
    };

    async componentDidMount() {
        const url = "http://localhost:8200//students/studentdetails";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
       this.setState({ student: data, loading: false});
      }

    render()
    {
            if(this.state.loading)
            {
                return (
                    <h1>hello</h1>

                )
            }
            return (
                <div>
                <div>Name:{this.state.student.name}</div>
                <div>City:{this.state.student.city}</div>
                <div>Phone{this.state.student.phoneno}</div>
                </div>
            )

    }
}