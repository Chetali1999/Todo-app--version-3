import TODOItem from "./TODOItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {

    return (
        <div>
            {
                todoItems.map((item) => (
                    <TODOItem
                        key={item.name}
                        todoName={item.name}
                        todoDate={item.dueDate}
                        onDeleteClick={onDeleteClick}
                    ></TODOItem>
                ))
            }
        </div>
    )
}

export default TodoItems;