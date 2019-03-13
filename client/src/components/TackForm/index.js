import React from 'react';
import './style.css'
import Draggable from 'react-draggable';
// const contstyle = {
//     margin: '5rem 0rem 0rem 0rem'
// }

export default class TackForm extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }
    render () {
    return (

            <div>
            {/* <form class="form-inline" action="/action_page.php">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter email" name="email">
            <label for="pwd">Password:</label>
            <input type="password" id="pwd" placeholder="Enter password" name="pswd">
            <label>
              <input type="checkbox" name="remember"> Remember me
            </label>
            <button type="submit">Submit</button>
          </form> */}
                        <row className='taskTack'>
                            <form class='form-inline' onSubmit={this.onSubmit}> 
                            {/* <div class="col-sm-3"> */}
                                <h3>Create Task</h3>
                                <br></br><br></br>
                            {/* </div> */}
                            {/* <div class="col-sm-3">  */}
                                <label>Task: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.todo_description}
                                        onChange={this.onChangeTodoDescription}
                                        />
                            {/* </div> */}
                            {/* <div class="col-sm-3"> */}
                                <label>Assigned To: </label>
                                <input 
                                        type="text" 
                                        className="form-control"
                                        value={this.state.todo_responsible}
                                        onChange={this.onChangeTodoResponsible}
                                        />
                            {/* </div> */}
                            {/* <div class="col-sm-3"> */}
                                <div className="form-check form-check-inline">
                                    <input  className="form-check-input" 
                                            type="radio" 
                                            name="priorityOptions" 
                                            id="priorityLow" 
                                            value="Low"
                                            checked={this.state.todo_priority==='Low'} 
                                            onChange={this.onChangeTodoPriority}
                                            />
                                    <label className="form-check-label">Low</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input  className="form-check-input" 
                                            type="radio" 
                                            name="priorityOptions" 
                                            id="priorityMedium" 
                                            value="Medium" 
                                            checked={this.state.todo_priority==='Medium'} 
                                            onChange={this.onChangeTodoPriority}
                                            />
                                    <label className="form-check-label">Medium</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input  className="form-check-input" 
                                            type="radio" 
                                            name="priorityOptions" 
                                            id="priorityHigh" 
                                            value="High" 
                                            checked={this.state.todo_priority==='High'} 
                                            onChange={this.onChangeTodoPriority}
                                            />
                                    <label className="form-check-label">High</label>
                                </div>
                                {/* </div> */}

                                <div className="form-group">
                                    <input type="submit" value="Create Task" style={{color: 'tan',  borderRadius: 0, backgroundColor: '#6b2302', 
                                     borderColor: '#6b2302', borderWidth: '5px', borderStyle: 'ridge',
                                     fontWeight: 'bold'}} />
                                </div>
                            </form>
                            </row>
                         </div>
                    )
                }
            }
            // <div className="container" style={contstyle}>
            //     <div className="card" id="tackform" style={{ width: '18rem' }}>
            //         <div className="card-body">
            //             <h5 className="card-title">Sample Form </h5>
            //             <p className="card-text">
            //                 Create a new Character
            //             </p>
            //             <form>
            //                 <div className="form-group">
            //                     <label for="exampleInputEmail1">Email address</label>
            //                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            //                     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            //                 </div>
            //               <div className="form-group">
            //                 <label for="exampleInputPassword1">Password</label>
            //                 <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            //             </div>
            //             <div className="form-check">
            //                 <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            //                 <label className="form-check-label" for="exampleCheck1">Check me out</label>
            //             </div>
            //             <button type="submit" className="btn btn-primary">Submit</button>
            //             </form>

                        
            //         </div>
            //     </div>
            // </div>



//     )
// }
// }
// export default TackForm;
