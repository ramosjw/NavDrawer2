import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator} = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function DrawerRoutes(){
    return(
        <Navigator
        >
            <Screen
                name='Home'
                component={ScreenA}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="home" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='Images'
                component={ScreenB}
                options={{
                    drawerLabel: 'Images',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="image" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='Donates'
                component={ScreenC}
                options={{
                    drawerLabel: 'Donates',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="money" 
                            size={22}
                        />
                }}
            />
        </Navigator>
    )
}