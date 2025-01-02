import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const errorNotify = () => toast.error("The field must not be empty.");

const SearchBar = ({ onSearch }) => {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const searhInput = evt.target;
		const userQuery = searhInput.elements.search.value;

		if (userQuery.trim() === "") {
			errorNotify();
			return;
		}

		onSearch(userQuery);
		searhInput.reset();
	};

	return (
		<form onSubmit={handleSubmit} className={css.searchBar}>
			<input
				type="text"
				autoComplete="off"
				autoFocus
				placeholder="Search images and photos"
				name="search"
			/>
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchBar;
