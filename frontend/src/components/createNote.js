import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default class createNote extends Component {
    state = {
        users: [],
        userSelected: '',
        title:'', 
        content:'',
        date: new Date(),
        editing: false,
        _id:''
    }

    async componentDidMount() {
        
        const res = await axios.get('https://app-b7448b98-af44-4d94-ae4a-f7646a34b9d6.cleverapps.io/api/users');
        this.setState({ users: res.data.map(user => user.username), 
            userSelected: res.data[0].username
        });
        if(this.props.match.params.id) { 
            const res = await axios.get('https://app-b7448b98-af44-4d94-ae4a-f7646a34b9d6.cleverapps.io/api/notes/' + this.props.match.params.id)
            this.setState({
                title: res.data.title,
                content: res.data.content, 
                date: new Date(res.data.date), 
                userSelected: res.data.author,
                editing: true,
                _id: this.props.match.params.id
            });

        }
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const newNote =  {
            title: this.state.title, 
            content: this.state.content, 
            date: this.state.date, 
            author: this.state.userSelected
        };
        if(this.state.editing) {
            await axios.put('https://app-b7448b98-af44-4d94-ae4a-f7646a34b9d6.cleverapps.io/api/notes/' + this.state._id, newNote);
        } else { 
            await axios.post('https://app-b7448b98-af44-4d94-ae4a-f7646a34b9d6.cleverapps.io/api/notes', newNote)
        }  
       window.location.href = '/';
    }


    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => { 
        this.setState({date: date});
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create Note</h4>

                    {/** SELECT USER */}
                    <div className="form-group">
                        <select 
                        name="userSelected" 
                        onChange={this.onInputChange} 
                        className="form-control"
                        value={this.state.userSelected}
                        >
                            <option value="null">General</option>
                            {
                                this.state.users.map(user =>
                                    <option key={user} value={user}>
                                        {user}
                                    </option>)
                            }
                        </select>
                    </div>

                    <div className="form-group">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            name="title"
                            onChange={this.onInputChange}
                            value={this.state.title}
                            required
                        />

                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            name="content"
                            placeholder="Content"
                            onChange={this.onInputChange}
                            value={this.state.content}
                            required
                        >
                        </textarea>
                    </div>

                    <div className="form-group">
                        <DatePicker
                            className="form-control"
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Save
                    </button>
                    </form>
                </div>
            </div>
        )
    }
}
