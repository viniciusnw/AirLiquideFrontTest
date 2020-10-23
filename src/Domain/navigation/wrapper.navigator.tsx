import React from 'react';
import { Header } from './../Components'

export default class Wrapper extends React.PureComponent<any, any> {

  constructor(props) {
    super(props)
    this.state = {
      topBar:{
        title: 'AppTest',
        back: null,
        menu: null
      }
    }
  }

  setTopBar = configs => this.setState({topBar: configs})

  render() {
    const { Page } = this.props;
    const { topBar } = this.state;

    return (
      <>
        <Header
          back={topBar.back} 
          menu={topBar.menu} 
          title={topBar.title} />

        <Page 
          {...this.props} 
          setTopBar={this.setTopBar} />
      </>
    )
  }
}