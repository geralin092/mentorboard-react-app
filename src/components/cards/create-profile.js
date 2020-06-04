import React, { Component } from "react";

class CreateProfileCardComponent extends Component{
    constructor(props){
      super(props);
      this.state={
      };
    }

    render(){
        return(
            <div className="jt_cte_area jt_cte_area-shrinkwrap dpo">
                <h3> Create a New Profile:</h3>

                <p>
                    Create a new profile and become a mentor or mentee!<br />
                    Register once and use the same log in credentials to create and access mentor or
                    mentee accounts.
                </p>
                <div className="jt_cte_area_content">
                    <table className="jt_cte_form_table jt_cte_ft-heading-nowrap" border="0" cellPadding="0" cellSpacing="0" width="500px">
                        <tbody><tr>
                            <td>
                                <a className="button1" href="/RRC/User/RegisterMentor">Mentor Registration</a>
                            </td>
                            <td>
                                <a className="button1" href="/RRC/User/RegisterMentee">Mentee Registration</a>
                            </td>
                        </tr>
                    </tbody></table>
                </div>
            </div>
        )
    }
}

export default CreateProfileCardComponent;