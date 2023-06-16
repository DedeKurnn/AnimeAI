import SearchForm from "../UI/SearchForm"

const Search = () => {
    return (
        <div className="mx-auto flex flex-col items-center">
            <div className="text-center">
                <h1 className="text-5xl font-poppins font-bold mt-8">Cari anime berdasarkan deskripsi</h1>
                <p className="mt-4 font-poppins">Anime apa yang karakternya terlalu over powered dan kepalanya botak</p>
            </div>
            <SearchForm />
        </div>
    )
}

export default Search