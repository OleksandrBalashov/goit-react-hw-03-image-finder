import React, { Component } from 'react';
import BtnLoadMore from './components/BtnLoadMore';
import ImageGallery from './components/ImageGallery/';
import Spinner from './components/Loader';
import Modal from './components/Modal';
import BigImageModal from './components/Modal/BigImageModal/BigImageModal';
import Searchbar from './components/Searchbar/';
import fetchApi from './Services';

const initialState = {
  query: [],
  currentPage: 1,
  selectImg: '',
  showModal: false,
  error: null,
};

class App extends Component {
  state = {
    searchQuery: '',
    loader: false,
    ...initialState,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchQuery();
    }
  }

  handleSubmitForm = userQuery => {
    this.setState({
      searchQuery: userQuery,
      ...initialState,
    });
  };

  fetchQuery = async () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

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

  checkLengthArray = value => {
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

  toggleModal = async e => {
    await this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

    if (this.state.showModal) {
      const { url } = e.target.dataset;

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
            <BigImageModal largeImg={selectImg} onClose={this.toggleModal} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
