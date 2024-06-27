import { Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import Svg, { Path, Rect } from "react-native-svg";

const CustomTextInput = ({ title, isSecureText, handleOnChangeText, handleValue, handlePlaceholder, keyboardType }) => {
    return (
        <View className="w-[80%] mb-5">
            <Text className="font-bold flex-start text-white">{title}</Text>
            <TextInput
                autoCapitalize='none'
                placeholder={handlePlaceholder}
                placeholderTextColor="#fff"
                secureTextEntry={isSecureText}
                className="w-full h-12 text-white border-white border-b border-x rounded-b pr-4 pl-9 mt-2 bg-transparent"
                onChangeText={handleOnChangeText}
                value={handleValue}
                keyboardType={keyboardType}
            />
            {title == "Password" ? (
                <Svg
                    fill="white"
                    className="absolute bottom-[14px] left-2"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                >
                    <Path d="M17,9V7c0-2.8-2.2-5-5-5S7,4.2,7,7v2c-1.7,0-3,1.3-3,3v7c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3v-7C20,10.3,18.7,9,17,9z M9,7c0-1.7,1.3-3,3-3s3,1.3,3,3v2H9V7z" />
                </Svg>
            ) : (title == "Email" ? (
                <Svg
                    fill="white"
                    className="absolute bottom-[14px] left-2"
                    width="24px"
                    height="24px"
                    viewBox="0 0 36 36"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <Rect
                        className="clr-i-solid clr-i-solid-path-1"
                        x={10}
                        y={5.2}
                        width={18}
                        height={1.55}
                    />
                    <Path
                        className="clr-i-solid clr-i-solid-path-2"
                        d="M29,8H9.86A1.89,1.89,0,0,1,8,6,2,2,0,0,1,9.86,4H29a1,1,0,1,0,0-2H9.86A4,4,0,0,0,6,6a4.14,4.14,0,0,0,0,.49,1,1,0,0,0,0,.24V30a4,4,0,0,0,3.86,4H29a1,1,0,0,0,1-1V9.25s0-.06,0-.09,0-.06,0-.09A1.07,1.07,0,0,0,29,8Z"
                    />
                    <Rect x={0} y={0} width={36} height={36} fillOpacity={0} />
                </Svg>
            ) : (
                <Svg
                        fill="white"
                        className="absolute bottom-[14px] left-2"
                        width="22px"
                        height="22px"
                        viewBox="0 0 36 36"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <Path
                            className="clr-i-solid clr-i-solid-path-1"
                            d="M4.22,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13,32,28.84,16.22,20,7.4Z"
                        />
                        <Path
                            className="clr-i-solid clr-i-solid-path-2"
                            d="M33.82,8.32l-5.9-5.9a2.07,2.07,0,0,0-2.92,0L21.72,5.7l8.83,8.83,3.28-3.28A2.07,2.07,0,0,0,33.82,8.32Z"
                        />
                        <Rect x={0} y={0} width={36} height={36} fillOpacity={0} />
                    </Svg>
            ))}
        </View>
    )
}

export default CustomTextInput