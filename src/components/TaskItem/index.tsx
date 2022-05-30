import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VIWELL_COLORS } from '../../styles';

interface IProps {
    id: string;
    name: string;
    point: number;
}

const TaskItem = (props: IProps) => {
    return (
        <View style={styles.container}>
            <Text>{props.id}</Text>
            <Text>{props.name}</Text>
            <Text>{props.point}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: VIWELL_COLORS.bgColor
    },
});

export default TaskItem;
