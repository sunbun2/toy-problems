function Task(props) {
    console.log("task dsiplay")
    return <li
    style={{

        color: props.task.status ? "red" : "black"
        
    }}
>
        
    
    {props.name}, {props.dueDate.toLocaleTimeString()} ,{' '}

    <input type = "checkbox" onChange = {() =>{
        props.onChange(props.task.id);
    }}
    />
    <button value = "Delete" onClick = {() =>
        props.onDelete(props.task.id)
    }>Delete</button>
    
    </li>
}


class TodoList extends React.Component {
    constructor(props) {
        console.log("todolist")
        super(props);
        this.state = {list: props.list};

        this.handleAddTask = this.handleAddTask.bind(this);
    }
    handleAddTask(task) {
        console.log("add task clicked");
        this.state.list.push(task);
        this.setState({list: this.state.list})
    }
    handleDeleteTask = (taskId) => {
		console.log('delete button clicked');
		const list = this.state.list.filter((t) => t.id !== taskId);
		this.setState({ list: list });
    };
    
    handleChange = (taskId) => {
		console.log('checkbox clicked');
		this.setState({
			list: this.state.list.map((task) => {
				if (task.id === taskId) {
					return {
						...task,
						status: !task.status
					};
				} 
				return task;
				
			})
		});
	};

    render() {
        console.log("todolist render")
        return (
            <div>
                <h1>TODO List</h1>
                <ol>
                    {
                        this.state.list.map((t) =>
                            <Task key={t.id} name={t.name} dueDate={t.dueDate} onDelete={this.handleDeleteTask} onChange = {this.handleChange}task = {t} />)
                    }
                </ol>
                <TaskNameForm onAddTask={this.handleAddTask} />
            </div>
        );
    }
}


class TaskNameForm extends React.Component {
    constructor(props) {
        console.log("tasknameform")
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log("handle submit")
        const taskList = this.props.taskList;
        // create a task object
        event.preventDefault();
        const task = {id:Date.now(), name: this.state.value, 
        dueDate: new Date()};
        // add the task object to the task list
        this.props.onAddTask(task);
    }

    handleChange(event) {
        console.log("handle change");
        // code to set the state of the component
        this.setState({value: event.target.value});
    }

    render() {
        console.log("bottom render");
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} 
                onChange={this.handleChange}/>
                <input type="submit" value="Add Task" />
            </form>
        );
    }
}