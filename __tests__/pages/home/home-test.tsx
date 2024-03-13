import 'react-native';
import React from 'react';
import Home from '../../../src/pages/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('@rneui/themed', () => ({
    ListItem: jest.fn().mockReturnValue(null), // Mockando a função ListItem para retornar null
}));

jest.mock('react-native-vector-icons/MaterialIcons', () => ({
    Icon: jest.fn().mockReturnValue(null),
}));


it('renders correctly', () => {
    renderer.create(<Home />);
});
