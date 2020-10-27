/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Image = styled.svg`
display: flex;
height: 16px;
max-width: 50%;
margin-right: 8px;
stroke: currentcolor;
stroke-width: 3;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 12px 12px 12px 16px;
  border-color: rgb(34, 34, 34);
  box-shadow: rgb(176, 176, 176) 0px 0px 0px 1px inset;
  background-color: rgb(247, 247, 247);
  border-radius: 30px;
  &:focus-within {
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset;
  }

`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 12px;
  background-color: rgb(221, 221, 221);
  color: rgb(113, 113, 113);
  border-radius: 50%;
  &:hover {
    background-color: rgb(170, 170, 170);
  }
`;

const Input = styled.input`
border: none;
outline: none;
color: rgb(34, 34, 34);
background-color: transparent;
line-height: 20px;
flex: 1 1 0%;
cursor: text;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter(e) {
    const { input } = this.state;
    const { handleSearch } = this.props;
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSearch(input);
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    const { input } = this.state;
    const { clearSearch } = this.props;
    return (
      <Container>
        <Image
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
            <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
          </g>
        </Image>
        <Input placeholder="Search reviews..." autocomplete="off" type="text" onChange={this.handleChange} onKeyDown={this.onEnter} />
        {input.length > 0 ? (
          <CloseContainer onClick={() => { this.setState({ input: '' }); clearSearch(); }}>X</CloseContainer>
        ) : null}
      </Container>
    );
  }
}

export default Search;
