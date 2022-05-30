import React, {useEffect} from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

import { VIWELL_COLORS } from '../../styles';
// import useProject from '../../../../hooks/useProject';

const ProjectScreen = () => {

    // const { project, fetchProjectById } = useProject();

    // useEffect(() => {
    //     fetchProjectById('test');
    // }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView style={{alignSelf: 'stretch'}}>
                {/* <View style={{ marginHorizontal: 32, marginTop: 32}}>
                    <View style={styles.topContainer}>
                        <Text>{ project ? project.name : ''}</Text>
                    </View>
                </View> */}
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: VIWELL_COLORS.bgColor,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default ProjectScreen;
