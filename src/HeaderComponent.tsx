import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const HeaderComponent = ({ navigation }:any) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuPress = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
    setMenuOpen(false);
  };

  const handleBookmarkPress = () => {
    navigation.navigate('Bookmark');
    setMenuOpen(false);
  };

  const handleLogoutPress = () => {
    navigation.navigate('Logout');
    setMenuOpen(false);
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={handleMenuPress}>
        <Icon name="bars" type="font-awesome" size={24} color="#fff" />
      </TouchableOpacity> */}
      <View style={styles.center}>
        <Text style={styles.title}>INSIDER</Text>
      </View>


      {/* {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={handleProfilePress} style={styles.menuItem}>
            <Icon name="user" type="font-awesome" size={18} color="#fff" />
            <Text style={styles.menuItemText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBookmarkPress} style={styles.menuItem}>
            <Icon name="bookmark" type="font-awesome" size={18} color="#fff" />
            <Text style={styles.menuItemText}>Bookmark</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogoutPress} style={styles.menuItem}>
            <Icon name="sign-out" type="font-awesome" size={18} color="#fff" />
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#121212',
  },
  center: {
    padding:10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  right: {},
  menu: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: '#121212',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  menuItemText: {
    color: '#fff',
    marginLeft: 10,
  },
});

export default HeaderComponent;
