import React from "react";

export class Comments extends React.Component {
  constructor(props){
    super(props);
    var initialComments = this.props.comms;

    this.state = {
      comments: initialComments,
      clicks: 3,
      n: "Me",
      c: "My Comment"
    }
  }
  nickChange = (evt) =>{
    this.setState({
      n:evt.target.value
    });
  }
  commentChange = (evt) =>{
    this.setState({
      c: evt.target.value
    });
  }

  doStuff(event){
    this.setState({
      clicks: this.state.clicks += 1
    });
  }

  handleSubmit = (evt) =>{
    evt.preventDefault();
    var newComm = {
      nick: this.state.n,
      comment: this.state.c
    }
    this.setState({
      comments: comments[comments.length] = newComm
    });
  }
  render() {
    return(
      <div>
      <button type="submit" onClick={() => this.doStuff()}>clicker</button>
        <div className="">
            <div className="grey">
                <ul className="collection grey">
                    {this.state.comments.map(
                      (payload,i)=>
                      <li className="collection-item avatar" key={i}>
                          <i className="material-icons circle">create</i>
                          <span className="title"><strong>{payload.nick} - {this.state.clicks}</strong></span>
                          <p>
                              {payload.comment}
                          </p>
                      </li>
                    )}
                </ul>
            </div>
            <ul className="collection grey" >
            <li className="collection-item avatar">
                <i className="material-icons circle">create</i>
                <span className="title"><strong>{this.state.n} - {this.state.clicks}</strong></span>
                <p>
                    {this.state.c}
                </p>
            </li>
            </ul>
        </div>
        <div className="row">
            <form onSubmit={this.handleSubmit}  className="col s12">
                <div className="row">
                    <div className="input-field col s2">
                        <input className="validate"  id="nick" type="text" onChange={this.nickChange} value={this.state.n} name="nick"/>
                        <label className="active" htmlFor="nick">Nick</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <textarea type="text" className="materialize-textarea" onChange={this.commentChange} id="textarea1" name="comment"></textarea>
                        <label className="active" htmlFor="textarea1">Leave a comment</label>
                    </div>
                </div>
                <div className="row col s3">
                      <button className="btn waves-effect waves-light">Submit
                      </button>
                </div>
            </form>
        </div>
      </div>
    );
  }
}
