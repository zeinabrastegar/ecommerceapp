const DrawerNavigation = DrawerNavigator({
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: "RN WC Store"
      }
    },
    Products: {
      screen: Products,
      navigationOptions: {
        title: "Shop"
      }
    },
    Product: {
      screen: Product,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.product.name
      }),
    },
    CartPage: {
      screen: CartPage,
      navigationOptions: {
        title: "Cart"
      }
    }
   }, {
      contentComponent: DrawerContainer
    });
   