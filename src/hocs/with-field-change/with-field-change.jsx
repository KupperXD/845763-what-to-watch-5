import React, {PureComponent} from 'react';

const withFieldChange = (Component) => {
  class WithFieldChange extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        [`review-text`]: null
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;

      this.setState({[name]: value});

    }

    render() {
      return (
        <Component
          {...this.props}
          handleSubmit={this.handleSubmit}
          handleFieldChange = {this.handleFieldChange}
        >

        </Component>
      );
    }
  }

  return WithFieldChange;
};

export default withFieldChange;
