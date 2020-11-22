const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {screen: DrawerNavigation},
  },
  {
    headerMode: 'float',
    navigationOptions: ({navigation, screenProps}) => ({
      headerStyle: {backgroundColor: '#4C3E54'},
      headerTintColor: 'white',
      headerLeft: drawerButton(navigation),
      headerRight: cartButton(navigation, screenProps),
    }),
  },
);

const drawerButton = (navigation) => (
  <>
    <Text
      style={{padding: 15, color: 'white'}}
      onPress={() => {
        if (navigation.state.index === 0) {
          navigation.navigate('DrawerOpen');
        } else {
          navigation.navigate('DrawerClose');
        }
      }}>
      (
    </Text>
    <Text
      style={{padding: 15, color: 'white'}}
      onPress={() => {
        navigation.navigate('CartPage');
      }}>
      <EvilIcons name="cart" size={30} />
      {screenProps.cartCount}
    </Text>
    );
  </>
);
