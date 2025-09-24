import { Text, View, Button, TextInput } from 'react-native';

export default props => {
    return (
        <View>
            <Text>Componente numero {props.num}</Text>
            <TextInput></TextInput>
            <Button title={props.propriedade}></Button>
        </View>
    )
}