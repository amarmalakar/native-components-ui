import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SPACE from '../_config/SPACE';
import categories from '../_config/categories';
import colors from '../_config/colors';

const { SPACING } = SPACE;

export default function Categories({ onChange }: { onChange: any }) {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const handlePress = (id: any) => {
    setActiveCategoryId(id);
    onChange(id);
  };

  
  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ marginVertical: SPACING }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          style={{ marginRight: SPACING * 2, alignItems: "center" }}
        >
          <Text
            style={[
              { color: colors.secondary, fontSize: SPACING * 2 },
              activeCategoryId === item.id && { color: colors.primary },
            ]}
          >
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View
              style={{
                height: SPACING,
                width: SPACING,
                backgroundColor: colors.primary,
                borderRadius: SPACING / 2,
                marginTop: SPACING / 2,
              }}
            />
          )}
        </TouchableOpacity>
      )}
    />
  )
}