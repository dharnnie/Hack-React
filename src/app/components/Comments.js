import React from "react";

export class Comments extends React.Component {
  
  onComment(){

  }
  render() {
    return(
      <div>
        // LEAVE A COMMENT
        <div className="">
            <div className="grey">
                <ul className="collection grey">
                    {this.props.comms.map(
                      (payload,i)=>
                      <li className="collection-item avatar" key={i}>
                          <i className="material-icons circle">create</i>
                          <span className="title"><strong>{payload.nick}</strong></span>
                          <p>
                              {payload.comment}
                          </p>
                      </li>
                    )}
                </ul>
            </div>
        </div>
        <div className="row">
            <form className="col s12" action="#">
                <div className="row">
                    <div className="input-field col s2">
                        <input className="validate" id="nick" type="text" name="" value=""/>
                        <label className="active" htmlFor="nick">Nick</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <textarea className="materialize-textarea" id="textarea1" name="name"></textarea>
                        <label className="active" htmlFor="textarea1">Leave a comment</label>
                    </div>
                </div>
                // BUTTON
                <div className="row col s3">
                    <button className="btn waves-effect waves-light">Submit!
                      <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>
      </div>
    );
  }
}
