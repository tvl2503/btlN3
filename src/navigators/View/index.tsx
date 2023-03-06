import React from "react";
import { Text } from "react-native";
import { ACTION_TYPE } from "../../constants/actions";
import useListenerAction from "../../hook/useListenerAction";

const View = () => {
  const { data } = useListenerAction({
    key: ACTION_TYPE.TEST,
  });
  console.log(data);
  return (
    <Text>Test</Text>
  );
}

export default View;
