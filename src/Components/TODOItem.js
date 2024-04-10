
const TODOItem = ({ todoName, todoDate, onDeleteClick }) => {

    return (
        <>
            <div className='container'>
                <div className='row kg-row'>
                    <div className='col-4'>
                        {todoName}
                    </div>
                    <div className='col-4'>
                        {todoDate}
                    </div>
                    <div className='col-4'>
                        <button type='button' className='btn btn-danger kg-button' onClick={() => onDeleteClick(todoName)}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default TODOItem;