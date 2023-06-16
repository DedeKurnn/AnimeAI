import PropTypes from 'prop-types'

const SearchForm = (props) => {
    return (
        <form action="#" className={`${props.className} mt-8 rounded-full border-2 border-black`}>
            <input type="text" className='w-96 py-2 px-4 rounded-full'></input>
            <button>Search</button>
        </form>
    )
}
SearchForm.propTypes = {
    className: PropTypes.string
}

export default SearchForm
