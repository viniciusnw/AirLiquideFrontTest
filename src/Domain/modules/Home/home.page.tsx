import React from 'react';
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import Redux from './../../redux';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Icon, Logo, List, Item } from './../../Components';

interface HomeProps {
  products: any
  LIST_HOME_PRODUCTS: () => any
  setTopBar: ({ }: any) => any
}

type RootStackParamList = {
  Home: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Home'>;

class Home extends React.PureComponent<HomeProps & Props, any> {

  constructor(props) {
    super(props)
    const { name } = this.props.route;
    this.props.setTopBar({ title: name })
  }

  render() {
    const { products } = this.props;
    const { data, loading, success, error } = products;

    return (
      <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 24 }}>

          <Logo />

          <Text />
          {loading && <Text> Waiting... </Text>}
          {!loading && !success && <Text> Press Button to load Products </Text>}
          {success && <Text> Press Button to Re-load Products </Text>}
          <Text />
          <Text />
          <Text />

          {
            success &&
            <List data={data} renderItem={({ item }) => <Item {...item} />} />
          }

          {
            error && (
              <>
                <Text> Ops, ocorreu algum erro </Text>
                <Text />
                <Text />
                <Text />
              </>
            )
          }

          {
            loading
              ? <ActivityIndicator size='small' color={'red'} />
              : (
                <Button onPress={this.props.LIST_HOME_PRODUCTS}>
                  <Text> Get Products </Text>
                </Button>
              )
          }
        </View>
      </>
    )
  }
}

function mapStateToProps({ products }) {
  return {
    products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    LIST_HOME_PRODUCTS: () => dispatch(Redux.actions.LIST_HOME_PRODUCTS())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);