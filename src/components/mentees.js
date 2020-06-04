import React, { Component } from "react";
import axios from 'axios';

class MenteesComponent extends Component{
    constructor(props){
      super(props);
      this.state={
        mentees: []
      };
    }

    getData() {
        axios.request({
            url: 'https://699aa5b6-c408-4c84-8ff3-86e59dc1e0d0.mock.pstmn.io/mentee/profiles',
            headers: {
              'x-api-key': 'PMAK-5ed6ea0fa2d39e004e7d2120-180ac63c57ca805dc47ef4655a807ae23d'
            },
            method: 'get',
          }).then(result => {
              console.log(result);
            this.setState({
                mentees: result.data.SearchMenteeProfilesResponse,
            });
          }).catch(ex => {
            // alert('Unable to block');
            console.log('Unable to pull data');
          });
    }

    componentDidMount() {
        this.getData();
    }

    render(){
        const { mentees } = this.state;

        return(
            <div>
                <h2>Menteess</h2>

                <div>
                    { mentees.map(function(mentee, index){
                        return <div className="card mentor-mentee-card" key={index}>
                        <div className="card-body">
                            <h5 className="card-title" >{ mentee.mentee_name }</h5>
                            <h6 className="card-subtitle text-muted mb-2 card-job-title">{ mentee.job_title }</h6>
                            <h6 className="card-subtitle text-muted mb-1 card-employer">{ mentee.employer }</h6>
                            <h6 className="card-subtitle text-muted mb-2 card-location" >{mentee.state} , {mentee.city}</h6>
                            <p className="card-text">{ mentee.summary }</p>
                            <a href={'/mentor/profile/' + mentee.user_id } className="card-link">View More</a>
                        </div>
                        </div>;
                    })}
                </div>
            </div>
            
        )
    }
}

export default MenteesComponent;