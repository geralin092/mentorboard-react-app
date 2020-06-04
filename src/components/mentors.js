import React, { Component } from "react";
import axios from 'axios';

class MentorsComponent extends Component{
    constructor(props){
      super(props);
      this.state={
          mentors: [],
          selected: []
      };
    }

    getData() {
        axios.request({
            url: 'https://699aa5b6-c408-4c84-8ff3-86e59dc1e0d0.mock.pstmn.io/mentor/profiles',
            headers: {
              'x-api-key': 'PMAK-5ed6ea0fa2d39e004e7d2120-180ac63c57ca805dc47ef4655a807ae23d'
            },
            method: 'get',
            // data: this.state.mentors
          }).then(result => {
              console.log(result.data.SearchMentorProfilesResponse);
            this.setState({
                mentors: result.data.SearchMentorProfilesResponse,
            });
          }).catch(ex => {
            // alert('Unable to block');
            console.log('Unable to pull data');
          });
    }

    componentDidMount() {
        this.getData();
    }

    allUsers() {
        let users;

        return users;
    }

    render(){
        const { mentors } = this.state;
        
        return(
            <div>
                <h2>Mentors</h2>

                <div>
                    {/* { mentors } */}
                    { mentors.map(function(mentor, index){
                        return <div className="card mentor-mentee-card" key={index}>
                        <div className="card-body">
                            <h5 className="card-title" >{ mentor.mentor_name }</h5>
                            <h6 className="card-subtitle text-muted mb-2 card-job-title">{ mentor.job_title }</h6>
                            <h6 className="card-subtitle text-muted mb-1 card-employer">{ mentor.employer }</h6>
                            <h6 className="card-subtitle text-muted mb-2 card-location" >{mentor.state} , {mentor.city}</h6>
                            {/* <h6></h6> */}
                            <p className="card-text">{ mentor.summary }</p>
                            <a href={'/mentor/profile/' + mentor.user_id } className="card-link">View More</a>
                        </div>
                        </div>;
                    })}
                </div>
                
            </div>
        )
    }
}

export default MentorsComponent;