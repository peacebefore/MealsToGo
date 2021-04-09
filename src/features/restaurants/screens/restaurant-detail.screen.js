import React, { useState, useContext } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { OrderButton } from "../components/restaurant-list.styles";
import { CartContext } from "../../../services/cart/cart.context";

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <Divider />
          <List.Item title="Banana Walnut Pancakes" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Chicken Tikka Masala" />
          <Divider />
          <List.Item title="Fish and Chips" />
          <Divider />
          <List.Item title="Super Quesadilla" />
          <Divider />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Yellow Curry" />
          <Divider />
          <List.Item title="Chicken Piccata" />
          <Divider />
          <List.Item title="Sake Don" />
        </List.Accordion>
        <Divider />

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Boba Tea" />
          <Divider />
          <List.Item title="Lemonade" />
          <Divider />
          <List.Item title="Mango Lassi" />
          <Divider />
          <List.Item title="Horchata" />
          <Divider />
          <List.Item title="Hot Chocolate" />
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cash-usd"
          mode="contained"
          onPress={() => {
            addToCart({ item: "special", price: 1299 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Order Special Only 12.99!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
