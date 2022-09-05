import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Banner />

//       <Row
//         title="NETFLIX ORIGINALS"
//         id="NO"
//         fetchUrl={requests.fetchNetflixOriginals}
//         isLargeRow
//       />

//       <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
//       <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
//       <Row
//         title="Action Movies"
//         id="AM"
//         fetchUrl={requests.fetchActionMovies}
//       />
//       <Row
//         title="Comedy Movies"
//         id="CM"
//         fetchUrl={requests.fetchComedyMovies}
//       />
//       <Row
//         title="Horror Movies"
//         id="HM"
//         fetchUrl={requests.fetchHorrorMovies}
//       />
//       <Row
//         title="Romance Movies"
//         id="RM"
//         fetchUrl={requests.fetchRomanceMovies}
//       />
//       <Row
//         title="Documentaries"
//         id="DM"
//         fetchUrl={requests.fetchDocumentaries}
//       />
//       <Footer />
//     </div>
//   );
// }

export default App;
