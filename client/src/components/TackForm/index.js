import React from 'react';
import Draggable from 'react-draggable';
const contstyle = {
    margin: '5rem 0rem 0rem 0rem'
}

function TackForm(props) {
    // const ndata = props;
    return (
        <Draggable>
            <div className="container" style={contstyle}>
                <div className="card" id="tackform" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Sample Form </h5>
                        <p className="card-text">
                            Create a new Character
                        </p>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                          <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                        
                    </div>
                </div>
            </div>
        </Draggable>

    )
}
export default TackForm;
