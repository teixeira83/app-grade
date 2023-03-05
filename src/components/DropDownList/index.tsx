import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {
  ContentContainer,
  IDropDownList,
} from '../../types/components/dropDown';
import { ListItem } from '@rneui/themed';

export function DropDownList({
  title,
  containers,
}: IDropDownList): JSX.Element {
  const AccordionListItem = ({ id, title, contents }: ContentContainer) => {
    const [expanded, setExpanded] = useState(false);

    return (
      <ListItem.Accordion
        key={`${id}${title}`}
        containerStyle={styles.container}
        content={<Text>{title}</Text>}
        isExpanded={expanded}
        onPress={() => setExpanded(!expanded)}
      >
        {contents.map((container) => container)}
      </ListItem.Accordion>
    );
  };
  // useEffect(() => console.log(containers));
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>

      <FlatList
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={containers}
        renderItem={({ item }) => <AccordionListItem {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#333333',
    borderWidth: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
