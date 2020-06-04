import React, { Component } from "react";

class ReturnUserCardComponent extends Component{
    constructor(props){
      super(props);
      this.state={
      };
    }

    render(){
        return(
            <div className="jt_cte_area jt_cte_area-shrinkwrap">
                <h3>
                    Returning Users:</h3>
                <div className="jt_cte_area_content">
                    <table className="jt_cte_form_table jt_cte_ft-heading-nowrap" border="0" cellPadding="2" cellSpacing="0" width="500px;">
                        <tbody><tr>
                            <td>
                                <a className="button1" href="/mentors">Mentors List</a>
                            </td>
                            <td>
                                <a className="button1" href="/mentees">Mentees List</a>
                            </td>
                        </tr>
                    </tbody></table>
                </div>
            </div>
        )
    }
}

export default ReturnUserCardComponent;