import React, { Component, ReactNode } from 'react';
import BtnLoadMore from './components/BtnLoadMore';
import ImageGallery from './components/ImageGallery';
import Spinner from './components/Loader';
import Modal from './components/Modal';
import BigImageModal from './components/Modal/BigImageModal/BigImageModal';
import Searchbar from './components/Searchbar';
import fetchApi from './Services';

// interface Props {
//   initialState: {
//     query: string[];
//     currentPage: number;
//     selectImg: string;
//     showModal: boolean;
//     error: null | boolean;
//   };
// }

interface State {
  searchQuery: string;
  loader: boolean;
  query: string[];
  currentPage: number;
  selectImg: string;
  showModal: boolean;
  error: null | boolean;
  children?: ReactNode;
}

class App extends Component<{}, State> {
  // static defaultProps = {
  //   initialState: {
  //     query: [],
  //     currentPage: 1,
  //     selectImg: '',
  //     showModal: false,
  //     error: null,
  //   },
  // };

  state = {
    searchQuery: '',
    loader: false,
    query: [],
    currentPage: 1,
    selectImg: '',
    showModal: false,
    error: null,
  };

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchQuery();
    }
  }

  handleSubmitForm = (userQuery: string) => {
    this.setState({
      searchQuery: userQuery,
      query: [],
      currentPage: 1,
      selectImg: '',
      showModal: false,
      error: null,
    });
  };

  fetchQuery = async () => {
    const { searchQuery, currentPage } = this.state;
    const options = { q: searchQuery, page: currentPage };

    this.setState({ loader: true });

    try {
      const hits = await fetchApi(options);

      this.checkLengthArray(hits.length);

      this.setState(({ query, currentPage, loader }) => ({
        query: [...query, ...hits],
        currentPage: currentPage + 1,
        loader: !loader,
      }));

      this.toWindowScroll();
    } catch {
      this.setState({ loader: false });
    }
  };

  checkLengthArray = (value: number) => {
    if (value > 0 && value < 12) {
      this.setState({ error: true });
    }
  };

  toWindowScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  toggleModal = async (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    await this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

    if (this.state.showModal) {
      const url = (e.target as HTMLImageElement).dataset.url!;

      this.setState({ selectImg: url });
    }
  };

  render() {
    const { query, loader, error, showModal, selectImg } = this.state;
    const shoudRenderBtnLoadMore = query.length !== 0 && !loader && !error;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmitForm} />

        <ImageGallery query={query} onOpenModal={this.toggleModal} />

        <Spinner isVisible={loader} />

        {shoudRenderBtnLoadMore && <BtnLoadMore onClickBtn={this.fetchQuery} />}

        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <BigImageModal largeImg={selectImg} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
