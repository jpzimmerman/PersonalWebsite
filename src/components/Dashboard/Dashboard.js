import { React, Component } from "react";
import ImageModal from "../ImageModal/ImageModal";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { show: false };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => this.setState({ show: true });
  hideModal = () => this.setState({ show: false });

  render() {
    return (
      <section>
        <main>
          <h1>React Modal</h1>
          <ImageModal show={true} handleClose={this.hideModal} />
          <button type="button" onClick={this.showModal} Open></button>
        </main>
      </section>
    );
  }
}

export default Dashboard;
