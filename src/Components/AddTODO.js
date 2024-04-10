import { useState, useRef } from "react";

const AddTODO = ({ onNewItem }) => {

    //   Using State
    // const [todoName, settoName] = useState("");
    // const [todoDueDate, setTodoDueDate] = useState("");
    const todoNameElement = useRef();
    const dueDateElement = useRef();

    //   Using State
    // const handleNameChange = (event) => {
    //     settoName(event.target.value);
    // }

    //   Using State
    // const handleDueDateChange = (event) => {
    //     setTodoDueDate(event.target.value);
    // }

    const handleOnAddedButtonClick = (event) => {
        event.preventDefault();
        //   Using State
        // settoName("");
        // setTodoDueDate("");
        const todoName = todoNameElement.current.value;
        const todoDueDate = dueDateElement.current.value;
        onNewItem(todoName, todoDueDate);
        todoNameElement.current.value = '';
        dueDateElement.current.value = '';
    };

    return (
        <>
            <div className='container'>
                <form className='row kg-row' onSubmit={handleOnAddedButtonClick}>
                    <div className='col-4'>
                        <input type='text'
                            placeholder='Enter TODO Here'
                            // value={todoName}
                            // onChange={handleNameChange}
                            ref={todoNameElement}
                        />
                    </div>
                    <div className='col-4'>
                        <input type='date'
                            // value={todoDueDate}
                            // onChange={handleDueDateChange}
                            ref={dueDateElement}
                        />
                    </div>
                    <div className='col-4'>
                        <button type='submit' className='btn btn-success kg-button'>Add</button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default AddTODO;