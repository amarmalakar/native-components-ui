import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Colors from '../_configs/Colors';
import Font from '../_configs/Font';
import FontSize from '../_configs/FontSize';
import SPACE from '../_configs/SPACE';

export default function AppTextInput({ ...otherProps }) {
  const { SPACING: Spacing } = SPACE;
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      style={[
        {
          fontFamily: Font["poppins-regular"],
          fontSize: FontSize.small,
          padding: Spacing * 2,
          backgroundColor: Colors.lightPrimary,
          borderRadius: Spacing,
          marginVertical: Spacing,
        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.primary,
          shadowOffset: { width: 4, height: Spacing },
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
      {...otherProps}
    />
  )
}