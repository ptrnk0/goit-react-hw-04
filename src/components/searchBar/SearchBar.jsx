import toast from "react-hot-toast";

const errorNotify = () => toast.error("The field must not be empty");

const SearchBar = ({ onSubmit }) => {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const userInput = evt.target.elements.search.value;

		if (userInput.trim() === "") {
			errorNotify();
			return;
		}

		onSubmit(userInput);
	};

	return (
		<form onSubmit={handleSubmit}>
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
