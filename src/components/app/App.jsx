import ImageGallery from "../imageGallery/ImageGallery";
import SearchBar from "../searchBar/SearchBar";
import { Toaster } from "react-hot-toast";

const App = () => {
	return (
		<>
			<Toaster />
			<header>
				<SearchBar />
			</header>
			<body>
				<ImageGallery />
			</body>
		</>
	);
};

export default App;
