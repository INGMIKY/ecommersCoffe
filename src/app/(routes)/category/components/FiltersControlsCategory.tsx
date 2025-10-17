import FilterOrigin from "./FilterOrigin";

type FilterControlsCategoryProps = {
    setFilterOrigin: (origin: string) => void
}

const FiltersControlsCategory = (props: FilterControlsCategoryProps) => {

    const { setFilterOrigin } = props;

    return (
        <div className="sm:w-[350px] sm:mt-5 p-6">
            <FilterOrigin setFilterOrigin={setFilterOrigin}/>
        </div>
    )
}

export default FiltersControlsCategory;